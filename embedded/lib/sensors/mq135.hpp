#pragma once
#include <MQUnifiedsensor.h>

#define BOARD ("ESP-32")
#define VOLTAGE_RESOLUTION 3.3
#define MQPIN 34
#define TYPE "MQ-135"
#define ADC_RESOLUTION 12
#define RATIONMQ135CLEARAIR 3.6 // RS / R0 = 3.6 ppm

class MQ135Sensor
{
public:
    MQ135Sensor();
    void begin();
    void calibrate();

    float getCO2PPM();

private:
    MQUnifiedsensor m_mq135;
};