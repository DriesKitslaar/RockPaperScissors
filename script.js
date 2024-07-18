const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random()*3)
    switch (randomNum) {
        case 0:
            return 'steen'
            break;
        case 1:
            return 'papier'
            break;
        case 2:
            return 'schaar'
            break;
    }
}

const getHumanChoice = userChoice => {
    userChoice = prompt('Steen, papier of schaar?')
    userChoice = userChoice.toLowerCase()
    console.log(userChoice)

    if (userChoice !== 'steen' && userChoice !== 'schaar' && userChoice !== 'blad' && userChoice !== 'papier') {
        alert('IK ZEI: STEEN, PAPIER OF SCHAAR')
        throw Error ('Verkeerde Input')
    } else if (userChoice === 'steen') {
        return 'steen'
    } else if (userChoice === 'papier' || userChoice === 'blad') {
        return 'papier'
    } else if (userChoice === 'schaar') {
        return 'schaar'
    }
}


const playGame = () => {
    let humanScore = 0
    let computerScore = 0

    const playRound = (computerChoice, humanChoice) => {
        computerChoice = getComputerChoice ()
        humanChoice = getHumanChoice()
    
        if (computerChoice === humanChoice) {
            console.log(`Computer: ${computerChoice}`)
            console.log(`Jij: ${humanChoice}`)
            console.log ('Gelijkspel!')
        } else if (computerChoice === 'steen' && humanChoice === 'papier' || computerChoice === 'papier' && humanChoice === 'schaar' || computerChoice === 'schaar' && humanChoice === 'steen') {
            console.log(`Computer: ${computerChoice}`)
            console.log(`Jij: ${humanChoice}`)
            humanScore++
            console.log ('Nice shit! Je hebt gewonnen van de computer! fuck jou, technologie')
        } else {
            console.log(`Computer: ${computerChoice}`)
            console.log(`Jij: ${humanChoice}`)
            computerScore++
            console.log('Afgang, leert is deftig spelen') 
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(`Jouw score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
}

playGame()