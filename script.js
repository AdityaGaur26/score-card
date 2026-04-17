let homeScore = 0;
let guestScore = 0;

function homeScoreOne() {
  homeScore += 1;
  document.querySelector(".home h2").textContent = homeScore;
}

function homeScoreTwo() {
  homeScore += 2;
  document.querySelector(".home h2").textContent = homeScore;
}

function homeScoreThree() {
  homeScore += 3;
  document.querySelector(".home h2").textContent = homeScore;
}

function guestScoreOne() {
  guestScore += 1;
  document.querySelector(".guest h2").textContent = guestScore;
}

function guestScoreTwo() {
  guestScore += 2;
  document.querySelector(".guest h2").textContent = guestScore;
}

function guestScoreThree() {
  guestScore += 3;
  document.querySelector(".guest h2").textContent = guestScore;
}

function resetScore() {
  homeScore = 0;
  guestScore = 0;
  document.querySelector(".home h2").textContent = homeScore;
  document.querySelector(".guest h2").textContent = guestScore;
}

