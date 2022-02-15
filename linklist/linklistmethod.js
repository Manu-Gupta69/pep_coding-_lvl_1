class List {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(node){
       if(!this.head){
           this.head = node;
           this.tail = node;
       }
       else{
           this.tail.next = node;
           this.tail = node;
       }
       this.length++;
    }
    pop(){
      if(!this.head) return undefined;
     let current = this.head;
     let prev = current;
     if(this.length == 1) {
         this.head = null;
         this.tail = null;
     }
     while(current.next !== null){
         prev = current;
        current = current.next;
     }
     let oldtail = this.tail;
      prev.next = null;
      this.tail = prev;
      this.length --;
      return oldtail;
    }
    print(){
        let current = this.head;
        let arr =[]
        while(current!== null){
            arr.push(current.value , '->');
            current = current.next;
        }
        console.log(...arr);
    }
    get(pos){
        let current = this.head;
        let currentpos = 0;
        while(currentpos !== pos && current !== null){
            current = current.next;
            currentpos++;
        }
         return current;
        }
    insert(pos , num ){
           let node = new Node(num);
           if(pos == this.length) {
               this.push(node);
               return;
           }
           else if(pos == 0){
               this.unshift(num);
               return;
           }
        let nodeatprev = this.get(pos-1);
        let tempnext = nodeatprev.next;
        nodeatprev.next = node;
        node.next =  tempnext
        this.length ++;
    }
    shift(){
        if(this.head == null) {
            console.log('empty');
            return undefined;
        }
        // if(this.length === 1){
        //      let oldtail = this.pop();
        //     this.tail = null;
        //     return oldtail;
        // }
            let oldhead = this.head;
           let newhead = this.head.next;
           this.head.next = null;
           this.head = newhead;
           this.tail = null;
           this.length --;
           return oldhead;
    }
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.push(node)
            return;
        }
        let oldhead = this.head;
        node.next = oldhead;
        this.head = node;
        this.length++;
        return;
    }

    remove(pos){
        if(pos < 0 || pos >= this.length) return undefined;
        if(pos == 0) {
             this.shift();
             return;
        }
        else if(pos === this.length-1) {
            this.pop();
            return;
        }
         let prev = this.get(pos  - 1);
         prev.next = prev.next.next;
         this.length --;
    }
    reverse(){
        let prev = null;
        let current  = this.head;
        this.tail = current;
        let next = current.next;
        while(current !== null){
            next = current.next;
            current.next= prev;
            prev = current;
            current = next;
        }
        this.head = prev;

    }

}
class Node{
    constructor(value){
        this.value  = value;
        this.next = null;
    }
}
let list1 = new List();
let list2 = new List();
list1.push(new Node(11));
list1.push(new Node(19));
list1.push(new Node(15));
list1.push(new Node(14));


list2.push(new Node(21));
list2.push(new Node(22));
list2.push(new Node(23));
list2.push(new Node(24));
list2.push(new Node(25));

list1.print();
// list2.print();

//mergetwolinklist(list1 ,  list2);
function Kthele(list ,  k){
  let slow = list.head;
  let fast = list.head;
  for(let i=0 ; i<k ;i++){
      fast = fast.next;
  }
  while(fast !== null){
      slow = slow.next;
      fast = fast.next;
  }
  console.log(fast)
  console.log(slow);
}

function mid(list){
 let fast = list.head;
 let slow = list.head;
 while(fast.next !== null  && fast.next.next !== null){
     fast = fast.next.next;
     slow = slow.next;
 }
 console.log(fast , slow);
}

function mergetwolinklist(l1 , l2){
 let mergedlist = new List();
 let l1start = l1.head;
 let l2start = l2.head;
 while(l1start !== null && l2start !== null){
     if(l1start.value < l2start.value){
         mergedlist.push(l1start);
         l1start = l1start.next
     }else{
         mergedlist.push(l2start);
         l2start = l2start.next;
     }
    
 }

 while(l1start !== null){
     mergedlist.push(l1start);
     l1start = l1start.next;
 }
 
 while(l2start !== null){
    mergedlist.push(l2start);
    l2start = l2start.next;
}
  return mergedlist;
}

