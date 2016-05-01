#!/usr/bin/env python
import curses
import serial

commands = []

#with open('Yamaha_other.txt') as f:
#    lines = f.read().splitlines()
#
#for line in lines:
#    line = line.strip().split()
#    try:
#        if (line[1][0] == "0"):
#            commands.append(line)
#    except:
#        pass

##print line
##print commands
##exit()

commandIndex = 0;

yamaha = {
    'pre': 'nec ',
    'keys': {
        curses.KEY_UP:     '0x5EA1B946', # YAMAHA_MENU_UP
        curses.KEY_DOWN:   '0x5EA139C6', # YAMAHA_MENU_DOWN
        curses.KEY_LEFT:   '0x5EA1F906', # YAMAHA_MENU_LEFT
        curses.KEY_RIGHT:  '0x5EA17986', # YAMAHA_MENU_RIGHT
        10:  '0x5EA17B84', # YAMAHA_MENU_ENTER
        ord('\\'):'0x5EA155AA', # YAMAHA_MENU_RETURN
        ord('s'): '0x5EA121DE', # YAMAHA_MENU_ON_SCREEN
        ord('a'): '0x5EA1D628', # YAMAHA_MENU_OPTION

        ord('/'): '0x5EA138C7', # mute
        ord('.'): '0x5EA158A7', # volume up
        ord(','): '0x5EA1D827', # volume down
        ord('p'): '0x7e817e81', # power on
        ord('o'): '0x7e81fe01', # power off

        ord('k'): '0x5EA16A95', # YAMAHA_DSP_EFFECT_ONOFF // straight / 7chan
        ord('l'): '0x5EA131CE', # YAMAHA_2CH_7CH // 2ch/7ch stereo
        #ord(''): '', #
    },
}

controller = yamaha

def sendCommand(stdscr, command, message=""):
    ser = serial.Serial('/dev/ttyS2', 9600, timeout=0, write_timeout=0)
    ser.write(command)
    stdscr.addstr(2, 0, command + " :message: " + message + "                                   ")
    ser.close()

stdscr = curses.initscr()
curses.cbreak()
stdscr.keypad(1)

stdscr.addstr(0,0,"Hit 'q' to quit")
stdscr.refresh()

key = ''
while key != ord('q'):
    key = stdscr.getch()
    if key == ord(' '):
        sendCommand(stdscr, '... ')
    else:
        try:
            sendCommand(stdscr, controller['pre'] + controller['keys'][key])
        except:
            pass

    stdscr.refresh()

curses.endwin()
