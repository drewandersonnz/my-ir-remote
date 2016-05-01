#include <stdlib.h>

#include <IRremote.h>

#define BLINKLED        2
#define BLINKLED_ON()   (digitalWrite(BLINKLED, HIGH))
#define BLINKLED_OFF()  (digitalWrite(BLINKLED, LOW))

IRsend irsend;

void setup() {
    Serial.begin(115200); //You may alter the BAUD rate here as needed
    while (!Serial); //wait until Serial is established - required on some Platforms
    Serial.println((String) "TIMER_PWM_PIN: " + TIMER_PWM_PIN);
    Serial.println((String) "TIMER_PWM_PIN: " + TIMER_PWM_PIN);
}

String lastString;

void loop() {
    String readString;

    while (Serial.available()) {
        delay(3);  //delay to allow buffer to fill
        if (Serial.available() > 0) {
            char c = Serial.read();  //gets one byte from serial buffer
            readString += c; //makes the string readString
        }
    }

    if (readString.length() <= 0) {
        return;
    }

    if (readString == "... ") {
        if (lastString.length() <= 0) {
            Serial.println((String) "Command not saved");
            return;
        }

        readString = lastString;
    }
    lastString = readString;

    if (readString.substring(4,6) == "0x") {
        long decimal_answer = strtol(readString.substring(4).c_str(), NULL, 16);

        if (readString.substring(0,4) == "nec ") {
            irsend.sendNEC(decimal_answer, 32);
            return;
        } else if (readString.substring(0,4) == "sam ") {
            irsend.sendSAMSUNG(decimal_answer, 32);
            return;
        }
    }

    Serial.println((String) "Unknown command: [" + readString + "]");
}