function mergesort(head , tail){
    if(head === tail){
        let newsinglelist = new List();
        let newnode = new Node(head.value);
        newsinglelist.push(newnode);
       // console.log(newsinglelist);
        return newsinglelist;
    }
let mid = midpoint(head , tail);
let left = mergesort(head , mid )
let right = mergesort(mid.next , tail )
//console.log('left-->' , left , 'right--->' , right);

return mergetwolinklist(left , right);
}
function midpoint(start , end){
    let slow = start;
    let fast = start;
    while(fast != end && fast.next != end ){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// let sortedlist = mergesort(list1.head , list1.tail);
// sortedlist.print();
let list3 = new List();
list3.push(new Node(1));
list3.push(new Node(1));
list3.push(new Node(2));

list3.print();


removeduplicates(list3);


function removeduplicates(list){
    let current = list.head;
    while(current !== null ){
        if(current.next !== null  && current.value === current.next.value){
            let nestedcurrent = current.next;
           while(nestedcurrent != null && nestedcurrent.value == current.value ){
               nestedcurrent = nestedcurrent.next;
           }
           current.next = nestedcurrent;
           current = nestedcurrent;
        }else{
            current = current.next;
        }
    }
    list.print();

}

// //  ----------  ODD EVEN LINK LIST -------------


// let list4 = new List();
// list4.push(new Node(1));
// list4.push(new Node(1));
// list4.push(new Node(2));
// list4.push(new Node(3));
// list4.push(new Node(4));
// list4.push(new Node(3));
// list4.push(new Node(5));
// list4.print();


// //oddeven(list4);
// function oddeven (list){
//        let current = list.head;
//        let odd = new List();
//        let even = new List();
       
//        while(current!== null){
//             current = current.next;
//            let node = list.shift();
//            console.log(node);
//            if(node.value % 2 == 0){
//                even.push(node);
//            }else{
//                odd.push(node)
//            }
//        }
//        odd.tail.next = even.head;
//        odd.tail = even.tail;
//        console.log(odd.print())
// }

// // REVERSE LINKLIST WITH RECURSION 


// let list5 = new List();
// list5.push(new Node(1));
// list5.push(new Node(2));
// list5.push(new Node(3));
// list5.push(new Node(4));
// list5.push(new Node(5));
// list5.print();

// function reverse(list) {
//     let node = list.head;
//     let prev = null;
//     list.head = list.tail;
//     list.tail = node;
//     function reverserecursion(node , prev){
//         if(node == null){
//             return;
//         }
//          let nextnode = node.next;
//          node.next = prev;
//          prev = node;
//          return reverserecursion(nextnode , prev);
//     }
//  reverserecursion(node , prev);
//  list.print();
// }
// //reverse(list5);

// // reverse PART 2

// function reversepart2(list) {
//     let node = list.head;
//     let foward = list.head;
//     function reverserecursionpart2(node , mid){
//         if(node == null){
//             return;
//         }
//         reverserecursionpart2(node.next , mid+1);
        
//         if(mid >= Math.floor(list.length  / 2 )){
//             let temp = node.value;
//             node.value = foward.value;
//             foward.value = temp;
//             foward = foward.next;
//         }

//     }
//  reverserecursionpart2(node , 0);
//  list.print();
// }
// //reversepart2(list5);


// //-------- REVERSE PART 3 RECURSION ----------

// function reversepart3(list) {
//     let node = list.head;
//     function reverserecursionpart3(node){
//         if(node == list.tail){
//             let temp = list.head;
//               list.head = list.tail;
//               list.tail = temp;
//             return ;
//         }
//        reverserecursionpart3(node.next);
//             node.next.next = node;
//     }
//  reverserecursionpart3(node);
//   list.tail.next = null;
//  list.print();
// }

// //reversepart3(list5)


// //------ LINKLIST PALINDROMe ------


// let list6 = new List();
// list6.push(new Node('m'));
// list6.push(new Node('a'));
// list6.push(new Node('d'));
// list6.push(new Node('a'));
// list6.push(new Node('m'));
// list6.push(new Node('m'));
// list6.print();

// checkpalindrome(list6)

// function checkpalindrome(list) {
//     let node = list.head;
//     let foward = list.head;
//     function palindrome(node){
//          if(node == null){
//               return true;
//          }
//        let prevres = palindrome(node.next);
//        if(!prevres){
//            return false;
//        }
//        else if(foward.value !== node.value){
//            return false
//        }
//        foward = foward.next
//        return true;
//     }
//  let ans = palindrome(node , foward);
//   console.log(ans);
// }


