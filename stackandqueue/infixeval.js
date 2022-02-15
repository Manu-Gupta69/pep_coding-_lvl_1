// //DANIEL

// let newstr = "2+(5-3*6/2)";
// let str = newstr.split('');

// let priority = {
//   "+": 1,
//   "-": 1,
//   "*": 2,
//   "/": 2,
// };

// let intstack = [];
// let operatorstack = [];
// for (let i = 0; i < str.length; i++) {
//     // console.log(operatorstack);
//     // console.log(intstack);
//   if (str[i] == "(") {
//     operatorstack.push(str[i]);
//   } else if (str[i] >= 1 && str[i] <= "9") {
//     intstack.push(parseInt(str[i]));
//   } else if (str[i] == ")") {
//     //starting to pop form the stack till we hit (
//     while (
//       operatorstack.length> 0 &&
//       operatorstack[operatorstack.length - 1] !== "("
//     ) {
//       let op = operatorstack.pop();
//       let val2 = intstack.pop();
//       let val1 = intstack.pop();
//     //   console.log(operatorstack , intstack);
//     //      console.log(op , val1 , val2)
//       let opvalue = operation(op, val1, val2);
//       intstack.push(opvalue);
//     }
//     operatorstack.pop();
//   } else if (priority.hasOwnProperty(str[i])) {
//     //pop till  we hit greater priority operator
//     while (
//       operatorstack.length > 0 &&
//       operatorstack[operatorstack.length - 1] !== "(" &&
//       priority[str[i]] <= priority[operatorstack[operatorstack.length - 1]]
//     ) {
//       let op = operatorstack.pop();
//       let val2 = intstack.pop();
//       let val1 = intstack.pop();
//       let opvalue = operation(op, val1, val2);
//       intstack.push(opvalue);
//     }
//     operatorstack.push(str[i]);
//   }
// }



// while(operatorstack.length != 0){
//     let op = operatorstack.pop();
//     let val2  = intstack.pop();
//     let val1 = intstack.pop();
//     let operationval = operation(op , val1 , val2);
//     intstack.push(operationval);
// }

// function operation(op, val1, val2) {
//   if (op == "+") {
//     return val1 + val2;
//   } else if (op == "-") {
//     return val1 - val2;
//   } else if (op == "*") {
//     return val1 * val2;
//   } else if (op == "/") {
//     return Math.floor(val1 / val2);
//   }
// }

// console.log(operatorstack);
// console.log(intstack);


// COOLER DANIEL (Cleaner code part2)


let newstr = "2+(5-3*6/2)";
let str = newstr.split('');

let priority = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

let intstack = [];
let operatorstack = [];
for (let i = 0; i < str.length; i++) {
    // console.log(operatorstack);
    // console.log(intstack);
  if (str[i] == "(") {
    operatorstack.push(str[i]);
  } else if (str[i] >= 1 && str[i] <= "9") {
    intstack.push(parseInt(str[i]));
  } else if (str[i] == ")") {
    //starting to pop form the stack till we hit (
    while (operatorstack[operatorstack.length - 1] !== "(") {
       stackprocess(operatorstack , intstack);
    }
    operatorstack.pop();
  } else if (priority.hasOwnProperty(str[i])) {
    //pop till  we hit smaller priority operator
    while (
      operatorstack.length > 0 &&
      operatorstack[operatorstack.length - 1] !== "(" &&
      priority[str[i]] <= priority[operatorstack[operatorstack.length - 1]]
    ) {
      stackprocess(operatorstack , intstack);
    }
    operatorstack.push(str[i]);
  }
}

while(operatorstack.length != 0){
    stackprocess(operatorstack , intstack);
}


function stackprocess(operatorstack , intstack){
    let op = operatorstack.pop();
    let val2 = intstack.pop();
    let val1 = intstack.pop();
    let opvalue = operation(op, val1, val2);
    intstack.push(opvalue);
}

function operation(op, val1, val2) {
  if (op == "+") {
    return val1 + val2;
  } else if (op == "-") {
    return val1 - val2;
  } else if (op == "*") {
    return val1 * val2;
  } else if (op == "/") {
    return Math.floor(val1 / val2);
  }
}

console.log(operatorstack);
console.log(intstack);
