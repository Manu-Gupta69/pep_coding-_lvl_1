let stack = [];
 let openbrackets = {
     '{': '}',
     '[':  ']',
     '(':   ')' 
 }

 let closedbrackets = {
    '}' : '{',
    ']' : '[',
    ')' :  '(' 
 }

 let teststr = '';
let stack = [];
 for(let i=0 ;i<teststr.length; i++){
    if(teststr[i] in openbrackets){
        stack.push(teststr[i]);
    }else if(teststr[i] in closedbrackets){
          if(stack.length && stack[stack.length - 1] === closedbrackets[teststr[i]]){
              stack.pop();
          }else{
              console.log(false);
              return false;
          }
    }
 }
 if(stack.length > 0) {
     console.log(false);
     return false;
 }
 return true;