// let arr = []
// for(let i= 1 ; i<=5  ;i++){
//   for(let j = 1 ;  j<=i ;  j++){
//       arr.push('*');
//   }
//   console.log(...arr);
//   arr = []
// }

// inverted

for(let i = 5 ; i>=1 ; i--){
    let arr = [];
    for(let j = 1 ; j<= i ; j++){
        arr.push('*')
    }
    console.log(...arr)
}