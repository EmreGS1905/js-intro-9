
const box1 = document.getElementById('box');
console.log(box1);
console.log('innerHTML of box1:' , box1.innerHTML);
console.log('textContent of box1:' , box1.textContent);
console.log('innerText of box1:' , box1.innerText);

const box2 = document.getElementById('box2');
box2.innerHTML = "Updated text from innerHTML";
box2.textContent = "Updated text from textContent";
box2.innerText = "Updated text from innerText ";

const box3 = document.getElementById('box2');
box2.innerHTML = "Updated text from innerHTML";
box2.textContent = "Updated text from textContent";
box2.innerText = "Updated text from innerText ";

box3.innerHTML = '<p style="color: red">Updated text from innerHTML </p>'

const h1 = document.createElement('h1');
console.log(h1)
h1.innerHTML = 'this is content of h1'

const body = document.querySelector('body');
body.append(h1);

const section = document.querySelector('.section');
console.log(section);

console.log(section.className);
console.log(section.classList);

section.className = 's1';
console.log(section);

section.className += ' s2';
console.log(section)

section.classList.add('s3');
console.log(section);

section.classList.remove('s3');