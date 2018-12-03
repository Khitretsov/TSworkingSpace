const test: { [key: string]: string } = {
    '': '',
    '     ': '5 ',
    'aaaaabbbbcccdde': '5a4b3c2de',
};

function transform(str: string): string {
    const arr = str.split('');
    const answer: Array<number| string> = [1, arr[0]];
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== answer[answer.length - 1]) {
            answer.push(1, str[i]);
        } else {
            answer[answer.length - 2] = answer[answer.length - 2] as number + 1;
        }
    }
    return answer.filter((item: number | string) => {
        if (item !== 1) {
            return item;
        }
    }).join('');
}

for (const key in test) {
    if (transform(key) === test[key]) {
        console.log('Eeeeee!!!!11!');
    } else {
        console.log('Error with data:', key);
    }
}
