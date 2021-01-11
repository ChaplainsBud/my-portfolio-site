
class Node{
    constructor(val, next = null){
      this.val = val,
      this.next = next 
    }
  }
  
  class LinkedList{
    constructor(head = null){
      this.head = head
    }
  }

let arr2 = [1,2,3];

function arrayToLinkedList(arr){
  
  // loop through the array while creating nodes with the element's value
  
  //I. Create the nodes
  // 1. new Node(arr[0])
  // 2. new Node(arr[1])
  // 3. new Node(arr[2]);
  let nodeArray = [];
  
  for(let i = 0; i < arr.length; i++){
    let x = new Node(arr[i]);
    nodeArray.push(x);
  }
  
  // II. Link the nodes   x.next = y; y.next = z ... 
  
  // nodeArray[0].next = nodeArray[1];
  // nodeArray[1].next = nodeArray[2];
  
  let i = 0;
  while(i < nodeArray.length){
    nodeArray[i].next = nodeArray[i+1];
    i++;
  }
  
  // III. Create the Linked List and add the last one 
  return nodeArray[0];
 
}

console.log(arrayToLinkedList(arr2));