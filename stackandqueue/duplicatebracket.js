let stack = [];

let test = '((a+b)+((c+d))';

for(let i=0 ; i<test.length ;i++){
    if(test[i]  == ')'){
        let call = false;
    if(stack.length > 0 && stack[stack.length - 1] !== '('){
        call = true;
        stack.pop();
    }
    if(call) {
        stack.pop();
    }else{
        console.log(false);
        return false;
    }
   }else{
       stack.push(test[i]);
   }

}

console.log(true);
return true;