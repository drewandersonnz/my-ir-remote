var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var portName = '/dev/ttyACM0';

var myPort = new SerialPort(portName, {
    baudRate: 9600,
    // look for return and newline at the end of each data packet:
    parser: serialport.parsers.readline("\n")
});

myPort.on('open', showPortOpen);
myPort.on('data', sendSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
    console.log('port open. Data rate: ' + myPort.options.baudRate);
}

function sendSerialData(data) {
    console.log(data);
}

function showPortClose() {
    console.log('port closed.');
}

function showError(error) {
    console.log('Serial port error: ' + error);
}

module.exports = {
    send: function (request_data) {
        console.log('sending: ' + request_data);

        if (! request_data) {
            return console.log("empty command");
        }

        // TODO: is it worth protecting against injection here?
        myPort.write(request_data);
    }
};
