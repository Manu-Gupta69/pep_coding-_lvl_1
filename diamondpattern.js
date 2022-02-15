let space = 2;
let star = 1;
for(let i = 1 ; i<=5 ; i++){
    //console.log(i , star , space);
    let arr = [];
    for(let j =1 ; j<=space ; j++){
        arr.push(' ');
    }
    for(let j = 1; j<= star ; j++ ) arr.push('*');
    console.log(...arr);
    if(i <= Math.floor(5/2)){
        star+=2;
        space -= 1;
    }else{
        star -=2 ;
        space += 1;
    }
}