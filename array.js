let secretNumber = document.querySelector("#secretNumber");

const guesNumber = document.querySelector("#guess");
const check = document.querySelector("#checkBtn");
secretNumber = Math.ceil(Math.random() * 100);
console.log(secretNumber);
console.log(guesNumber);
console.log(check);

check.onclick = () => {};
