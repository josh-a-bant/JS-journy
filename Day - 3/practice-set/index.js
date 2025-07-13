// //what will the following print in Js!
// console.log('jasho"'.length); //6

// //Expore the includes, startsWith & endsWith functionsof a string
// let myName = `JashoBant`;
// console.log(myName.includes("j"));

// //Write a program to convert a given String to lowercase
// console.log(myName.toLowerCase());

// //Exteact the amount out of this string " Please give Rs 1000"
// let sentence = `Please give Rs 1000`;
// console.log(sentence.slice(15));

// //try to Change 4th characters of a girven sting Will you eble to do it
// console.log(sentence.replace("g", "j"));

let i = 0;
while (i < 5) {
  //0t  1t  2t
  console.log("hi"); //hi  hi  hi
  if (i < 2) {
    //0t  1t  2
    console.log(i);
    i++; //1   2
    continue;
  } else {
    console.log(i);
    break;
  }
}
