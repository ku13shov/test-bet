const audio = document.querySelector('.audio');
const buttons = document.querySelectorAll('button');
const btnInfo = document.querySelector('.panel__info-btn');
const btnMinus = document.querySelector('.panel__totalbet-minus');
const btnPlus = document.querySelector('.panel__totalbet-plus');
const btnAuto = document.querySelector('.panel__auto-btn');
const btnSpin = document.querySelector('.panel__spin-btn');
const spins = document.querySelectorAll('.panel__auto-spin');

const audioPlay = () => {
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(btn => {
    btn.addEventListener('click', audioPlay);
    if (btn === btnAuto) {
        btn.removeEventListener('click', audioPlay);
    }
});

spins.forEach(item => {
    item.addEventListener('click', audioPlay);
})