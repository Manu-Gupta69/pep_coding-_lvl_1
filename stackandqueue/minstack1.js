let orignalstack = [];
let maxstack = [];
let arr = [4, 2 ,5,1,2,8,3];
for(let val of arr){
    orignalstack.push(val);
    if(maxstack.length == 0 || maxstack[maxstack.length - 1] > val){
        maxstack.push(val);
    }
}

function realogpop(){
   let val =  orignalstack.pop()
   if(val == maxstack[maxstack.length - 1]){
       maxstack.pop();
   }
}
console.log(maxstack , orignalstack);
realogpop()
realogpop()
realogpop()
realogpop()
console.log(maxstack , orignalstack);



// MIN Stack COOLER DANIEL METHOD

//pesudo code

/* ---------

push --->  if(stack.lenght == 0  || val >= min ) stack.push();
             else if(val < min) {
                 min = val;
                 stack.push(val  + val - min)
             }
    
pop() ------> let popval = stack.pop();
                 if(popval > min) return popval;

              jhojhaal  kiya tha value push ke time
                 else if(popval < min ){
                    let wannabemin = min;                   
                      min = 2*min - popval;
                      return wannabemin;
                 }

*/