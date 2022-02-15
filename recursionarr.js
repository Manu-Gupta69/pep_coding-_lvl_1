let arr = [10,20,55 ,30,40,50];

// function print(idx){
//     if(idx === arr.length) return;

//    // console.log(arr[idx]);
//     print(idx +1);
//     //reverse
//     //console.log(arr[idx]);
// }
// print(0);

// Maximum of arr using recursion

function max(idx){
    if(idx == arr.length) return -1;
       return Math.max(arr[idx] , max(idx+1));
}
console.log(max(0));