// Creation of binary tree
class Bt{
    constructor(){
        this.root = null;
    }

    addnodes(arr){

        let rootnode = new Node(arr[0]);
        let rootstacknode = new Stacknode(rootnode , 1);
        this.root = rootnode;
         let callstack = [rootstacknode];
           let idx = 0;
          while(callstack.length > 0){
              let top = callstack[callstack.length - 1];

              if(top.state == 1){
                   idx += 1;
                  if(arr[idx] !== null){
                    top.node.left = new Node(arr[idx]);
                    let stacknode = new Stacknode(top.node.left  , 1)  
                  callstack.push(stacknode);
                  }else{
                      top.node.left = null;
                  }
                  top.state += 1;
                }
                else if(top.state == 2){
                    idx+= 1;
                    if(arr[idx] !== null){
                        top.node.right = new Node(arr[idx]);
                        let stacknode = new Stacknode(top.node.right  , 1)  
                        callstack.push(stacknode);
                      }else{
                          top.node.right = null;
                      }
                      top.state += 1;
                }else{
                    callstack.pop();
                }
          }
          console.log(this.root);

    }

    display(root){
        let arr = [];
       function dfsinorder(node){
            if(node == null) return;

            dfsinorder(node.left);
            arr.push(node.value);
            dfsinorder(node.right);
        }

        dfsinorder(root);
        console.log(arr);

    }


    size(root){
        function calculatesum(node){
             if(node == null) return 0 ;

             let leftsum = calculatesum(node.left)
             let rightsum = calculatesum(node.right);
             return leftsum + rightsum + node.data;
        }
        function calculatemax(node){
            if(node == null) return Number.MIN_SAFE_INTEGER;
             let leftmax = calculatemax(node.left);
             let rightmax = calculatemax(node.right);
             let actualmax = Math.max(leftmax , rightmax );

             return Math.max(actualmax,node.data);
        }
        function calculateheight(node){
               if(node == null)  return -1;
            let leftheight = calculateheight(node.left);
            let rightheight = calculateheight(node.right);
            let maxheight = Math.max(leftheight +  rightheight) ;
            return maxheight + 1;
        }
    }

}
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Stacknode{
    constructor(node ,state){
        this.node = node;
        this.state = state;
    }
}

let arrnodes = [
  50,
  25,
  12,
  null,
  null,
  37,
  30,
  null,
  null,
  null,
  75,
  62,
  null,
  70,
  null,
  null,
  87,
  null,
  null,
];


let bt1 = new Bt();
bt1.addnodes(arrnodes);
bt1.display(bt1.root);





 //Iterative preorder post order INorder pseudo code
 //mimic callstack of recursive calls 

 //state - 1 preorder just entered in the callstack;
 //state - 2  Inorder left child was instered or traversed go to the right child;
 //state - 3 postorder right child was instered or traversed pop the node from the callstack;
 
 
 function iterativetraverse(root){
     let rootstacknode = new Stacknode(root , 1)
    let callstack = [rootstacknode];
    let preorder=  [];
    let postorder  = [];
    let inorder  = [];

      while(callstack.length > 0){
    let top = callstack[callstack.length - 1];
    if(top.state == 1){
        //preorder
       preorder.push(top.node.data);
        if(top.node.left !== null){
            callstack.push(new Stacknode(top.node.left ,  1));
        }
       top.state += 1;
    }
    else if(top.state == 2){
        //inorder
        inorder.push(top.node.data)
        if(top.node.right !== null){
            callstack.push(new Stacknode(top.node.right ,  1));
        }
       top.state += 1;
    }
    else{
        //postorder
        postorder.push(top.node.data)
        callstack.pop();
    }
  }
 }


 // NODE TO ROOT PATH

 function find(node , value){

    if(node == null) return false ;

    if(node.data == value) {
        paath.push(node.data);
        return true
    };

    let leftside = find(node.left , value)
    if(leftside) {
        Paath.push(node.data);
        return leftside
    }
    let rightside = find(node.right , value)
    if(rightside) {
        paath.push(node.data);
        return rightside;
    }

    return false;
 }


 //Print k nodes away

 let arrnodes = nodetoroothpath(root);
 let k= 3; // can be anything  
 for(let node , index of arrofnodes) {
     printkleveldown(node , k-index ,   i == 0 ? blockage = null :  arrnodes[index-1]);
 }