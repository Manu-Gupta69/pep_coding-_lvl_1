let str1 = 'abc';

function combination(str){
    if(str == '') return [''];
      let totalcombination = [];
    let firstele = str[0];
    let returnedans = combination(str.slice(1));
    for(let ele of returnedans){
         totalcombination.push(firstele + ele);
         totalcombination.push(ele);
    }
    console.log(totalcombination);
    return totalcombination;

}
let combs = combination(str1);
console.log(combs);
