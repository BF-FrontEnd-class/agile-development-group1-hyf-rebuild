const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const a = document.getElementById("b1");
const b = document.getElementById("b2");
const c = document.getElementById("b3");
const d = document.getElementById("b4");

const boxList = [a, b, c, d];

let curentBox = boxList[1];
let curentIndex = 1;

let position = -25;
let toLeftPosition = -25;
let toRightPosition = 25;

btnRight.addEventListener(`click`, () => {
  if (curentIndex < boxList.length - 1) {
    document.getElementById("slider").style.transform = `translateX( ${
      position + toLeftPosition
    }%)`;
    position += toLeftPosition;

    curentBox.style.transform = "scale(0.5)";
    curentBox.style.opacity = "0.6";
    curentBox = boxList[curentIndex + 1];
    curentIndex = curentIndex + 1;
    curentBox.style.transform = "scale(1)";
    curentBox.style.opacity = "1";
  }
});

btnLeft.addEventListener(`click`, () => {
  if (curentIndex > 0) {
    document.getElementById("slider").style.transform = `translateX( ${
      position + toRightPosition
    }%)`;
    position += toRightPosition;

    curentBox.style.transform = "scale(0.5)";
    curentBox.style.opacity = "0.6";
    curentBox = boxList[curentIndex - 1];
    curentIndex = curentIndex - 1;
    curentBox.style.transform = "scale(1)";
    curentBox.style.opacity = "1";
   }
});
