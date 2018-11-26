import './style.less';

const div = document.createElement('div');
div.innerHTML = 'fdfdfdfdfdfd';
document.body.appendChild(div);

const obj = {
    a: 'kokoko',
    b: 34,
    c: 'blablabla',
};

const {a: kokoko, b}: {a: string, b: number} = obj;
let c;

({c} = obj);

console.log(obj, kokoko, b, c);

function func([first, second]: [number, number]) {
    console.log(first, second);
}

func([23, 45]);
