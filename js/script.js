const audio = document.querySelector('.audio');
const buttons = document.querySelectorAll('button');
const btnInfo = document.querySelector('.panel__info-btn');
const btnMinus = document.querySelector('.panel__totalbet-minus');
const btnPlus = document.querySelector('.panel__totalbet-plus');
const btnAuto = document.querySelector('.panel__auto-btn');
const btnSpin = document.querySelector('.panel__spin-btn');
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
btnAuto.addEventListener('mouseover', () => {
    select.style.height = '195px';
});

btnAuto.addEventListener('mouseout', () => {
    select.style.height = '0';
});

select.addEventListener('mouseover', () => {
    select.style.height = '195px';
});

select.addEventListener('mouseout', () => {
    select.style.height = '0';
});

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