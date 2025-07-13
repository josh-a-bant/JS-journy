/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

const Adjectives = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire ",
};

const ShopName = {
  4: "Engine",
  5: "Foods",
  6: "Garments ",
};

const AnotherWord = {
  7: "Bros",
  8: "Limited",
  9: "Hub ",
};

randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

//maybe risky and lengthy
getadjective = () => {
  let random = randomNumber();
  // console.log(random);

  if (random <= 3 && random > 0) {
    return Adjectives[random];
  } else {
    return getadjective();
  }
};

getshopName = () => {
  let random = randomNumber();
  // console.log(random);

  if (random <= 6 && random > 3) {
    return ShopName[random];
  } else {
    return getshopName();
  }
};

getanotherWord = () => {
  let random = randomNumber();
  // console.log(random);

  if (random <= 9 && random > 6) {
    return AnotherWord[random];
  } else {
    return getanotherWord();
  }
};

let businessName = `${getadjective()}  ${getshopName()}  ${getanotherWord()}`;

console.log(businessName);
