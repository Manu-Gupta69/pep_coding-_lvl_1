let outerspace = 2;
let innerspace = -1;
for(let i= 1 ; i<=5 ; i++){
    let arr  = [];
    for(let j = 1 ; j<=outerspace ; j++){
        arr.push(' ');
    }
    arr.push('*');
    for(let j = 1; j<=innerspace ; j++){
        arr.push(' ');
    }
    if(i>1 && i< 5){
        arr.push('*');
    }
    if(i <= Math.floor(5/2)){
        outerspace -=1;
        innerspace += 2;
    }else{
        outerspace += 1;
        innerspace -=2;
    }
    
    console.log(...arr);
}