function buildTheBoard(n,x) {
    document.documentElement.style.setProperty("--rowNum", n);
    document.documentElement.style.setProperty("--colNum", n);
    container.innerHTML = '';
for (let i = 1; i <=n*n; i++) {
    container.appendChild(document.createElement("div"));
    }
    colorListener(x);
}

function colorListener (x) {
    let allElements = container.querySelectorAll("div");
    allElements.forEach(element => {
      element.z = 0;  
      element.addEventListener("mouseenter", (e) => {
        if (x === "coloredBlack") {
            element.style.backgroundColor = "black";
            element.style.border = "black";
        } else if (x === "coloredRandom") {
            element.style.backgroundColor = randomRGBNumbers();
            element.style.border = randomRGBNumbers();
        } else { 
            element.z = addOpacity(element.z);
            element.style.backgroundColor = "rgba(0,0,0," + element.z + ")";
            element.style.border = "rgba(0,0,0, " + element.z + ")"; 
        }
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
   return "rgb(" + a + ", " + b + ", " + c + ")";
}    

function addOpacity(zs) {
    console.log(zs);
    if (zs < 0.95) {
        return zs+0.1;
    }
    return zs;
}

let n = 16;

const sel = document.getElementsByTagName("select");
let x = sel[0].value;
sel[0].addEventListener('change', () => {
    x = sel[0].value;
    buildTheBoard(n,x);
})

buildTheBoard(n,x);

let btn = document.getElementsByTagName("button");
btn[0].addEventListener('click', () => {
    n = prompt("Add your board size (n => nxn board)! Minimum size is 2, maximum is 64.");
    if ((isPositiveInteger(n)) && (n >= 2) && (n <= 64)) {
    buildTheBoard(n,x);
    }
    else { alert('Error!'); }
})

