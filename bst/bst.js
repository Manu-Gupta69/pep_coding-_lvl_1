class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  construction(arr) {
    function bstconstruction(low, high) {
      if (low > high) return null;

      let mid = Math.floor(low + high) / 2;
      let node = new Node(arr[mid]); // method to add node in a binary tree
      node.left = bstconstruction(low, mid - 1);
      node.right = bstconstruction(mid + 1, high);

      return node;
    }
    this.root = bstconstruction(0, arr.length - 1);
    //console.log(this.root);
  }

  addsinglenode(value) {
    function addnode(node, value) {
      if (node == null) {
        let newnode = new Node(value);
        return newnode;
      }
      if (node.value > value) {
        //leftside
        node.left = addnode(node.left, value);
      } else if (node.value < value) {
        node.right = addnode(node.right, value);
      }
      return node;
    }
    console.log(this.root.value);
    addnode(this.root, value);
    console.log(this.root);
  }

  removenode(value) {
    function max(node) {
      if (node.right == null) {
        return node.value;
      } else {
        return max(node.right);
      }
    }

    function remove(node, value) {
      
        //find node needed to be removed

      if (node.value > value) {
        node.left = remove(node.left, value);
      } else if (node.value < value) {
        node.right = remove(node.right, value);
      } else {
        if (node.left !== null && node.right !== null) {
          let maxonleftside = max(node.left);
          node.value = maxonleftside;
          node.left =  remove(node.left, maxonleftside);
        } else if (node.left !== null) {
          return node.left;
        } else if (node.right !== null) {
          return node.right;
        } else if(node.left == null && node.right == null) {
          return null;
        }
      }

      return node;
    }
    remove(this.root, value);
    console.log(this.root);
  }

  lca(node  , d1 , d2){
      if(node ==  null) return;
      if(node.value > d1 && node.value > d2){
          return lca(node.left);
      }else if(node.value < d1 && node.value < d2){
          return lca(node.right)
      }else{
          return node;
      }
  }

  printinrange(node , d1 ,  d2){
         if(node.value > d1  && node.value > d2){
             printinrange(node.left ,d1 ,d2);
         }else if(node.value < d1 && node.value < d2){
             printinrange(node.right ,d1 ,d2);
         }else{
             printinrange(node.left ,d1 ,d2)
             console.log(node);
             printinrange(node.right ,d1 ,d2)
         }
  }

}

let arr = [12, 25, 37, 50, 62, 75, 87];
let bst1 = new BST();
bst1.construction(arr);
//bst1.addsinglenode(36);
bst1.removenode(25);
