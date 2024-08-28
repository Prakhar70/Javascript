let obj={};
console.log(obj.toString());//[object Object]

obj={
    toString(){
        return 10;
    }
}
console.log(obj.toString());//10