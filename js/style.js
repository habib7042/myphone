let circle = document.getElementById("circle");
let upbtn = document.getElementById("upbtn");
let downbtn = document.getElementById("downbtn");

let rotateValue = circle.style.transform;
let rotateSum;

upbtn.onclick = () => {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downbtn.onclick = () => {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}