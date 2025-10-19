let clickCount = 0;
const button = document.getElementById('changeColorBtn');
const counterElement = document.getElementById('clickCount');

button.addEventListener('click', function() {
    // Increment counter
    clickCount++;
    counterElement.textContent = clickCount;
    
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});