#include <Arduino.h>
#include <PubSubClient.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <time.h>

#include "sensors/mq135.hpp"
#include "credentials.hpp"

#define TIME_BETWEEN_READINGS 350

MQ135Sensor mq135;
WiFiClientSecure espClient;
PubSubClient client(espClient);

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
}

void loop()
{
    client.publish(CONTRACT_ADDRESS, String(mq135.getCO2PPM()).c_str());
    Serial.println(CONTRACT_ADDRESS + String(mq135.getCO2PPM()) + " ppm");
    Serial.println();
    delay(TIME_BETWEEN_READINGS);
}
