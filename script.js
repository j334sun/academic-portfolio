const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const printButton = document.getElementById('print-cv');
if (printButton) printButton.addEventListener('click', () => window.print());
