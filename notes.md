## image1: https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-6/437408381_1140638357275113_3492601552500577825_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=USg349yZ0qcAb73ckkS&_nc_ht=scontent.fpkr2-1.fna&oh=00_AfC-sDI_pr1aM4RvPnBjJ5bXXxn3LSJahykLPvec-EVVzg&oe=6624B1A7

## https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-6/327727717_6280023288675054_8670417325303152300_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MYn_W5wIerYAb5vb2ZS&_nc_ht=scontent.fpkr2-1.fna&oh=00_AfBVAf1uEGULxWWPvBqkMlpNw_uY9w_usIJP7RbJ1BbU3w&oe=6624AB25





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stacked Cards</title>
    <!--Google Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        width: 100%;
        height: fit-content;
        margin: 0;
        padding: 0;
      }
      .center {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .stack-area {
        width: 100%;
        height: 300vh;
        position: relative;
        display: flex;
        justify-content: center;
      }
      .right,
      .left {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top: 0;
        box-sizing: border-box;
        flex-basis: 50%;
      }
      .cards {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .card {
        width: 350px;
        height: 350px;
        box-sizing: border-box;
        padding: 35px;
        border-radius: 6mm;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 0.5s ease-in-out;
      }
      .card:nth-child(1) {
        background: rgb(64, 122, 255);
        z-index: 4;
      }
      .card:nth-child(2) {
        background: rgb(221, 62, 88);
        z-index: 3;
      }
      .card:nth-child(3) {
        background: rgb(186, 113, 245);
        z-index: 2;
      }
      .card:nth-child(4) {
        background: rgb(247, 92, 208);
        z-index: 1;
      }
      .sub {
        font-family: poppins;
        font-size: 20px;
        font-weight: 700;
      }
      .content {
        font-family: poppins;
        font-size: 44px;
        font-weight: 700;
        line-height: 54px;
      }
      .card.active {
        transform-origin: bottom left;
      }
      .left {
        align-items: center;
        flex-direction: column;
      }
      .title {
        width: 420px;
        font-size: 84px;
        font-family: poppins;
        font-weight: 700;
        line-height: 88px;
      }
      .sub-title {
        width: 420px;
        font-family: poppins;
        font-size: 14px;
        margin-top: 30px;
      }
      .sub-title button {
        font-family: poppins;
        font-size: 14px;
        padding: 15px 30px;
        background: black;
        color: white;
        border-radius: 8mm;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 20px;
      }
      .top,
      .bottom {
        width: 100%;
        height: 100vh;
        font-family: poppins;
        font-size: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /*CSS Code for responsiveness*/
      @media screen and (max-width: 800px) {
        .left {
          position: relative;
          width: 100vw;
        }
      }
    </style>
  </head>
  <body>
    <div class="center">
      <div class="top">Scroll Down</div>
      <div class="stack-area">
        <div class="left">
          <div class="title">Our Features</div>
          <div class="sub-title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            qui quis, facere, cupiditate, doloremque natus ex perspiciatis
            ratione hic corrupti adipisci ea doloribus!
            <br />
            <button>See More Details</button>
          </div>
        </div>
        <div class="right">
          <div class="cards">
            <div class="card">
              <div class="sub">Simplified</div>
              <div class="content">Complex tasks are now simple</div>
            </div>
            <div class="card">
              <div class="sub">Boost Productivity</div>
              <div class="content">Perform Tasks in less time</div>
            </div>
            <div class="card">
              <div class="sub">Facilitated learning</div>
              <div class="content">train anyone from anywhere</div>
            </div>
            <div class="card">
              <div class="sub">Support</div>
              <div class="content">Now its 24/7 support</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">Other Content...</div>
    </div>

    <script>
      let cards = document.querySelectorAll(".card");
      let stackArea = document.querySelector(".stack-area");

      function rotateCards() {
        let angle = 0;
        cards.forEach((card) => {
          if (card.classList.contains("active")) {
            card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
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
          let index = Math.ceil((proportion * n) / 2);
          index = Math.abs(index) - 1;
          for (let i = 0; i < n; i++) {
            if (i <= index) {
              cards[i].classList.add("active");
            } else {
              cards[i].classList.remove("active");
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
    </script>
  </body>
</html>