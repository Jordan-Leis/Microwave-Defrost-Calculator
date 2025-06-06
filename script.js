function calculateTime(weight, wattage) {
    return (weight / 100) * (700 / wattage);
}
var weightInput = document.getElementById('weight');
var wattageInput = document.getElementById('wattage');
var meat = document.getElementById('meat');
var result = document.getElementById('result');
var calcBtn = document.getElementById('calc');
function updatePlate() {
    var weight = parseFloat(weightInput.value) || 0;
    var ratio = Math.min(weight / 1000, 1);
    var scale = 0.3 + ratio * 0.7;
    meat.style.transform = "translateX(-50%) scale(".concat(scale, ")");
}
weightInput.addEventListener('input', updatePlate);
calcBtn.addEventListener('click', function () {
    var weight = parseFloat(weightInput.value);
    var wattage = parseFloat(wattageInput.value);
    if (isNaN(weight) || isNaN(wattage) || weight <= 0 || wattage <= 0) {
        result.textContent = 'Please enter valid weight and wattage values.';
        return;
    }
    var minutes = calculateTime(weight, wattage);
    var min = Math.floor(minutes);
    var sec = Math.round((minutes - min) * 60);
    result.textContent = "Defrost for approximately ".concat(min, " min ").concat(sec, " sec.");
});
updatePlate();
