// DOM elementlarni olish
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const operatorEl = document.getElementById("operator");
const resultEl = document.getElementById("result");
const btn = document.getElementById("calculate");

// Tugma bosilganda hisoblash funksiyasi
btn.addEventListener("click", () => {
  // Input qiymatlarini raqamga o‘tkazish
  const a = parseFloat(num1El.value); // yoki +num1El.value 
  const b = parseFloat(num2El.value);

  let result;

  // if...else orqali operatorga qarab amal bajarish
  if (operatorEl.value === "+") {
    result = a + b;                     // qo‘shish 
  } else if (operatorEl.value === "-") {
    result = a - b;                     // ayirish 
  } else if (operatorEl.value === "*") {
    result = a * b;                     // ko‘paytirish 
  } else if (operatorEl.value === "/") {
    result = b !== 0 ? a / b : "∞";     // bo‘lish + nolga bo‘lishni tekshirish 
  } else {
    result = "Noma’lum amal";
  }

  // Natijani ekranga chiqarish
  resultEl.textContent = `Natija: ${result}`;
});
