let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")

function incrementHomeOne() {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
}

function incrementHomeTwo() {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
}

function incrementHomeThree() {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}


function incrementGuestOne() {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
}

function incrementGuestTwo() {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
}

function incrementGuestThree() {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
}

function newGame() {
    homeScore = 0
    homeScoreDisplay.textContent = homeScore

    guestScore = 0
    guestScoreDisplay.textContent = guestScore
}