const symbols = ['🎨', '🎮', '🎲', '🎸', '🎭', '🎪', '🎯', '🎱'];
let moves = 0;
let timer = 0;
let timerInterval;
let firstCard = null;
let secondCard = null;
let canFlip = true;
let deck = [];

function createDeck() {
    const doubledSymbols = [...symbols, ...symbols];
    // Fisher-Yates shuffle algoritmi
    for (let i = doubledSymbols.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [doubledSymbols[i], doubledSymbols[j]] = [doubledSymbols[j], doubledSymbols[i]];
    }
    return doubledSymbols.map((symbol, index) => ({
        id: index,
        symbol,
        matched: false
    }));
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'memory-card';
    cardElement.innerHTML = `
        <div class="card-inner">
            <div class="card-front">${card.symbol}</div>
            <div class="card-back"></div>
        </div>
    `;
    
    cardElement.addEventListener('click', () => {
        if (canFlip && !card.matched && !cardElement.classList.contains('flipped')) {
            handleCardClick(card, cardElement);
        }
    });
    return cardElement;
}

function handleCardClick(card, element) {
    element.classList.add('flipped');
    
    if (!firstCard) {
        firstCard = { card, element };
    } else {
        secondCard = { card, element };
        canFlip = false;
        moves++;
        document.getElementById('moves').textContent = moves;
        checkForMatch();
    }
}

function checkForMatch() {
    const isMatch = firstCard.card.symbol === secondCard.card.symbol;
    
    if (isMatch) {
        firstCard.card.matched = true;
        secondCard.card.matched = true;
        firstCard.element.classList.add('matched');
        secondCard.element.classList.add('matched');
    }

    setTimeout(() => {
        if (!isMatch) {
            firstCard.element.classList.remove('flipped');
            secondCard.element.classList.remove('flipped');
        }
        resetTurn();
        checkWinCondition();
    }, 1000);
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    canFlip = true;
}

function checkWinCondition() {
    const allMatched = deck.every(card => card.matched);
    if (allMatched) {
        clearInterval(timerInterval);
        setTimeout(() => alert(`🎉 Yutdingiz! ${timer} soniyada ${moves} urinish bilan!`), 500);
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timer = 0;
    document.getElementById('timer').textContent = timer;
    timerInterval = setInterval(() => {
        timer++;
        document.getElementById('timer').textContent = timer;
    }, 1000);
}

function startNewGame() {
    clearInterval(timerInterval);
    moves = 0;
    deck = createDeck();
    document.getElementById('moves').textContent = moves;
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = '';
    
    deck.forEach(card => {
        gameGrid.appendChild(createCardElement(card));
    });
    
    startTimer();
    canFlip = true;
    firstCard = null;
    secondCard = null;
}

// Boshlang'ich o'yinni ishga tushirish
startNewGame();