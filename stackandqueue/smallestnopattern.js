let str = 'dddiidd'
let stack = [];
let num = 1;
for(let i=0 ; i<str.length; i++){
    if(str[i] == 'd'){
        stack.push(num);
        num += 1;
    }
    else if(str[i] == 'i'){
        stack.push(num);
        num += 1;
        while(stack.length) {
            console.log(stack.pop());
        }
    }
}
stack.push(num);
while(stack.length){
    console.log(stack.pop())
}