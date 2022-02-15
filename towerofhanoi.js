let t1 = 'A' , t2 = 'B' , t3 = 'C';
let disk = 8;

function movedisk( n ,t1 , t2 , t3){
    if(n === 0 ) return;
    movedisk(n - 1 , t1, t3 , t2);
    console.log(t1 , '--->' , t2 );
    movedisk(n-1 , t3 ,t2 , t1);
}

movedisk(8 , t1 , t2 , t3);