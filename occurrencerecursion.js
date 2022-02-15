let arr = [1,2,4,5,5,3,8];

// function firstoccurrence(idx , searchele){
//     if(idx === arr.length ) return - 1;
//     if(arr[idx] == searchele) return idx;

//     return firstoccurrence(idx +1 , searchele)
// }

// let ans = firstoccurrence(0 , 3);
// console.log(ans);

 // last occurrence

// function lastoccurrence(idx ,searchele){
  
//     if(arr.length == idx) return -1;

//    let remaining = lastoccurrence(idx+1 , searchele); 
//    if(remaining  > 0){
//        return remaining;
//    }
//    if(arr[idx] == searchele) return idx;
   
//    return remaining;

// }
// let ans = lastoccurrence(0 , 5);
// console.log(ans);

// all occurrence

function alloccurrence(idx , searchele){
  if(idx === arr.length) return [];

 let ans =  alloccurrence(idx+1 , searchele);
  if(arr[idx] == searchele) ans.push(idx);
  return ans;

}

let finalarr = alloccurrence(0 , 5);
console.log(finalarr.reverse());