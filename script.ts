function calculateTime(weight: number, wattage: number): number {
  return (weight / 100) * (700 / wattage);
}

const weightInput = document.getElementById('weight') as HTMLInputElement;
const wattageInput = document.getElementById('wattage') as HTMLInputElement;
const meat = document.getElementById('meat') as HTMLDivElement;
const result = document.getElementById('result') as HTMLDivElement;
const calcBtn = document.getElementById('calc') as HTMLButtonElement;

function updatePlate() {
  const weight = parseFloat(weightInput.value) || 0;
  const ratio = Math.min(weight / 1000, 1);
  const scale = 0.3 + ratio * 0.7;
  meat.style.transform = `translateX(-50%) scale(${scale})`;
}

weightInput.addEventListener('input', updatePlate);

calcBtn.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const wattage = parseFloat(wattageInput.value);

  if (isNaN(weight) || isNaN(wattage) || weight <= 0 || wattage <= 0) {
    result.textContent = 'Please enter valid weight and wattage values.';
    return;
  }

  const minutes = calculateTime(weight, wattage);
  const min = Math.floor(minutes);
  const sec = Math.round((minutes - min) * 60);
  result.textContent = `Defrost for approximately ${min} min ${sec} sec.`;
});

updatePlate();
