/* let stack = [];  // empty array
var top;
top = -1;
stack.push(10);
top++;
stack.push(20);
top++;
// delete stack[20];
console.log("Popped element: "+stack.pop());
top--;

stack.forEach(element =>{
    document.write("<br>" + element);
});

console.log("value of to: " +top); */

class Stack{  // LIFO (last in first out)//
    constructor(arr, top){
        this.arr=arr;
        this.top=-top;
    }
    print(){
        this.arr.forEach(element => {
            document.write("<br>" +element);
        });
        document.write("<br>top is: "+this.top);
    }
    push_stack(num)
    {
        this.arr.push(num);
        this.top++;
    }    
    pop_stack()
    {
            console.log("Popped element : " + this.arr.pop());
            this.top--;
        }
    }

let new_stack = new Stack([2,3], 1);
new_stack.push_stack(20);
new_stack.push_stack(40);
new_stack.print();
new_stack.pop_stack();
document.write("After pop : ");
new_stack.print();
