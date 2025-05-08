const names = ["Кіра","Анастасія","Віктор"];
names.push("Фелікс");

console.log(names);

const namestwo = ["Роман","Кіра","Анастасія","Віктор"];
const removedName = namestwo.shift();

console.log(removedName);
console.log(names)

const namesthree = ["Mike","John","Sara"];
let index=namesthree.indexOf("John");

console.log("Індекс 'John':",index);