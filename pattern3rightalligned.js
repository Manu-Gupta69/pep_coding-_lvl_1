let space  = 4;
let star = 1;
for(let i = 1 ; i<= 5 ; i++){
    let arr = [];
   for(let j = 1 ; j<= space; j++ ) arr.push(' ');
   for(let j = 1 ; j<= star; j++ ) arr.push('*');
     space -- ;
     star++;
   console.log(...arr)
   
}