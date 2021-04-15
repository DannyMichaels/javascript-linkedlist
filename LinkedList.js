class Node {
  constructor(value) {
    // A NODE HAS A VALUE
    // A NODE HAS A POINTER
    // POINTING TO THE  NEXT NODE
    this.value = value;
    this.next = null;
  }

  get Next() {
    return this.next;
  }

  set Next(next) {
    this.next = next;
  }

  get Value() {
    return this.value;
  }

  set Value(value) {
    this.value = value;
  }
}

// let sponge = new Node('sponge')
// console.log({sponge})
// let bob = new Node("bob");
// bob.Next = bob
// console.log({bob})

//  constructing singly LinkedList.
class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = this.head === null ? 0 : 1;
  }

  insert(value, position) {
    let node = new Node(value);

    //  insert front
    if (!this.head) {
      this.head = node;
      return;
    } else if (position === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let temp = this.head;
    let targetPos = 0;

    // insert last

    while (temp.next !== null && targetPos < position) {
      temp = temp.next;
      targetPos++;

      // console.log(`position: ${position}`);
      // console.log(`target: ${targetPos}`);
      // console.log(`tempVal: ${temp.value}`);
    }

    node.next = temp.next;
    temp.next = node;

    this.size += 1;
  }

  //  delete by value
  delete(value) {
    if (this.head === null) return;

    // start
    if (value === this.head.value) {
      /* steps:
      -  initial state: head === a -> b -> c
      -  delete a
      -  make head point to b
      - next state: head === b -> c */

      this.head = this.head.next; // now head equals to b, a is nothing.

      return;
    }

    // middle and end
    // head === a -> b -> c -> d -> Null

    let currentNode = this.head; // this.head is a node
    // arr = [0 ,1 , 2 ,3 , 4, 64]
    /*  
    let i = 0;
     while (arr[i] !== 4) {
      i++
     }
    */

    // if value is c.
    // currentNode = a. a.next.value === b.

    while (currentNode.next.value !== value) {
      // currentNode = b;
      currentNode = currentNode.next;
    }
    /*  b.next = d || currentNode.next = d */
    // we deleted c.
    currentNode.next = currentNode.next.next;
  }

  // size
  getSize() {
    return this.size;
  }

  // print
  print() {
    let temp = this.head;
    let i = 0;
    // while (temp !== null) {
    //   console.log(temp);
    //   temp = temp.next;
    // }

    while (temp !== null) {
      console.log(`${i}: ${temp.value}`);
      temp = temp.next;
      i++;
    }
  }
}

let ll = new LinkedList();
ll.insert('a', 0);
ll.insert('b', 1);
ll.insert('c', 2);
ll.insert('d', 3);
ll.insert('e', 4);
ll.insert('h', 5);
ll.insert(['1', '2'], 6);
ll.insert(JSON.stringify({ name: 'daniel', age: 21 }), 7);
ll.insert('5', 100);
ll.insert('4', 66);
ll.insert([...new Array(6).keys()], 67);
ll.print();
ll.delete('4');
ll.delete('a');

ll.print();
