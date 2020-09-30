const left = document.querySelector(".left");
const right = document.querySelector(".right");

const TIME = 2000;
/*
function change(click) {
  console.log(left.src);

  left.src = `./images/pic8-01.png`;
}

left.addEventListener("click", change);
*/

function change() {
  const check = left.id;

  console.log();

  if (check == "origin") {
    left.src = `./images/pic1-03.png`;
    right.src = `./images/pic1-02.png`;
    left.id = "second";
    setTimeout(change, 900);
  } else if (check == "second") {
    left.src = `./images/pic1-03.png`;
    right.src = `./images/pic1-04.png`;
    left.id = "third";
    setTimeout(change, TIME);
  } else if (check == "third") {
    left.src = `./images/pic2-01.png`;
    right.src = `./images/pic2-02.png`;
    left.id = "fourth";
    setTimeout(change, 1500);
  } else if (check == "fourth") {
    left.src = `./images/pic2-03.png`;
    right.src = `./images/pic2-02.png`;
    left.id = "fifth";
    setTimeout(change, 1500);
  } else if (check == "fifth") {
    left.src = `./images/pic2-03.png`;
    right.src = `./images/pic2-04.png`;
    left.id = "sixth";
    setTimeout(change, TIME);
  } else if (check == "sixth") {
    left.src = `./images/pic1-03.png`;
    right.src = `./images/pic1-04.png`;
    left.id = "seventh";
    setTimeout(change, 2000);
  } else if (check == "seventh") {
    left.src = `./images/pic2-03.png`;
    right.src = `./images/pic2-04.png`;
    left.id = "eighth";
    setTimeout(change, 2000);
  } else if (check == "eighth") {
    left.src = `./images/pic1-01.png`;
    right.src = `./images/pic1-02.png`;
    left.id = "origin";
    setTimeout(change, 2000);
  }
  // else if (check == "third") {
  //   left.src = `./images/pic1-01.png`;
  //   right.src = `./images/pic1-02.png`;
  //   left.id = "fourth";
  //   setTimeout(change, TIME);
  // } else if (check == "fourth") {
  //   left.src = `./images/pic2-01.png`;
  //   right.src = `./images/pic2-02.png`;
  //   left.id = "fifth";
  //   setTimeout(change, TIME);
  // } else if (check == "fifth") {
  //   left.src = `./images/pic3-01.png`;
  //   right.src = `./images/pic3-02.png`;
  //   left.id = "sixth";
  //   setTimeout(change, TIME);
  // } else if (check == "sixth") {
  //   left.src = `./images/pic4-01.png`;
  //   right.src = `./images/pic4-02.png`;
  //   left.id = "seventh";
  //   setTimeout(change, TIME);
  // } else if (check == "seventh") {
  //   left.src = `./images/pic5-01.png`;
  //   right.src = `./images/pic5-02.png`;
  //   left.id = "eighth";
  //   setTimeout(change, TIME);
  // } else if (check == "eighth") {
  //   left.src = `./images/pic6-01.png`;
  //   right.src = `./images/pic6-02.png`;
  //   left.id = "ninth";
  //   setTimeout(change, TIME);
  // } else if (check == "ninth") {
  //   left.src = `./images/pic1-01.png`;
  //   right.src = `./images/pic1-02.png`;
  //   left.id = "origin";
  //   setTimeout(change, TIME);
  // }
}

//left.addEventListener("click", change);

setTimeout(change, 1500);
