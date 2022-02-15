for(let i = 1 ; i<=5 ;i++){
    let arr  =  [];
    for(let j = 1; j <= 5; j++){
        if(j== 1 || j == 5 ) arr.push('*')
       else if(i <= Math.floor(5/2)+1 && (i==j || i+j == 6) ){
           arr.push('*')
       }else{
           arr.push(' ');
       }
    }
    console.log(...arr);
}