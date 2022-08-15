// Prooblem ----- 01

function radianToDegree(radian) {
  if (radian >= 0) {
    const pi = Math.PI;
    const value = radian * (180 / pi);
    return value.toFixed(2);
  } else {
    return "Please input valid number";
  }
}

console.log(radianToDegree("223"));

// Problem:2  isJavaScriptFile

function isJavaScriptFile(file) {
  if (typeof file !== "string") {
    return "Please input valid text";
  }
  if (file.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}
console.log(isJavaScriptFile("app.js"));

// Problem 3: oilPrice

// diesel --- 114
// petrol --- 130
// octane --- 135

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  if (
    typeof dieselQuantity != "number" ||
    dieselQuantity < 0 ||
    typeof petrolQuantity != "number" ||
    petrolQuantity < 0 ||
    typeof octaneQuantity != "number" ||
    octaneQuantity < 0
  ) {
    return "Please enter valid input";
  }
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;

  const dieselAmount = dieselQuantity * dieselPrice;
  const petrolAmount = petrolQuantity * petrolPrice;
  const octaneAmount = octaneQuantity * octanePrice;

  const totalAmount = dieselAmount + petrolAmount + octaneAmount;
  return totalAmount;
}

const totalCost = oilPrice(1, 1, 1);
console.log(totalCost);

// Problem 4: publicBusFare

function publicBusFare(public) {
  if (public >= 0) {
    let perBusPeople = 50;
    let perMicroPeople = 11;

    //   passenger equation remaining
    let picnicBusPublic = public % perBusPeople;
    let picnicMicroPublic = picnicBusPublic % perMicroPeople;
    let publicBusPublic = picnicMicroPublic;

    // publicBus fair
    busFair = publicBusPublic * 250;
    return busFair;
  } else {
    return "Please input valid number";
  }
}

const totalFair = publicBusFare("55");
console.log(totalFair);

// Problem 5: isBestFriend

function isBestFriend(friendName1, friendName2) {
  if (
    friendName1.name == friendName2.friend &&
    friendName2.name == friendName1.friend
  ) {
    return true;
  } else {
    return false;
  }
}
const myFriend = isBestFriend(
  { name: "abul", friend: "kabul" },
  { name: "kabul", friend: "abul" }
);

console.log(myFriend);
