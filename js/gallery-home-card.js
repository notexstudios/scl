let cards = document.querySelectorAll(".card");
let stackArea = document.querySelector(".stack-area");

function rotateCards() {
  let angle = 0;
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      card.style.transform = `translate(-50%, -100vh) rotate(-48deg)`;
    } else {
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle = angle - 10;
    }
  });
}

rotateCards();

window.addEventListener("scroll", () => {
  let proportion =
    stackArea.getBoundingClientRect().top / window.innerHeight;
  if (proportion <= 0) {
    let n = cards.length;
    let index = Math.ceil((proportion * n) / 1.4);
    index = Math.abs(index) - 1;
    for (let i = 0; i < n; i++) {
      if (i <= index) {
        cards[i].classList.add("active");
        // setTimeout(()=>{
        //   cards[i].style.visibility = 'hidden';
        // },3000)
      } else {
        cards[i].classList.remove("active");
          // cards[i].style.visibility = 'visible';

      }
    }
    rotateCards();
  }
});

//Code for responsiveness

function adjust() {
  let windowWidth = window.innerWidth;
  let left = document.querySelector(".left");
  left.remove();
  if (windowWidth < 800) {
    stackArea.insertAdjacentElement("beforebegin", left);
  } else {
    stackArea.insertAdjacentElement("afterbegin", left);
  }
}
adjust();

//detect Resize

window.addEventListener("resize", adjust);