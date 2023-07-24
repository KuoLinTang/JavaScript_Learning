let add = (n1, n2) => (n1 + n2);
let multiply = (n1, n2) => (n1 * n2);
let math = {
    add: add, multiply: multiply
};

// allows import all functionality
export default math;
// can import individual functions
export { add, multiply };





/*
// default export
let x = "Hello";
// export default x;

// non default export
let data = [4, 5, 6];
let obj = { x: 5, y: 9 };
// export { data, obj };

export { x as default, data, obj };
*/