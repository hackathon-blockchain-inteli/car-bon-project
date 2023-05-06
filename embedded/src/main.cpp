#include <Arduino.h>
#include <PubSubClient.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <time.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>

#include "sensors/mq135.hpp"
#include "credentials.hpp"
#include "screen.hpp"

#define TIME_BETWEEN_READINGS 350

MQ135Sensor mq135;
WiFiClientSecure espClient;
PubSubClient client(espClient);
Screen display;
Adafruit_MPU6050 mpu;

typedef struct
{
    float acceleration;
    float co2;
} Package;

void setDateTime()
{
    // Brazilian time zone
    configTime(0, -3 * 3600, "pool.ntp.org", "time.nist.gov");

    Serial.print("Waiting for NTP time sync: ");
    time_t now = time(nullptr);
    while (now < 8 * 3600 * 2)
    {
        delay(100);
        Serial.print(".");
        now = time(nullptr);
    }
    Serial.println();

    struct tm timeinfo;
    gmtime_r(&now, &timeinfo);
    Serial.printf("%s %s", tzname[0], asctime(&timeinfo));
}

void connectMQTT()
{
    Serial.print("Connecting to MQTT broker...");
    espClient.setInsecure();
    client.setServer(BROKER_SERVER, BROKER_PORT);
    while (!client.connected())
    {
        if (client.connect("MicrocontrollerClient", BROKER_USER, BROKER_PASSWORD))
        {
            Serial.println("  done!.");
        }
        else
        {
            Serial.print("failed with state ");
            Serial.print(client.state());
            delay(2000);
        }
    }
}

void connectWIFI()
{
    Serial.print("Connecting to WiFi...");
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }
    Serial.println("  done!.");
}

void setup()
{
    Serial.begin(115200);

    mq135.begin();

    mq135.calibrate();

    connectWIFI();

    setDateTime();

    connectMQTT();
    display.init();

    if (!mpu.begin())
    {
        Serial.println("Falha ao iniciar o sensor MPU6050!");
        while (1)
            ;
    }

    delay(1000);
}

void loop()
{
    sensors_event_t accelEvent;
    sensors_event_t gyroEvent;
    sensors_event_t tempEvent;
    mpu.getEvent(&accelEvent, &gyroEvent, &tempEvent);
    float c02 = mq135.getCO2PPM();
    float acceleration = (accelEvent.acceleration.x + accelEvent.acceleration.y + accelEvent.acceleration.z) - 9.8;
    client.publish(((String)CONTRACT_ADDRESS + (String) "/co2").c_str(), String(c02).c_str());
    client.publish(((String)CONTRACT_ADDRESS + (String) "/acceleration").c_str(), String(acceleration).c_str());

    display.clear();
    display.drawTextCenter("Acceleration:", 90, 12, 1);
    display.drawTextCenter(String(acceleration) + " m/s^2", 96, 24, 10);
    display.drawTextCenter("CO2:", 64, 36, 1);
    display.drawTextCenter(String(c02) + " PPM", 64, 48, 10);
    display.display();

    delay(TIME_BETWEEN_READINGS);
}
