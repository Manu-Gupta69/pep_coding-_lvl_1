let stars = 3;
let space = 2;

for(let i=1 ; i<= 5 ; i++){
    let arr = []
    for(let j=1 ; j<=stars ; j++) arr.push('*');
    for(let j=1 ; j<=space ; j++) arr.push(' ');
    for(let j=1 ; j<=stars ; j++) arr.push('*');
    if(i<= Math.floor(5/2)){
        space+=2;
        stars -= 1;
    }else{
        space -=2;
        stars += 1;
    }
    console.log(...arr);
}
