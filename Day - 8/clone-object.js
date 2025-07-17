let a = {
  name: "jyoti",
  age: 25,
  hobbies: "music",
};

let b = { ...a };
b.name = "jasho";

let c = Object.assign({}, a);
c.name = "parth";
c.age = 0;
c.hobbies = "cricket";

let d = {};
for (const key in a) {
  let newKey = key;
  let newValue = a[key];
  d[newKey] = newValue;
}
d.name = "aditi";
d.age = 0;
d.hobbies = "badminton";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
