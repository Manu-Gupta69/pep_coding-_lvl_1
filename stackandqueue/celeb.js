let matrix = new Array(4).fill(null).map(item => new Array(4).fill(0));


let stack =[];
for(let row = 0 ; row<matrix.length ; row++){
    stack.push(row);
}

while(stack.length >= 2){
    let second  = stack.pop();
    let first = stack.pop();
    if(check(first , second)){
          stack.push(second);
    }else{
        stack.push(first);
    }
}

let potential = stack.pop();
for(let row = 0 ; row < matrix.length ; i++){
   if(i !== potential){
       if(matrix[row][potential] == false || matrix[potential][row] == true){
           console.log(false);
           return false;
       }
   }   
}
console.log(true);
return true;

function check(val1 , val2){
    if(matrix[val1][val2] == true) return true;
    else return false;
}