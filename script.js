
function reSize(squareInput) {
    let totalSquares = squareInput ** 2;
    let i;
    for (i = 0; i < totalSquares; i++) {
        const container = document.querySelector('#gridContainer');

        container.style.display = 'grid';
        container.style.height = '600px';
        container.style.width = '600px';
        container.style.gridTemplateColumns = "repeat(" + squareInput + ", auto)";
        container.style.gridTemplateRows = "repeat(" + squareInput + ", auto)";

        const content = document.createElement("div");
        content.classList.toggle('square');

        container.appendChild(content);
    }

    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseover', changeColor);
    })

}

reSize(16);

function deleteCells() {
    const myElements = document.querySelectorAll(".square");
    for (let i=0; i < myElements.length; i++) {
        myElements[i].parentNode.removeChild(myElements[i]);
    }
}

function changeColor() {
    this.style.backgroundColor = 'black';
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(square => {
        square.style.cssText = "background-color: #c1c1c1";
    })

    let input = prompt('Enter squares');
    deleteCells();
    reSize(input);
})

