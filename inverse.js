let number = 21453;

let pos = 1;
let inverse = 0;
while(number !== 0){
    let lastdigit = number%10;
    inverse = inverse + pos * Math.pow(10 , lastdigit - 1);
    console.log(inverse )

    number = Math.floor(number / 10);
    pos++;
}
console.log(inverse)
