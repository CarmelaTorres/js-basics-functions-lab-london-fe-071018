// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  const blocks = Math.abs(destination - 42)
  return blocks
}
function distanceFromHqInFeet(destination) {
  const feet = distanceFromHqInBlocks(destination) * 264
  return feet
}

function distanceTravelledInFeet(start, destination) {
  const feet = Math.abs(destination - start) * 264
  return feet
}

calculatesFarePrice = (start, destination) => {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return distance * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
} 