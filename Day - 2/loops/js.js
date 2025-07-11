// for-in loop
let o = {
  name: "jasho",
  score: "180",
  year: 2019,
};

for (const key in o) {
  const element = o[key];
  console.log(key, element);
}

//for-of loop
str = "jashobanta";
for (const e of str) {
  console.log(e);
}
