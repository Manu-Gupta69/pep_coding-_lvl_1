let rotation  = 501;
let number = 12345;
let temp = number;
let length = 0;
while(temp !== 0){
    length += 1;
    temp = Math.floor(temp/10);
}
console.log(length);
rotation = rotation % length;
console.log(rotation);

let multi = 1;
let div = 1;

for(let i = 0 ; i<length ; i++){
    if(i<rotation){
     div *= 10;
    }
    else{
        multi *= 10;
    }
}
let last = number % div;
let rem = Math.floor(number / div);
last *= multi ;
let rotateno = last + rem; 
console.log(rotateno);