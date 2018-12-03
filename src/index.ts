// import FirstClass from './file';
import './example';
import './style.less';

const div = document.createElement('div');
div.classList.add('mainDiv');
const secondDiv = document.createElement('div');
secondDiv.classList.add('textFormat');
secondDiv.innerHTML = 'Какой-то текст';
div.insertAdjacentElement('afterbegin', secondDiv);
const arrWithElems = [];
for (let i = 0; i < 5; i++) {
    const elem = document.createElement('div');
    // if (i === 3) {
    //     elem.classList.add('specialDiv');
    // } else {
    //     elem.classList.add('smallDiv');
    // }
    elem.classList.add('smallDiv');
    elem.innerHTML = (i + 1).toString();
    arrWithElems.push(elem);
}
div.append(...arrWithElems);
document.body.appendChild(div);
