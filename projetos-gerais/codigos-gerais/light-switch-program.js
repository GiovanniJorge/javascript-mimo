let isDay = true;
let isLightOn = false;
const batteryLevel = 50;

console.log("Daytime?");
console.log(isDay);
console.log("Lights on?");
console.log(isLightOn);

isDay = false;
isLightOn = !isDay;

console.log("Battery level?");
console.log(batteryLevel + "%");

const isWorking = (isLightOn && batteryLevel > 0);

console.log("Everything working?");
console.log(isWorking);