// let str = "aaabbccd"; 
// let str2 = 'def';
// let count = {};


// for(let i = 0 ; i < str.length ;i++){
//     console.log(str[i]);
//   if(!count.hasOwnProperty(str[i])){
//       count[str[i]] = true
//   }
// }
// let bool = false;
// for(let i  =0 ; i<str2.length ; i++){
//     if(count.hasOwnProperty(str2[i])) {
//         bool = true;
//         console.log('not unique');
//     }
// }
// if(!bool){
//     console.log('unique');
// }

// console.log(count)


// //ARRAY METHOD -----------------


// let str = "aaabbccd"; 
// let str2 = 'def';
// let arr = [];


// for(let i = 0 ; i < str.length ;i++){
//     arr[str[i].charCodeAt(0)-97]= str[i];
// }

// for(let i  =0 ; i<str2.length ; i++){
//     if(arr.includes(str2[i])) {
//         bool = true;
//         console.log('not unique');
//         break;
//     }
// }
// if(!bool){
//     console.log('unique');
// }

// console.log(arr);


//RECURSION


let str = "aaabbcfc"; 
let str2 = 'def';
let count = {};


for(let i = 0 ; i < str.length ;i++){
   // console.log(str[i]);
  if(!count.hasOwnProperty(str[i])){
      count[str[i]] = true
  }
}

console.log(check(str2));

function check(rstr){
    if(rstr.length  === 0) return true;
    let firstele = rstr[0];
     if(count.hasOwnProperty(firstele)) return false;
     let newstr = rstr.slice(1)
    console.log(rstr, newstr)

   return check(newstr);
}
