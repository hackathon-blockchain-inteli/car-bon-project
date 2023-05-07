#include "sensors/mq135.hpp"

MQ135Sensor::MQ135Sensor() : m_mq135(BOARD, VOLTAGE_RESOLUTION, ADC_RESOLUTION, MQPIN, TYPE) {}

void MQ135Sensor::begin()
{
    this->m_mq135.init();

    this->m_mq135.setRegressionMethod(1);
    /*
        Exponential regression:
        GAS      | a      | b
        CO       | 605.18 | -3.937
        Alcohol  | 77.255 | -3.18
        CO2      | 110.47 | -2.862
        Toluen   | 44.947 | -3.445
        NH4      | 102.2  | -2.473
        Aceton   | 34.668 | -3.369
    */
    this->m_mq135.setA(110.47);
    this->m_mq135.setB(-2.862);
}

void MQ135Sensor::calibrate()
{
    Serial.println("Calibrating MQ-135 sensor...");
    float calcR0 = 0;
    for (int i = 1; i <= 10; i++)
    {
        this->m_mq135.update(); // Update data, the arduino will read the voltage from the analog pin
        calcR0 += this->m_mq135.calibrate(RATIONMQ135CLEARAIR);
        Serial.print(".");
    }
    this->m_mq135.setR0(calcR0 / 10);
    Serial.println("  done!.");

    if (isinf(calcR0))
    {
        Serial.println(
            "Warning: Conection issue, R0 is infinite (Open circuit detected) please check your wiring and supply");
        while (1)
            ;
    }
    if (calcR0 == 0)
    {
        Serial.println(
            "Warning: Conection issue found, R0 is zero (Analog pin shorts to ground) please check your wiring and supply");
        while (1)
            ;
    }
}

float MQ135Sensor::getCO2PPM()
{
    this->m_mq135.update();
    return this->m_mq135.readSensor();
}