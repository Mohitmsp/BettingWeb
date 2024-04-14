let userBalance = 1000; // Initial user balance

function placeBet() {
    const betAmount = parseFloat(document.getElementById('bet-amount').value);
    // Validate bet amount
    if (isNaN(betAmount) || betAmount <= 0) {
        alert('Please enter a valid bet amount.');
        return;
    }
    // Check if user has enough balance
    if (betAmount > userBalance) {
        alert('Insufficient balance. Please deposit funds.');
        return;
    }
    const event = document.querySelector('.event h3').textContent;
    const odds = document.querySelector('.event p').textContent;
    const bet = `${event} - ${odds}, Amount: $${betAmount.toFixed(2)}`;
    const betList = document.getElementById('bet-list');
    const listItem = document.createElement('li');
    listItem.textContent = bet;
    betList.appendChild(listItem);
    // Deduct bet amount from user balance
    userBalance -= betAmount;
    updateBalance();
}

function removeBet() {
    const betList = document.getElementById('bet-list');
    const selectedBet = betList.querySelector('li:last-child');
    if (!selectedBet) {
        alert('No bet to remove.');
        return;
    }
    const betAmount = parseFloat(selectedBet.textContent.split('Amount: $')[1]);
    // Add bet amount back to user balance
    userBalance += betAmount;
    updateBalance();
    // Remove the last bet from the bet slip
    betList.removeChild(selectedBet);
}

function confirmBets() {
    const betList = document.getElementById('bet-list');
    const bets = betList.querySelectorAll('li');
    if (bets.length === 0) {
        alert('Please place some bets before confirming.');
        return;
    }
    // Process bets (send to server, update user balances, etc.)
    alert('Bets confirmed! Good luck!');
    // Clear bet slip
    betList.innerHTML = '';
}

function updateBalance() {
    const balanceElement = document.getElementById('user-balance');
    balanceElement.textContent = `$${userBalance.toFixed(2)}`;
}
