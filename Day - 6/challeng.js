function introduce(
  name = "Jyoti",
  profession = "Frontend Developer",
  city = "Bangalore"
) {
  console.log(`${name} is a ${profession} from ${city}.`);
}

introduce();
// 👉 Jyoti is a Frontend Developer from Bangalore.

introduce("Ravi");
// 👉 Ravi is a Frontend Developer from Bangalore.

introduce("Neha", "Data Scientist");
// 👉 Neha is a Data Scientist from Bangalore.

introduce(undefined, undefined, "Delhi");
// 👉 Jyoti is a Frontend Developer from Delhi.
