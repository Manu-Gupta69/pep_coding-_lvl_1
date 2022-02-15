let arr = [7, 5, 2, 6, 4, 3, 8, 1, 5];
let k = 3 // window size 
//find right max

let stack = [];
let greaterright = [];
for(let i = arr.length - 1 ; i>=0 ; i--){
     while(stack.length && arr[stack[stack.length  - 1]] <= arr[i]){
         stack.pop();
     }
     greaterright[i]  = stack.length == 0 ? arr.length   : stack[stack.length - 1];
     stack.push(i);
}
let j = 0;
for(let i=0 ; i<=arr.length-k ; i++){
   if(j<i){
       j =  i;
   }
    while(greaterright[j] < i+k){
        j = greaterright[j];
    }
    console.log(arr[j]);
}