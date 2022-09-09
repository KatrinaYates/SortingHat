unhide = () => {
  document.body.style.display = 'flex';
}

let question1 = {
  t: "question1",
  q: "You have a decision to make. How do you make your decision?",
  a: "After weighing all the options I “go with my gut” and choose the answer which feels right/best to me",
  b: "I analyze each of the options and pick the option that will have the best outcome or have the fewest drawbacks.",
  bg: "url(img/hogwartsHall.jpeg)",
};

let question2 = {
  t: "question2",
  q: "You walk into a room to find a jerk cussing out your best friend… and your friend didn’t do anything wrong! They both leave the room through separate doors. Who is the FIRST person you follow?",
  a: "My friend",
  b: "The jerk",
  bg: "url(img/caf.jpg)",
};

results = () => {
  question.innerHTML = "";
  answerOne.parentElement.style.display = "none";
  answerTwo.parentElement.style.display = "none";
  switch (2) {
    case griff:
      document.body.style.backgroundImage = "url(img/griff.jpg)";
      break;
    case slith:
      document.body.style.backgroundImage = "url(img/slith.jpg)";
      break;
    case raven:
      document.body.style.backgroundImage = "url(img/raven.jpg)";
      break;
    case huff:
      document.body.style.backgroundImage = "url(img/huff.jpg)";
      break;
  }
};

again = () => {
  restart.style.display = "none";
  start.style.display = "block";
  question.innerHTML = "";
  answerOne.parentElement.style.display = "none";
  answerTwo.parentElement.style.display = "none";
  document.body.style.backgroundImage = "url(img/hogwarts.png)";
  i = 0;
  griff = 0;
  raven = 0;
  slith = 0;
  huff = 0;
};

let question = document.getElementById("question");
let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
let start = document.getElementById("start");
let restart = document.getElementById("restart");
let i = 0;
let griff = 0;
let raven = 0;
let slith = 0;
let huff = 0;

questionDisplayed = (x) => {
  question.innerHTML = x.q;
  answerOne.innerHTML = x.a;
  answerTwo.innerHTML = x.b;
  document.body.style.backgroundImage = x.bg;
};

next = (x) => {
  switch (i) {
    case 0:
      start.style.display = "none";
      restart.style.display = "block";
      answerOne.parentElement.style.display = "block";
      answerTwo.parentElement.style.display = "block";
      questionDisplayed(question1);
      break;
    case 1:
      if (x == 1) {
        huff += 1;
        griff += 1;
      } else {
        raven += 1;
        slith += 1;
      }
      questionDisplayed(question2);
      break;
    case 2:
      if (x == 1) {
        huff += 1;
        raven += 1;
      } else {
        griff += 1;
        slith += 1;
      }
      results();
      break;
  }
  i++;
};
