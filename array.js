let number = document.querySelector("#secretNumber");
let score = document.querySelector("#score");
const guesNumber = document.querySelector("#guess");
const check = document.querySelector("#checkBtn");
const again = document.querySelector("#again");
let secretNumber = Math.ceil(Math.random() * 100);

console.log(secretNumber);

let remainigGuess = 5;

check.onclick = () => {
  if (guesNumber >= 0 && guesNumber <= 100) {
    remainigGuess--;

    if (remainigGuess > 0) {
      if (guesNumber.value < secretNumber) {
        document.querySelector(
          "#info"
        ).textContent = `⬆️ kalan hak:${remainigGuess}`;
        guesNumber.value = "";
      } else if (guesNumber.value > secretNumber) {
        document.querySelector(
          "#info"
        ).textContent = `⬇️ kalan hak:${remainigGuess}`;
        guesNumber.value = "";
      } else {
        score.textContent = 2 * (remainigGuess + 1);
        number.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "blue";
        document.querySelector("#info").textContent = `Tebrikler 🏆 ${
          5 - remainigGuess
        } kerede bildiniz`;
      }
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      alert("Hakkınız kalmadı");
      remainigGuess.textContent = "5";
      document.querySelector("#info").textContent = `⬇️ kalan hak:0`;
      guesNumber.value = "";
      guesNumber.textContent = "";
    }
  } else {
    alert("0 ve 100 arasında bir sayı giriniz");
    guesNumber.value = "";
  }
};

again.onclick = () => {
  number.textContent = "?";
  remainigGuess = 5;
  secretNumber = Math.ceil(Math.random() * 100);
  document.querySelector("#info").textContent = `kalan hak:5`;
  document.querySelector("body").style.backgroundColor = "#d9ff91";
  guesNumber.value = "";
};
