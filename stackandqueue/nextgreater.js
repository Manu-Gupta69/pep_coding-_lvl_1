// Next greater element on the right 
let arr =  [2 ,5 ,9 ,3, 1, 12, 6, 8, 7];
           //0 1  2  3  4   5  6  7  8
let nextgreaterele = [];

let stack  = [];

for(let i=arr.length- 1 ; i>=0; i--){
    while(stack.length > 0 && arr[stack[stack.length - 1]] <=  arr[i]){
        stack.pop();
    }
    nextgreaterele[i] = stack.length  == 0 ? arr.length - 1: stack[stack.length - 1]
     stack.push(i);
}

console.log(nextgreaterele);


//  STOCK SPAN  based on next greater element on the left

let arr = [1,2,3,1,2,1,3,5];
 let stack = [];
 let stockspan = [];
for(let i = 0 ; i<arr.length ; i++){
   while(stack.length && arr[stack[stack.length - 1]] <= arr[i]){
       stack.pop();
   }
   stockspan[i]  = stack.length ==0 ? i+1 : i - stack[stack.length - 1] ;
   stack.push(i); 
}

// Largest area in histogram 

// solution  {
//     find left smaller;
//     find right smaller;
//     right - left * arr[i];
// }



