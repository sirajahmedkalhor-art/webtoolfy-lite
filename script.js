// Color Picker
const colorInput = document.getElementById('colorInput');
const colorValue = document.getElementById('colorValue');

colorInput.addEventListener('input', () => {
    colorValue.textContent = colorInput.value;
});

// Gradient Generator
const gradStart = document.getElementById('gradStart');
const gradEnd = document.getElementById('gradEnd');
const gradientPreview = document.getElementById('gradientPreview');

gradStart.addEventListener('input', updateGradient);
gradEnd.addEventListener('input', updateGradient);

function updateGradient() {
    const start = gradStart.value || '#ff0000';
    const end = gradEnd.value || '#0000ff';
    gradientPreview.style.background = `linear-gradient(to right, ${start}, ${end})`;
}
