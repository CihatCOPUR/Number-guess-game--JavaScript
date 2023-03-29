let number = document.querySelector("#secretNumber");
let score = document.querySelector("#score");
const guesNumber = document.querySelector("#guess");
const check = document.querySelector("#checkBtn");
const again = document.querySelector("#again");
let secretNumber = Math.ceil(Math.random() * 100);
console.log(secretNumber);
console.log(guesNumber);
console.log(check);
let remainigGuess = 5;
check.onclick = () => {
  remainigGuess--;

  if (remainigGuess > 0) {
    if (guesNumber.value < secretNumber) {
      alert(`⬆️ kalan hak:${remainigGuess}`);
    } else if (guesNumber.value > secretNumber) {
      alert(`⬇️ kalan hak:${remainigGuess}`);
    } else {
      score.textContent = 2 * (remainigGuess + 1);
      number.textContent = secretNumber;
      alert(`Tebrikler 🏆 ${5 - remainigGuess} kerede bildiniz`);
    }
  } else alert("Hakkınız kalmadı");
};

again.onclick = () => {
  number.textContent = "?";
  remainigGuess = 5;
  secretNumber = Math.ceil(Math.random() * 100);
  console.log(secretNumber);
};
