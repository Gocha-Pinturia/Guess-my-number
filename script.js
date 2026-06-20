function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();

    const premiumVoice = voices.find(voice =>
        voice.lang.includes('en') &&
        (voice.name.includes('Google') || voice.name.includes('Zira') || voice.name.includes('Samantha') || voice.name.includes('Natural'))
    );

    if (premiumVoice) {
        utterance.voice = premiumVoice;
    }

    utterance.rate = 1.05; 
    utterance.pitch = 1.1; 
    utterance.volume = 0.9;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(utterance);
}

const min = 0, max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
let startGuessing = document.querySelector('.p-start-guessing')
let count = 20;
let highscore = 0;
const score = document.querySelector('.score')

const userNum = document.querySelector('.enter-num');
const userNumForm = document.querySelector('.enter-num-form');
const btnCheck = document.querySelector('.btn-check');
userNumForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (userNum.value > randomNum) {
        startGuessing.textContent = "📈 Too high";
        speak("Too high");
    } else if (userNum.value < randomNum) {
        startGuessing.textContent = "📉 Too low";
        speak("Too low");
    } else {
        startGuessing.textContent = "🏆 Correct number!";
        document.querySelector('.wrapper-img').textContent = randomNum;
        btnCheck.disabled = true;
        document.body.classList.add('victory');
        speak("Correct number! You win!");
        score.textContent = --count;
        if (highscore < count) {
            highscore = count;
            document.querySelector('.highscore').textContent = highscore;
        }    
        return
    }
    score.textContent = --count;
    if (count === 0) {
        startGuessing.textContent = "💥 You lose!";
        btnCheck.disabled = true;
        speak("you lose!");
    }

})

document.querySelector('.again').addEventListener('click', function () {
    randomNum = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNum);
    
    startGuessing.textContent = 'Start guessing...';
    document.querySelector('.wrapper-img').textContent = '?';
    score.textContent = 20;
    userNum.value = '';
    count = 20;
    document.body.classList.remove('victory');
    btnCheck.disabled = false;
});

function preloadVoices() {
    window.speechSynthesis.getVoices();
}

preloadVoices();

if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = preloadVoices;
}
