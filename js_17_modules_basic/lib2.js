function echo(msg) {
    console.log(msg);
};

function add(n1, n2) {
    console.log(n1 + n2);
};

const c = 'I am Joseph';
let [n1, n2] = [5, 8];

export default {
    echo: echo, add: add, c: c, n1: n1, n2: n2  // format - ATTRIBUTE_NAME: DATA_NAME 
};