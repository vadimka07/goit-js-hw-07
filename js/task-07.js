const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');
const DEFAULT_FONT_SIZE = 16;
fontSizeControl.value = DEFAULT_FONT_SIZE;
fontSizeControl.min = DEFAULT_FONT_SIZE;
fontSizeControl.max = 100;
fontSizeControl.step = 1;
fontSizeControl.addEventListener('input', ()=> {
    fontSizeControl.getAttribute('value');
    text.style.fontSize = fontSizeControl.value + 'px';
})