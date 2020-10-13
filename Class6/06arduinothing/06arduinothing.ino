
int i = 0;

void setup() {
  Serial.begin(9600); // initialize Serial communication
}

void loop() {
   Serial.println(i);

  i = i+1;
  if(i>99) i = 0;

  delay(20);

}
