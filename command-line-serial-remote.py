#!/usr/bin/env python

commands = []

with open('Yamaha_other.txt') as f:
    lines = f.read().splitlines()

for line in lines:
    line = line.strip().split()
    try:
        if (line[1][0] == "0"):
            commands.append(line)
    except:
        pass

##print line
##print commands
##exit()

commandIndex = 0;

def sendCommand(stdscr, command, message=""):
    ser = serial.Serial('/dev/ttyS2', 9600, timeout=0, write_timeout=0)
    ser.write(command)
    stdscr.addstr(2, 0, command + " :message: " + message + "                                   ")
    ser.close()

import curses
stdscr = curses.initscr()
curses.cbreak()
stdscr.keypad(1)

stdscr.addstr(0,0,"Hit 'q' to quit")
stdscr.refresh()

import serial

key = ''
while key != ord('q'):
    key = stdscr.getch()
    if key == curses.KEY_UP:
        sendCommand(stdscr, "y up")
    elif key == curses.KEY_DOWN:
        sendCommand(stdscr, "y down")
    elif key == curses.KEY_LEFT:
        sendCommand(stdscr, "y left")
    elif key == curses.KEY_RIGHT:
        sendCommand(stdscr, "y right")
    elif key == 10: # curses.KEY_ENTER:
        sendCommand(stdscr, "y enter")
    elif key == ord('\\'):
        sendCommand(stdscr, "y return")
    elif key == ord('s'):
        sendCommand(stdscr, "y setup")
    elif key == ord('0'):
        sendCommand(stdscr, "y reset")
    elif key == ord('p'):
        sendCommand(stdscr, "y zone1 on")
    elif key == ord('o'):
        sendCommand(stdscr, "y off")
    elif key == ord('7'):
        sendCommand(stdscr, "y source tuner")
    elif key == ord('8'):
        sendCommand(stdscr, "y source dvd")
    elif key == ord('9'):
        sendCommand(stdscr, "y source cd")
    elif key == ord('r'):
        sendCommand(stdscr, "r")
    elif key == ord(','):
        sendCommand(stdscr, "y vd")
    elif key == ord('.'):
        sendCommand(stdscr, "y vu")
    elif key == ord('/'):
        sendCommand(stdscr, "y vm")
    elif key == ord('z'):
        sendCommand(stdscr, "y tuner down")
    elif key == ord('x'):
        sendCommand(stdscr, "y tuner up")
    elif key == ord('b'):
        sendCommand(stdscr, "y 0x5EA1D628")
    elif key == ord('n'):
        sendCommand(stdscr, "y " + commands[commandIndex][1], commands[commandIndex][0])
        commandIndex = commandIndex + 1

    stdscr.refresh()

curses.endwin()
