#include "CurieIMU.h"

int i = 0;

void setup() {
  Serial.begin(9600); // initialize Serial communication

  CurieIMU.begin();
  // Set the accelerometer range to 2G
  CurieIMU.setAccelerometerRange(2);
}

void loop() {
  float ax, ay, az;   //scaled accelerometer values

  // read accelerometer measurements from device, scaled to the configured range
  CurieIMU.readAccelerometerScaled(ax, ay, az);

  // display space-separated accelerometer x/y/z values
  Serial.print(ax*100.);
  Serial.print(" ");
  Serial.print(ay*100.);
  Serial.print(" ");
  Serial.print(az*100.);
  Serial.println();



}
