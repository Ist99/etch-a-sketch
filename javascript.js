function buildTheBoard(n,x) {
for (let i = 1; i <=n*n; i++) {
    container.appendChild(document.createElement("div"));
    }
    colorListener(x);
}

function colorListener (x) {
    let allElements = container.querySelectorAll("div");
    allElements.forEach(element => {
      element.addEventListener("mouseenter", () => {
        element.removeAttribute('class');
        element.classList.add(x);
      });
    });
}

function isPositiveInteger(str) { 
    const num = Number(str);
    if (Number.isInteger(num) && num > 0) {
      return true;}
    return false;
}

function randomRGBNumbers() {
   let a = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let c = Math.floor(Math.random() * 256);
}    

const sel = document.getElementsByTagName("select");
let x = sel[0].value;
sel[0].addEventListener('change', () => {
    x = sel[0].value;
    console.log(x);
    colorListener(x);
})

buildTheBoard(16,x);

let btn = document.getElementsByTagName("button");
btn[0].addEventListener('click', () => {
    let n = prompt("Add your board size (n => nxn board)! Minimum size is 2, maximum is 100.");
    if ((isPositiveInteger(n)) && (n >= 2) && (n <= 100)) {
    document.documentElement.style.setProperty("--rowNum", n);
    document.documentElement.style.setProperty("--colNum", n);
    container.innerHTML = '';
    buildTheBoard(n,x);
    }
    else { alert('Error!'); }
})

