

const childEls = document.getElementById('parent');
console.log('child nodes', childEls.childNodes);

console.log('child elements', childEls.children);

console.log('First Child', childEls.firstChild);

console.log('First Element', childEls.firstElementChild);
console.log('Last Element', childEls.lastElementChild);

console.log('Parent', childEls.parentNode);

const firstElement = childEls.firstElementChild;
console.log('Parent of li', firstElement.parentNode);

const bodyEl = document.querySelector('body');
console.log('Parent element of body', bodyEl.parentElement);
console.log('Parent element of body', bodyEl.parentElement.parentElement);

const firstNode = childEls.firstChild;
const firstEl = childEls.firstElementChild;

const lastNode = childEls.lastChild;
const lastEl = childEls.lastElementChild;

console.log(firstNode.nextSibling);
console.log(firstNode.nextSibling.nextSibling);

console.log(firstEl.nextElementSibling);

console.log(lastNode.previousSibling);
console.log(lastEl.previousElementSibling);

