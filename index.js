// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
    let distance = pickUpLocation - 42;
    return Math.abs(distance);
}

function distanceFromHqInFeet(pickUpLocation) {
    let blocksDistance = distanceFromHqInBlocks(pickUpLocation);
    let feetDistance = blocksDistance * 264;
    return feetDistance;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    let distance = (startingBlock - endingBlock)*264;
    return Math.abs(distance);
}

function calculatesFarePrice(startingBlock, endingBlock) {
    let distance = distanceTravelledInFeet(startingBlock, endingBlock);
    if (distance <= 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}