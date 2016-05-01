#include <stdlib.h>

#include <IRremote.h>

#define BLINKLED        2
#define BLINKLED_ON()   (digitalWrite(BLINKLED, HIGH))
#define BLINKLED_OFF()  (digitalWrite(BLINKLED, LOW))

IRsend irsend;

void debugVars(int loopCount) {
    Serial.println((String) "loop " + loopCount);
}

int loopCount = 0;

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
        if (Serial.available() >0) {
            char c = Serial.read();  //gets one byte from serial buffer
            readString += c; //makes the string readString
        }
    }

    if (readString.length() <= 0) {
        return;
    }

    loopCount += 1;
    debugVars(loopCount);


    if (readString == "r") {
        if (lastString.length() <= 0) {
            Serial.println((String) "Command not saved");
            return;
        }

        readString = lastString;
    }
    lastString = readString;

    if (readString.substring(0,2) == "yama ") {
        return handleYamaha(readString.substring(2));
    } else if (readString.substring(0,2) == "sams ") {
        return handleSamsung(readString.substring(2));
    }

    Serial.println((String) "Unknown command: " + readString);
}

void handleSamsung(String command) {
    String message = "handleSamsung: ";
    Serial.println(message + command);

    if (command.substring(0,2) == "0x") {
        long decimal_answer = strtol(command.c_str(), NULL, 16);
        Serial.println(decimal_answer);
        return sendCommand_Samsung(command, decimal_answer, 32);
    }
    //else if (command == "vd") return sendCommand_Samsung(command, SAMSUNG_KEY_VOLUMEDOWN, 32);
    //else if (command == "vu") return sendCommand_Samsung(command, SAMSUNG_KEY_VOLUMEUP, 32);
    //else if (command == "vm") return sendCommand_Samsung(command, SAMSUNG_MUTING, 32);
}

void sendCommand_Samsung(String command, unsigned long data, int bits) {
    String message = "Samsung: found command: ";
    Serial.println(message + command);
    irsend.sendSAMSUNG(data, bits);
    delay(1000);

    for (int i = 0; i < 3; i++) {
        Serial.println(message + command);
        irsend.sendSAMSUNG(data, bits);
        delay(40);
    }
}

// KEY_SLEEP                0x000000005EA18778 // B
// KEY_POWER                0x000000005EA147B8 // tuner preset group C
// KEY_MUTE                 0x000000005EA1C738 // tuner preset group D
// KEY_VOLUMEDOWN           0x000000005EA127D8 // tuner preset group E
// volume^                  0x000000005EA1A758 // tuner preset group sub change

#define YAMAHA_SOURCE_PHONO             0x5EA128D7
#define YAMAHA_SOURCE_CD                0x5EA1A857
#define YAMAHA_SOURCE_TUNER             0x5EA16897
#define YAMAHA_SOURCE_VCR_1             0x5EA1F00F
#define YAMAHA_SOURCE_DVR               0x5EA1C837
#define YAMAHA_SOURCE_DVD               0x5EA1837C

#define YAMAHA_EFFECT_HALLS             0x5EA111EE
#define YAMAHA_EFFECT_CLUBS             0x5EA1916E
#define YAMAHA_EFFECT_SPORTS            0x5EA151AE
#define YAMAHA_EFFECT_MONO_MOVIE        0x5EA1D12E
#define YAMAHA_EFFECT_PROLOGIC          0x5EA1B14E // neo6/PL II/Pro Logic
#define YAMAHA_DSP_EFFECT_ONOFF         0x5EA16A95 // straight / 7chan
#define YAMAHA_2CH_7CH                  0x5EA131CE // 2ch/7ch stereo
#define YAMAHA_PURE_DIRECT              0x5EA1BB44 // pure direct

#define YAMAHA_MUTING                   0x5EA138C7
#define YAMAHA_KEY_VOLUMEUP             0x5EA158A7
#define YAMAHA_KEY_VOLUMEDOWN           0x5EA1D827

#define YAMAHA_TUNER_ABCDE              0x5EA148B7
#define YAMAHA_TUNER_PRESET_1           0x5EA1A758
#define YAMAHA_TUNER_PRESET_6           0x5EA157A8
#define YAMAHA_TUNER_PRESET_DOWN        0x5EA18877
#define YAMAHA_TUNER_PRESET_UP          0x5EA108F7

