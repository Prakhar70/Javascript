console.log(0-"010");//-10
console.log(0-010);//0-8=-8

console.log(0-"o10");//NaN
console.log(0-"O10");//NaN

console.log(0-'0xb');//-11
console.log(0-0xb);//-11

console.log(0-[]);//0
console.log([]-1);//-1
console.log(['']-1);//-1
console.log(['0']-1);//'0'-1=-1