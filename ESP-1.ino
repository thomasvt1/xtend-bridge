/**
   BasicHTTPClient.ino

    Created on: 24.05.2015

*/

#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <ESP8266HTTPClient.h>

#include <WiFiClient.h>

ESP8266WiFiMulti WiFiMulti;

void setup() {

  Serial.begin(115200);
  // Serial.setDebugOutput(true);

  Serial.println();
  Serial.println();
  Serial.println();

  for (uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP("Xtend-putyournumbershere", "putthepasswordhere");
}

void loop() {
  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) {

    WiFiClient client;

    HTTPClient http;

    if (http.begin(client, "http://10.20.30.1/api/stats/values?fields=79b3,7921,7940,50f2,503e,5041,5088,5077,50ae,50f7,5099,506a,63f0,63b3,63df,6a8e,6ac5,71a7,7160,6a53,8e00,8ef9,8e37,8e18,f9f2,65b0,6579,7ed3,629c,6280,62e7,7767,65d9,6505,77c3,7e51,77d2,65c1,6cfb,6c33,65a7,658a,6c8a,6c61,6578,65d0,6c66,62d1,b28c,b2bc,84d1,7e2c,8439,4133,6c53,6c26,6ceb,7ee6,7e81,7e31,47e0")) {  // HTTP

      // start connection and send HTTP header
      int httpCode = http.GET();

      // httpCode will be negative on error
      if (httpCode > 0) {
        // HTTP header has been send and Server response header has been handled
        // file found at server
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String payload = http.getString();
          Serial.println(payload);
        }
      } else {
        Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
      }

      http.end();
    } else {
      Serial.println("[HTTP] Unable to connect");
    }
  }

  delay(10000);
}
