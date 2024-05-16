document.getElementById("quiz").addEventListener("click", markQuiz);

let correct1 = 0;
let correct2 = 0;
let correct3 = 0;
let correct4 = 0;

function markQuiz() {
  var question1 = document.getElementById("input1");
  var question2 = document.getElementById("input2");
  var question3 = document.getElementById("input3");
  var question4 = document.getElementById("input4");

  if (
    question1.value.toLowerCase() == `lebron james` ||
    question1.value.toLowerCase() == `lebron`
  ) {
    document.getElementById("span1").innerHTML = `correct`;
    correct1 = 1;
  } else {
    document.getElementById("span1").innerHTML = `incorrect`;
    correct1 = 0;
  }

  if (
    question2.value.toLowerCase() == `jerry west` ||
    question2.value.toLowerCase() == `west`
  ) {
    document.getElementById("span2").innerHTML = `correct`;
    correct2 = 1;
  } else {
    document.getElementById("span2").innerHTML = `incorrect`;
    correct2 = 0;
  }

  if (
    question3.value.toLowerCase() == `steph curry` ||
    question3.value.toLowerCase() == `steph`
  ) {
    document.getElementById("span3").innerHTML = `correct`;
    correct3 = 1;
  } else {
    document.getElementById("span3").innerHTML = `incorrect`;
    correct3 = 0;
  }

  if (
    question4.value.toLowerCase() == `chicago bulls` ||
    question4.value.toLowerCase() == `washington wizards`
  ) {
    document.getElementById("span4").innerHTML = `correct`;
    correct4 = 1;
  } else {
    document.getElementById("span4").innerHTML = `incorrect`;
    correct4 = 0;
  }

  let total = correct1 + correct2 + correct3 + correct4;
  let totalPercent = (total / 4) * 100;

  if (total == 4) {
    document.getElementById("feedback").innerHTML = `Excellent`;
  } else if (total == 3) {
    document.getElementById("feedback").innerHTML = `Almost there`;
  } else if (total == 2) {
    document.getElementById("feedback").innerHTML = `half-way`;
  } else if (total == 1) {
    document.getElementById("feedback").innerHTML = `study next time`;
  } else if (total == 0) {
    document.getElementById("feedback").innerHTML = `why did you do this`;
  }

  document.getElementById(
    "scroe-quiz"
  ).innerHTML = `${total}/4 (${totalPercent}%)`;
}
