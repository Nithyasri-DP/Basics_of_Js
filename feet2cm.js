function feettocm(feet) {
  return feet * 30.48;
}
const feet = 5;
const cm = feettocm(feet);
console.log('Centimeter value of 5ft is',cm);