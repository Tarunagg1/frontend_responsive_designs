let ob = {
  name: "garun",
  age: 10,
};

let ob1 = {
  belong: "chilld",
  __proto__: ob
};

console.log(ob1.age);

