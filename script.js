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

/*const getHumanChoice = userChoice => {

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
}*/



    let humanScore = 0
    let computerScore = 0

    const playRound = (computerChoice, humanChoice) => {
        if (computerChoice === humanChoice) {
            console.log(`Computer: ${computerChoice}`)
            console.log(`Jij: ${humanChoice}`)
            console.log ('Gelijkspel!')
            computerKeuze.textContent = `De computer kiest ${computerChoice}`
            uitslag.textContent = `Gelijkspel!`
            computerPoints.textContent = `Computer Score: ${computerScore}`
            userPoints.textContent = `Jouw Score: ${humanScore}`
            checkComputerScore()
        } else if (computerChoice === 'steen' && humanChoice === 'papier' || computerChoice === 'papier' && humanChoice === 'schaar' || computerChoice === 'schaar' && humanChoice === 'steen') {
            console.log(`Computer: ${computerChoice}`)
            console.log(`Jij: ${humanChoice}`)
            humanScore++
            console.log ('Nice shit! Je hebt gewonnen van de computer! fuck jou, technologie')
            computerKeuze.textContent = `De computer kiest ${computerChoice}`
            uitslag.textContent = `Nice shit! Je hebt gewonnen van de computer! fuck jou, technologie`
            computerPoints.textContent = `Computer Score: ${computerScore}`
            userPoints.textContent = `Jouw Score: ${humanScore}`
            checkComputerScore()
        } else {
            console.log(`Computer: ${computerChoice}`)
            console.log(`Jij: ${humanChoice}`)
            computerScore++
            console.log('Afgang, leert is deftig spelen')
            computerKeuze.textContent = `De computer kiest ${computerChoice}`
            uitslag.textContent = `Afgang, leert is deftig spelen`
            computerPoints.textContent = `Computer Score: ${computerScore}`
            userPoints.textContent = `Jouw Score: ${humanScore}`
            checkComputerScore()
        }
    }

    const checkComputerScore = () => {
        if (computerScore > 2) {
            hiddenGif.style.display = 'flex'
            soundEffect.play()
        }
    }

const div = document.querySelector('div')
const button = document.querySelector('button')
const para = document.querySelector('p')

const rockButton = document.createElement('button')
const paperButton = document.createElement('button')
const scissorsButton = document.createElement('button')
const uitslag = document.createElement('p')
const computerPoints = document.createElement('p')
const userPoints = document.createElement('p')
const computerKeuze = document.createElement('p')

const pointsDiv = document.createElement('div')

rockButton.textContent = 'steen'
paperButton.textContent = 'papier'
scissorsButton.textContent = 'schaar'

const hiddenGifContainer = document.createElement('div');
const hiddenGif = document.createElement('img')
hiddenGif.src = 'https://media.tenor.com/Q-ljDUwq8-QAAAAi/fnaf-foxy.gif'
hiddenGifContainer.appendChild(hiddenGif);
hiddenGifContainer.classList.add('hidden-gif-container');
hiddenGif.style.display = 'none'

const soundEffect = new Audio('https://us-tuna-sounds-files.voicemod.net/f8060c61-4129-4b86-a2d7-c003f0997a00-1662929170609.mp3')




    rockButton.addEventListener('click', () => {
        playRound(getComputerChoice(), 'steen')
        });
        
        paperButton.addEventListener('click', () => {
            playRound(getComputerChoice(), 'papier')
        });
        scissorsButton.addEventListener('click' , () => {
            playRound(getComputerChoice(), 'schaar')
        });




div.appendChild(rockButton)
div.appendChild(paperButton)
div.appendChild(scissorsButton)

pointsDiv.appendChild(computerKeuze)
pointsDiv.appendChild(uitslag)
pointsDiv.appendChild(computerPoints)
pointsDiv.appendChild(userPoints)

div.appendChild(pointsDiv)
document.body.appendChild(hiddenGifContainer);



