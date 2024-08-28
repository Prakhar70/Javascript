let obj={};
console.log(obj.valueOf());//{}

obj={
    valueOf(){
        return 10;
    }
}
console.log(obj.valueOf());//10