for(let i = 0 ; i <  6; i++){
    let nexticj = 1;
    let arr = [];
 for(let j = 0 ;  j <= i ;j++){
     arr.push(nexticj);
     let val1 = i -j;
     let val2 = j+1;
    // console.log( val1 , val2)
     nexticj *= (val1/val2);
 }
 console.log(arr)
}
