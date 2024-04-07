// Accesssing DOM elements


const heading = document.getElementById('heading');
console.log(heading);

const boxes = document.getElementsByClassName('box');
console.log(boxes);

const images = document.getElementsByTagName('img')

for( let i = 0 ; i < boxes.length ; i++) {
    const element = boxes [i];
    console.log(element)
}