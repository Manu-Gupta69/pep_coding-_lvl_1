// printing

// function increase(num){
//    if(num == 0 ) return;

//     increase(num - 1);
//    console.log(num);
// }

// increase(5);

//power of number

function powerofnum(base , power){
    //base case
    console.log(power);
    if(power == 0 ) return 1;

    let returned  = powerofnum(base , Math.floor(power/2));

    let multi = returned * returned;

    if(power % 2 != 0 ) multi *= base;

    return multi;
}

console.log(powerofnum(2 ,4));