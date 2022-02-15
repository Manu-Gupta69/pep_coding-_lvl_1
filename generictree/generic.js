// Iterative preorder postorder


//--- PSEUDO CODE ---

let callstack = [];

function traverse() {
    stack.push(root);
  while (stack.length > 0) {
    let top = stack.peek();
    // check if node is preorder or postorder
    if (top.state == -1) {
      // preorder
      top.state += 1;
    } else if (top.state == top.children.length) {
      // postorder
      stack.pop();
    } else {
      // continue traversing its children
      stack.push(node ,'->', top.children[state] , -1);
      top.state ++;
    }
  }
}

