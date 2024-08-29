console.log(""+0);//"0"
console.log(""+(-0));//"0"
console.log(""+[]);//""-->ToString([])=''
console.log(""+{});//"[object Object]"
console.log(""+[1,2,3]);//"1,2,3"
console.log(""+[null,undefined]);//''
console.log(""+[1,2,null,4]);//'1,2,,4