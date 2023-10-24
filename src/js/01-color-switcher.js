
const startBtn = document.querySelectorAll('button')[0];
const stopBtn = document.querySelectorAll('button')[1];
let colorChangeTimer;



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
    colorChangeTimer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    clearInterval(colorChangeTimer);
    
})
