let obj = {};
console.log(10 - obj); //10-"[object Object]"=10-NaN=NaN

let obj1 = { x: 9, y: 8 };
console.log(100 - obj); //100-"[object Object]"=100-NaN=NaN

let obj2 = {
  x: 7,
  valueOf() {
    return 99;
  }
};
console.log(100-obj2); //100-99 = 1

let obj3={
    x:8,
    toString(){
        return "88";
    }
};
console.log(90-obj3);//90-"88"=90-88=2

let obj4={
    x:4,
    toString(){
        return {}
    }
}
console.log(100-obj4);//100-TypeError


