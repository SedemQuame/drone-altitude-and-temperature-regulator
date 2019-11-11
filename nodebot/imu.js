// Declaring global constants.
const { Board, IMU } = require("johnny-five");
const board = new Board();

// Initializing LCD board.
const lcd = new five.LCD({
    controller: "JHD1313M1"
});

// Declaring acceptable metrics for temperature, acceleration and direction.
// The above metrics are, that of the phantom advance 3 drone

// TEMPERATURE REGULATION CONSTANTS.
const operatingTemperatureRangeMinInCelsius = 0;
const operatingTemperatureRangeMaxInCelsius = 40;


// ALTITUDE REGULATION CONSTANTS.
const operatingAltitudeRangeMinInCm = 30;
const operatingAltitudeRangeMaxInCm = 300;
const maximumAngularSpeedPerSecond = 150;
const maximumTiltAngleInDegrees = 35;
const maximumAscentSpeedInMetersPerSecond = 5;
const maximumAltitudeAboveSeaLevelInMeters = 6000;


// DIRECTIONAL REGULATION CONSTANTS.
const minControllablePitch = -90;
const maxControllablePitch = 30;



// Declaring, warning pins for thermoRegulator, accelRegulator, gyroRegulator.
const thermoRegulatorWarningLed = new five.Led(13);
const accelRegulatorWarningLed = new five.Led(12);
const gyroRegulatorWarningLed = new five.Led(11);



board.on("ready", () => {
    const imu = new IMU({
        controller: "MPU6050"
    });

    imu.on("change", () => {
        // Printing values.
        printDetails();

    });

});

// Utility functions.

// Function to turn on warning Leds.
function turnLedOn(led) {
    turnAllLedOff();
    led.on();
}

// Function for turning off all warning Leds
function turnAllLedOff() {
    thermoRegulatorWarningLed.off();
    accelRegulatorWarningLed.off();
    gyroRegulatorWarningLed.off();
}

// Function for printing, values from IMU sensor.
function printDetails() {
    console.log("Thermometer");
    console.log("  celsius      : ", imu.thermometer.celsius);
    // console.log("  fahrenheit   : ", imu.thermometer.fahrenheit);
    // console.log("  kelvin       : ", imu.thermometer.kelvin);
    console.log("--------------------------------------");

    console.log("Accelerometer");
    console.log("  x            : ", imu.accelerometer.x);
    console.log("  y            : ", imu.accelerometer.y);
    console.log("  z            : ", imu.accelerometer.z);
    console.log("  pitch        : ", imu.accelerometer.pitch);
    console.log("  roll         : ", imu.accelerometer.roll);
    console.log("  acceleration : ", imu.accelerometer.acceleration);
    console.log("  inclination  : ", imu.accelerometer.inclination);
    console.log("  orientation  : ", imu.accelerometer.orientation);
    console.log("--------------------------------------");

    console.log("Gyroscope");
    console.log("  x            : ", imu.gyro.x);
    console.log("  y            : ", imu.gyro.y);
    console.log("  z            : ", imu.gyro.z);
    console.log("  pitch        : ", imu.gyro.pitch);
    console.log("  roll         : ", imu.gyro.roll);
    console.log("  yaw          : ", imu.gyro.yaw);
    console.log("  rate         : ", imu.gyro.rate);
    console.log("  isCalibrated : ", imu.gyro.isCalibrated);
    console.log("--------------------------------------");
}

// This function is used, for printing data on the LCD.
function printDetailsOnLCD() {
    lcd.print("Drone Regulator System");
    lcd.clear();

    // Printing temperature in Celsius.
    lcd.cursor(0, 0).print("Thermometer"); // The starting position of the LCD display.
    lcd.cursor(0, 1).print("Celsius : ", imu.thermometer.celsius);

    // Pause
    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("X : ", imu.accelerometer.x);

    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("Y : ", imu.accelerometer.y);

    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("Z : ", imu.accelerometer.z);

    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("pitch : ", imu.accelerometer.pitch);

    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("roll : ", imu.accelerometer.roll);

    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("yaw : ", imu.accelerometer.yaw);

    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("rate : ", imu.accelerometer.rate);

    lcd.cursor(0, 0).print("Accelerometer");
    lcd.cursor(0, 1).print("isCalibrated : ", imu.accelerometer.isCalibrated);

}


// This function specifies, a set of actions to take.
// When the drone's, temperature is past its normal threshold.
function thermoRegulator() {

}

// This function specifies, a set of actions to take.
// When the drone's, acceleration is not normal.
function accelRegulator() {

}

// This function specifies, a set of action to take.
// When the drone's, direction is not stable
function gyroRegulator() {

}