#define YAMAHA_MENU_UP                  0x5EA1B946
#define YAMAHA_MENU_DOWN                0x5EA139C6
#define YAMAHA_MENU_LEFT                0x5EA1F906
#define YAMAHA_MENU_RIGHT               0x5EA17986
#define YAMAHA_MENU_ENTER               0x5EA17B84
#define YAMAHA_MENU_RETURN              0x5EA155AA
#define YAMAHA_MENU_ON_SCREEN           0x5EA121DE
#define YAMAHA_MENU_OPTION              0x5EA1D628

#define YAMAHA_OFF                      0x7e81fe01
#define YAMAHA_SLEEP                    0x5EA1EA15
#define YAMAHA_ZONE1_ON                 0x7e817e81
#define YAMAHA_ZONE2_ON                 0x5EA1FB04

#define YAMAHA_PRM_7CH                  0x5EA123DC

// TapeMon                xx0x5EA131CE // 7ch stereo
// 14                     xx0x5EA1BB44 // pure direct
// 16                     xx0x5EA1FB04 // zone2 on
// Effect                 xx0x5EA1837C // source DVD
// Down                   xx0x5EA123DC // program 7ch
// VolUp                  0x5EA1B14E // program surround decoder


void handleYamaha(String command) {
    String message = "handleYamaha: ";
    Serial.println(message + command);

    if (command.substring(0,2) == "0x") {
        long decimal_answer = strtol(command.c_str(), NULL, 16);
        Serial.println(decimal_answer);
        return sendCommand_Yamaha(command, decimal_answer, 32);
    }
    else if (command == "off")
        return sendCommand_Yamaha(command, YAMAHA_OFF, 32);
    else if (command == "zone1 on")
        return sendCommand_Yamaha(command, YAMAHA_ZONE1_ON, 32);
    else if (command == "zone2 on")
        return sendCommand_Yamaha(command, YAMAHA_ZONE2_ON, 32);
    else if (command == "vd")
        return sendCommand_Yamaha(command, YAMAHA_KEY_VOLUMEDOWN, 32);
    else if (command == "vu")
        return sendCommand_Yamaha(command, YAMAHA_KEY_VOLUMEUP, 32);
    else if (command == "vm")
        return sendCommand_Yamaha(command, YAMAHA_MUTING, 32);
    else if (command == "setup")
        return sendCommand_Yamaha(command, YAMAHA_MENU_ON_SCREEN, 32);
    else if (command == "up")
        return sendCommand_Yamaha(command, YAMAHA_MENU_UP, 32);
    else if (command == "down")
        return sendCommand_Yamaha(command, YAMAHA_MENU_DOWN, 32);
    else if (command == "left")
        return sendCommand_Yamaha(command, YAMAHA_MENU_LEFT, 32);
    else if (command == "right")
        return sendCommand_Yamaha(command, YAMAHA_MENU_RIGHT, 32);
    else if (command == "enter")
        return sendCommand_Yamaha(command, YAMAHA_MENU_ENTER, 32);
    else if (command == "return")
        return sendCommand_Yamaha(command, YAMAHA_MENU_RETURN, 32);
    else if (command == "reset") {
        sendCommand_Yamaha(command, YAMAHA_2CH_7CH, 32);
        return;
    }
    else if (command == "source cd")
        return sendCommand_Yamaha(command, YAMAHA_SOURCE_CD, 32);
    else if (command == "source dvd")
        return sendCommand_Yamaha(command, YAMAHA_SOURCE_DVD, 32);
    else if (command == "source tuner")
        return sendCommand_Yamaha(command, YAMAHA_SOURCE_TUNER, 32);
    else if (command == "tuner up")
        return sendCommand_Yamaha(command, YAMAHA_TUNER_PRESET_UP, 32);
    else if (command == "tuner down")
        return sendCommand_Yamaha(command, YAMAHA_TUNER_PRESET_DOWN, 32);
    else {
        command = "0x000000005EA1" + command;
        long decimal_answer = strtol(command.c_str(), NULL, 16);
        Serial.println(decimal_answer);
        return sendCommand_Yamaha(command, decimal_answer, 32);
    }
}

void sendCommand_Yamaha(String command, unsigned long data, int bits) {
    Serial.println((String) "Found command: " + command);
    irsend.sendNEC(data, bits);
}

