//Traffic Lights
function doTrafficLights() {
  var activeLight = getActiveLight();
  if (activeLight === "red") {
    turnRed();
  }
  else if (activeLight === "yellow") {
    turnYellow();
  }
  else {
    turnGreen();
  }
  console.log(activeLight);
}


//Error Alert
function main() {
  try {
  doAllTheThings();
  }
  catch(error) {
  console.error(error);
  reportError(error)
  } 
}