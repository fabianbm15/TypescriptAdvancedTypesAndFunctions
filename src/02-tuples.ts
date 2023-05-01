const prices: (number | string)[] = [1, 2, 3, 4, 5, 'a'];
prices.push(1);
prices.push('1');

let user: [string, number]; // tupla
user = ['nicobytes', 15];
// user = [15, "nicobytes"] // mal
// user = [15] // mal
// user = [15, "nicobytes", 10] // mal
const [username, age] = user;
console.log('username', username);
console.log('age', age);
