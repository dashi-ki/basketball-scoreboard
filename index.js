let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")


function updateScores() {
    homeScoreDisplay.textContent = homeScore
    guestScoreDisplay.textContent = guestScore
    
    // Compare scores and update borders
    if (homeScore > guestScore) {
        homeScoreDisplay.style.border = "1px solid #FBBF24"
        guestScoreDisplay.style.border = "1px solid #E5E7EB"
    } else if (homeScore < guestScore) {
        homeScoreDisplay.style.border = "1px solid #E5E7EB"
        guestScoreDisplay.style.border = "1px solid #FBBF24"
    } else {
        homeScoreDisplay.style.border = "1px solid #E5E7EB"
        guestScoreDisplay.style.border = "1px solid #E5E7EB"
    }
    updateScores()
}

function incrementHomeOne() {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
    updateScores() 
}

function incrementHomeTwo() {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
    updateScores() 
}

function incrementHomeThree() {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
    updateScores() 
}


function incrementGuestOne() {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
    updateScores() 
}

function incrementGuestTwo() {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
    updateScores() 
}

function incrementGuestThree() {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
    updateScores() 
}

function newGame() {
    homeScore = 0
    homeScoreDisplay.textContent = homeScore

    guestScore = 0
    guestScoreDisplay.textContent = guestScore
}