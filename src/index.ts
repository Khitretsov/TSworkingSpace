// import FirstClass from './file';
import './style.less';

const div = document.createElement('div');
div.innerHTML = 'fdfdfdfdfdfd';
document.body.appendChild(div);

const func: (...arg: number[]) => number = function koko() {  // Забавно
    Array.prototype.forEach.call(arguments, (item: number, i: number): void => {
        console.log(`item ${i}:`, item);
    });
    console.log('dfdf', arguments);
    return 1;
};

func(12, 23, 34, 45, 56, 67, 78, 89, 90);

function func2( ...restArg: number[]): void {
    console.log('func2', restArg);
}
func2(12, 23, 34, 45);

const func3: (...arg: number[]) => void = function anyName(firstArg, secondArg) { // Как в нативном джаваСкрипте
    console.log('func3', firstArg, '____|____', secondArg, '____|____', arguments);
};
func3(12, 21, 23, 32); // 12, 32, [12, 21, 23, 32]
func3(12); // 12, undefined, [12]

// func([12, 23, 34, 45, 56, 67, 78, 89, 90]);

// const func2: (arg: number[]) => void = (arr) => {
//     console.log(arr);
// };

// func2([12, 23, 34, 45, 56, 67, 78, 89, 90]);

// type Ifunc = (a: number) => void;
// const lalala: Ifunc = (a) => {
//     console.log(a);
//     a++;
//     if (a < 3) {
//         lalala(a);
//     }
// };

// lalala(0);
