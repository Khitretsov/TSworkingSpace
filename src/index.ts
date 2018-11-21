import './style.less';

const div = document.createElement('div');
div.innerHTML = 'fdfdfdfdfdfd';
document.body.appendChild(div);

function koko(param: string) {
    console.log(param);
}

koko('d.key');
