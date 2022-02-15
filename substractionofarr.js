let arr1 = [9,9];
let arr2 = [1,0,0];
let arr3 = [];
let i , j;
let bigone , smallone
if(arr2.length > arr1.length){
    i = arr2.length - 1;
     j = arr1.length - 1;
     bigone = arr2;
     smallone = arr1
}else{
    i = arr1.length - 1;
    j = arr2.length - 1;
    bigone = arr1;
    smallone = arr2;
}
let carry = 0;
while(i>= 0){
    let smalloneval;
     if(j<0){
         smalloneval = 0;
     }else{
         smalloneval = smallone[j]
     }
    if(bigone[i]+carry >= smalloneval){
        arr3[i] = bigone[i]+carry   - smalloneval;
        carry =  0;
    }else{
       arr3[i] = bigone[i]+carry +10 - smalloneval;
       carry  = -1;
    }
    i--;
    j--;
}
console.log(arr3);