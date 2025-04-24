const totalInput   = document.getElementById('totalInput');
const winnersInput = document.getElementById('winnersInput');
const drawBtn      = document.getElementById('drawBtn');
const errorMsg     = document.getElementById('errorMsg');
const winnersList  = document.getElementById('winnersList');

drawBtn.addEventListener('click', () => {
  const n = parseInt(totalInput.value, 10);
  const k = parseInt(winnersInput.value, 10);
  winnersList.innerHTML = '';
  errorMsg.textContent   = '';

  // Shartlar: 1 < k < n
  if (!(n > k && k > 1)) {
    errorMsg.textContent = 'Iltimos, 1 < k < n shartini qanoatlantiring!';
    return;
  }

  // === USUL 1: while sikli yordamida noyob tanlash ===
  const winners1 = [];
  while (winners1.length < k) {                              // :contentReference[oaicite:0]{index=0}
    const pick = Math.floor(Math.random() * n) + 1;           // :contentReference[oaicite:1]{index=1}
    if (!winners1.includes(pick)) {
      winners1.push(pick);
    }
  }

  // === USUL 2: Fisher–Yates shuffle ===
  const arr = [];
  for (let i = 1; i <= n; i++) {                              // :contentReference[oaicite:2]{index=2}
    arr.push(i);
  }
  for (let i = arr.length - 1; i > 0; i--) {                  // :contentReference[oaicite:3]{index=3}
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const winners2 = arr.slice(0, k);

  // Natijani chiqarish
  winnersList.innerHTML = `
    <li><strong>While sikli usuli:</strong> ${winners1.join(', ')}</li>
    <li><strong>Shuffle usuli:</strong> ${winners2.join(', ')}</li>
  `;
});
