let str = 'aaa@bbb@ccc'
str.replace('@', '!')
console.log(str.replace('@', '!').replace('@','!'));
//2
let str_two = 'HELLOWORLD'
console.log(
    str_two.charAt().toUpperCase() + str_two.slice(1,5).toLowerCase() + ' ' +str_two.slice(5,10).toLowerCase());
//3
let str_three = 'Hello, it is HTML'
console.log(str_three.slice(0,5)+str_three.slice(6,9)+str_three.slice(9,12)+'not JS');
//4
let str_four = 'alex'
console.log(str_four.charAt().toUpperCase()+str_four.slice(1,4));
//5
let str_fife = 'LexLuter has a big suit'
console.log(
    'A'+str_fife.slice(0,3));
//6
let math = ' '
console.log(Math.random().toFixed(0));
