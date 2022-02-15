
// let steps = [1,2,3];

// function calsteps(reducestep , path){
//     if(reducestep === 0 ) {
//         console.log(path);
//     }

//     for(let step of steps){
//         if(reducestep - step >= 0){
//             let arr =  calsteps(reducestep - step , path+step);
//         }
//     }
// }
// console.log(calsteps(4 , ''))


let steps = [1,2,3];

function calsteps(reducestep ){
    if(reducestep === 0 ) {
        return [''];
    }

    let paths = [];
    for(let step of steps){
        if(reducestep - step >= 0){
            let arr =  calsteps(reducestep - step);
            let modified = arr.map(item => step+item);
            paths = [...paths , ...modified];
        }
    }
    return paths;
}
console.log(calsteps(4))