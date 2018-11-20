class item{
    constructor(value,next){
      
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
      this.tail = null;
    }
    
    addToHead(value){
      var node = new item(value,null);
      if(this.head) {
        node.next = this.head
      }
      else this.tail = node;
      this.head = node;
      
    }
    
    addToTail(value){
      var node = new item(value,null);
      if(this.tail) this.tail.next = node;
      else this.head = node;
      this.tail =node;
    }
    
    display(){
      if(!this.head) return null;
      // console.log(this.head.value);
      // console.log(this.tail.value);
      var current = this.head;
      while(current){
        console.log("-->"+current.value);
        current = current.next;
      }
    }
  }
  
  
  const list = new LinkedList();
  
  list.addToHead(1)
  list.addToHead(2)
  list.addToHead(3)
  list.addToHead(4)
  list.addToHead(5)
  
  list.addToTail(8);
  list.addToHead(125)
  list.addToTail(22);
  list.display();