const audio = document.querySelector('.audio');
const buttons = document.querySelectorAll('button');
const btnInfo = document.querySelector('.panel__info-btn');
const btnMinus = document.querySelector('.panel__totalbet-minus');
const btnPlus = document.querySelector('.panel__totalbet-plus');
const btnTurbo = document.querySelector('.panel__turbo-btn');
const check = document.querySelector('.panel__turbo-check');
const turboBg = document.querySelectorAll('.panel__turbo-bg');
const btnAuto = document.querySelector('.panel__auto-btn');
const autoCounter = document.querySelector('.panel__auto-counter');
const btnSpin = document.querySelector('.panel__spin-btn');
const spinSign = document.querySelector('.panel__spin-sign');
const spins = document.querySelectorAll('.panel__auto-spin');
const select = document.querySelector('.panel__auto-select');
const totalBet = document.querySelector('.panel__totalbet-nums');
const coin = document.querySelector('.panel__field-nums');
let totalBetIncr = 0.15;
let coinIncr = 0.01

//Click sound----------------------------------------------------
const audioPlay = () => {
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(btn => {
    btn.addEventListener('click', audioPlay);
    if (btn === btnAuto || btn === btnPlus || btn === btnMinus) {
        btn.removeEventListener('click', audioPlay);
    }
});

spins.forEach(item => {
    item.addEventListener('click', audioPlay);
})

//Auto list component---------------------------------------------
const height195 = () => {
    select.style.height = '195px';
}

const changeAutoBtn = () => {
    btnAuto.textContent = 'STOP';
    btnAuto.style.paddingLeft = '50px';
    select.removeEventListener('mouseover', height195);
    btnAuto.removeEventListener('mouseover', height195);
    select.style.height = '0';
}

btnAuto.addEventListener('mouseover', height195);

btnAuto.addEventListener('mouseout', () => {
    select.style.height = '0';
});

select.addEventListener('mouseover', height195);

select.addEventListener('mouseout', () => {
    select.style.height = '0';
});

btnAuto.addEventListener('click', () => {
    if (autoCounter.classList.contains('active-counter')) {
        audioPlay();
        autoCounter.classList.remove('active-counter');
        height195();
        btnAuto.addEventListener('mouseover', height195);
        select.addEventListener('mouseover', height195);
        btnAuto.textContent = 'AUTO';
        btnAuto.style.paddingLeft = '35px';
    }
});

spins.forEach(item => {
    item.addEventListener('click', () => {
        if (item.dataset.count <= 25) {
            autoCounter.textContent = `${item.dataset.count - 1}`;
            autoCounter.style.background = 'url(images/counter-blue.png) no-repeat center / contain';
            autoCounter.classList.add('active-counter');

            let count = item.dataset.count  - 2;
            let countSignInterval = setInterval(() => {
                autoCounter.textContent = `${count--}`;
                if (count < 0) {
                    clearInterval(countSignInterval);
                    btnAuto.click();
                }

                btnAuto.addEventListener('click', () => {
                    if (autoCounter.classList.contains('active-counter')) {
                        audioPlay();
                        autoCounter.classList.remove('active-counter');
                        height195();
                        btnAuto.addEventListener('mouseover', height195);
                        select.addEventListener('mouseover', height195);
                        btnAuto.textContent = 'AUTO';
                        btnAuto.style.paddingLeft = '35px';
                    }
                    clearInterval(countSignInterval);
                });
            }, 1500);
    
            changeAutoBtn();
        } else if (item.dataset.count > 25) {
            autoCounter.style.background = 'url(images/counter-red.png) no-repeat center / contain';
            autoCounter.textContent = '';
            autoCounter.innerHTML = '<img class="panel__auto-counter-sign" src="images/counter-sign.png" alt="">';

            const autoCounterSign = document.querySelector('.panel__auto-counter-sign');
            let deg = 0;

            setTimeout(() => {
                deg -= 360;
                autoCounterSign.style.transform = `rotate(${deg}deg)`;
            }, 300);

            let countSignInterval = setInterval(() => {
                deg -= 360;
                autoCounterSign.style.transform = `rotate(${deg}deg)`;
                if (deg < -20000) {
                    clearInterval(countSignInterval);
                }

                btnAuto.addEventListener('click', () => {
                    if (autoCounter.classList.contains('active-counter')) {
                        audioPlay();
                        autoCounter.classList.remove('active-counter');
                        height195();
                        btnAuto.addEventListener('mouseover', height195);
                        select.addEventListener('mouseover', height195);
                        btnAuto.textContent = 'AUTO';
                        btnAuto.style.paddingLeft = '35px';
                    }
                    clearInterval(countSignInterval);
                });
            }, 2300);
            autoCounter.classList.add('active-counter');

            changeAutoBtn();
        }
    });
})

//Total and coin inrc/decr-----------------------------------------
totalBet.textContent = `¥${totalBetIncr}`;
coin.textContent = `¥${coinIncr}`;

btnPlus.addEventListener('click', () => {
    if (totalBetIncr < 0.80) {
        totalBetIncr = totalBetIncr + 0.15;
        totalBet.textContent = `¥${totalBetIncr.toFixed(2)}`;
        audioPlay();
    } else if (totalBetIncr < 1.50) {
        totalBetIncr = totalBetIncr + 0.30;
        totalBet.textContent = `¥${totalBetIncr.toFixed(2)}`;
        audioPlay();
    } else if (totalBetIncr < 9) {
        totalBetIncr = totalBetIncr + 1.50;
        if (totalBetIncr === 3 || totalBetIncr === 6 || totalBetIncr === 9) {
            totalBet.textContent = `¥${totalBetIncr}`;
            audioPlay();
        } else {
            totalBet.textContent = `¥${totalBetIncr.toFixed(2)}`;
            audioPlay();
        }
    } else if (totalBetIncr < 15) {
        totalBetIncr = totalBetIncr + 3;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr < 45) {
        totalBetIncr = totalBetIncr + 15;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr < 75) {
        totalBetIncr = totalBetIncr + 30;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    }  else if (totalBetIncr < 120) {
        totalBetIncr = totalBetIncr + 45;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr < 150) {
        totalBetIncr = totalBetIncr + 30;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr < 300) {
        totalBetIncr = totalBetIncr + 150;
        totalBet.textContent = `¥${totalBetIncr}`;
        btnPlus.style.cursor = 'default';
        btnPlus.classList.remove('plus-btn');
        btnPlus.style.background = 'url(images/plus-not-active.png) no-repeat center / contain';

        audioPlay();
    }

    if (totalBetIncr > 0.15) {
        btnMinus.style.cursor = 'pointer';
        btnMinus.classList.add('minus-btn');
        btnMinus.style.background = 'url(images/minus-normal.png) no-repeat center / contain';
    }

    if (coinIncr < 0.06) {
        coinIncr = coinIncr + 0.01;
        coin.textContent = `¥${coinIncr.toFixed(2)}`;
    } else if (coinIncr < 0.10) {
        coinIncr = coinIncr + 0.02;
        coin.textContent = `¥${coinIncr.toFixed(2)}`;
    } else if (coinIncr < 0.60) {
        coinIncr = coinIncr + 0.10;
        coin.textContent = `¥${coinIncr.toFixed(2)}`;
    } else if (coinIncr < 1) {
        coinIncr = coinIncr + 0.20;
        if (coinIncr === 1) {
            coin.textContent = `¥${coinIncr}`;
        } else {
            coin.textContent = `¥${coinIncr.toFixed(2)}`;
        }
    } else if (coinIncr < 3) {
        coinIncr = coinIncr + 1;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr < 5) {
        coinIncr = coinIncr + 2;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr < 8) {
        coinIncr = coinIncr + 3;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr < 10) {
        coinIncr = coinIncr + 2;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr < 20) {
        coinIncr = coinIncr + 10;
        coin.textContent = `¥${coinIncr}`;
    }
});

btnMinus.addEventListener('click', () => {
    if (totalBetIncr > 150) {
        totalBetIncr = totalBetIncr - 150;
        totalBet.textContent = `¥${totalBetIncr}`;
        btnPlus.style.cursor = 'pointer';
        btnPlus.classList.add('plus-btn');
        btnPlus.style.background = 'url(images/plus-normal.png) no-repeat center / contain';
        audioPlay();

    } else if (totalBetIncr > 120) {
        totalBetIncr = totalBetIncr - 30;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr > 75) {
        totalBetIncr = totalBetIncr - 45;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr > 45) {
        totalBetIncr = totalBetIncr - 30;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr > 15) {
        totalBetIncr = totalBetIncr - 15;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr > 9) {
        totalBetIncr = totalBetIncr - 3;
        totalBet.textContent = `¥${totalBetIncr}`;
        audioPlay();
    } else if (totalBetIncr > 1.50) {
        totalBetIncr = totalBetIncr - 1.50;
        if ( totalBetIncr === 3 || totalBetIncr === 6 || totalBetIncr === 9) {
            totalBet.textContent = `¥${totalBetIncr}`;
            audioPlay();
        } else {
            totalBet.textContent = `¥${totalBetIncr.toFixed(2)}`;
            audioPlay();
        }
    } else if (totalBetIncr > 0.90) {
        totalBetIncr = totalBetIncr - 0.30;
        totalBet.textContent = `¥${totalBetIncr.toFixed(2)}`;
        audioPlay();
    } else if (totalBetIncr > 0.15) {
        totalBetIncr = totalBetIncr - 0.15;
        totalBet.textContent = `¥${totalBetIncr.toFixed(2)}`;
        
        audioPlay();
    }

    if (totalBetIncr <= 0.15) {
        btnMinus.style.cursor = 'default';
        btnMinus.classList.remove('minus-btn');
        btnMinus.style.background = 'url(images/minus-not-active.png) no-repeat center / contain';
    }

    if (coinIncr > 10) {
        coinIncr = coinIncr - 10;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr > 8) {
        coinIncr = coinIncr - 2;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr > 5) {
        coinIncr = coinIncr - 3;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr > 3) {
        coinIncr = coinIncr - 2;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr > 1) {
        coinIncr = coinIncr - 1;
        coin.textContent = `¥${coinIncr}`;
    } else if (coinIncr > 0.70) {
        coinIncr = coinIncr - 0.20;
        coin.textContent = `¥${coinIncr.toFixed(2)}`;
    } else if (coinIncr > 0.11) {
        coinIncr = coinIncr - 0.10;
        coin.textContent = `¥${coinIncr.toFixed(2)}`;
    } else if (coinIncr > 0.07) {
        coinIncr = coinIncr - 0.02;
        coin.textContent = `¥${coinIncr.toFixed(2)}`;
    } else if (coinIncr > 0.015) {
        coinIncr = coinIncr - 0.01;
        coin.textContent = `¥${coinIncr.toFixed(2)}`;
    } 
});

//Turbo btn func---------------------------------------------
btnTurbo.addEventListener('click', () => {
    audioPlay();
    if (check.checked) {
        btnTurbo.style.bottom = '4px';
        turboBg[0].classList.add('active');
        turboBg[1].classList.remove('active');
    } else {
        btnTurbo.style.bottom = '20px';
        turboBg[0].classList.remove('active');
        turboBg[1].classList.add('active');
    }
});

//Spin btn func----------------------------------------------
function deletePressed() {
    btnSpin.classList.remove('pressed');
    spinSign.style.animation = 'rotate 5.5s linear 2s infinite';
    spinSign.src = 'images/spin-sign.png';
    spinSign.style.width = '115px';
}

function addPressed() {
    btnSpin.classList.add('pressed');
    spinSign.style.animation = 'none';
    spinSign.src = 'images/stop-normal.png';
    spinSign.style.width = '60px';
}

btnSpin.addEventListener('click', () => {
    let timeout = setTimeout(deletePressed, 3000);
    
    if (btnSpin.classList.contains('pressed')) {
        deletePressed();
        clearInterval(timeout);
    } else {
        addPressed();
    }
});