// let num = 123450 ;
// let length = 0;
// let temp = num;
// while(temp != 0){
//     temp = Math.floor(temp / 10);
//     length += 1;
// }


// let base = parseInt(Math.pow(10 , length -1));
// console.log(base);
// let temp2 = num;
// while(base !== 0){
//     let first = Math.floor(temp2 / base);
//     console.log(first);
//     temp2 = temp2 % base;
//     base = Math.floor(base / 10);
// }


// reverse the number

let newnumber = 123;
let reversebolte = 0;
while(newnumber !== 0){
    let rem = newnumber % 10;
    reversebolte = reversebolte * 10 + rem;
    newnumber  = Math.floor(newnumber /10);
}
console.log(reversebolte);