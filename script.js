let clickCount = 0;
const button = document.getElementById('changeColorBtn');
const emojiBtn = document.getElementById('addEmoji');
const counterElement = document.getElementById('clickCount');
const emojiContainer = document.getElementById('emojiContainer');
const colorList = document.getElementById('colorList');

const emojis = ['😊', '🎨', '🌈', '✨', '🎯', '🎲', '🎮', '🎪', '🎭', '🎪'];
const colorHistory = [];

button.addEventListener('click', function() {
    clickCount++;
    counterElement.textContent = clickCount;
    
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    
    // Add color to history
    colorHistory.push(randomColor);
    addColorToHistory(randomColor);
});

emojiBtn.addEventListener('click', function() {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = randomEmoji;
    emojiSpan.style.margin = '0 5px';
    emojiSpan.style.fontSize = '24px';
    emojiSpan.style.animation = 'popIn 0.3s ease-out';
    emojiContainer.appendChild(emojiSpan);
});

function addColorToHistory(color) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.title = color;
    
    colorBox.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
    });
    
    if (colorList.children.length >= 10) {
        colorList.removeChild(colorList.firstChild);
    }
    
    colorList.appendChild(colorBox);
}

// Add initial animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        from { transform: scale(0); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);