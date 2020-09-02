let i;
for (i = 0; i < 256; i++) {
    const container = document.querySelector('#gridContainer');

    const content = document.createElement("div");
    content.classList.toggle('square');

    container.appendChild(content);
}

function changeColor() {
    this.style.backgroundColor = 'black';
}

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', changeColor);
})
