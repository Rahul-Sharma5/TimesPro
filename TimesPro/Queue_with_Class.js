let queue = [];
      let currentSize = queue.length;
      let maxSize = 5;

   class Queue{

   

        push_queue(newVal) {
        if (currentSize >= maxSize) {
          alert("Queue is already full");
        } else {
          queue[currentSize] = newVal;
          currentSize++;
        }
      }

       print() {
        console.warn(queue);
      }
       pop_queue() {
        if (currentSize > 0) {
          for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
          }
          currentSize--;
          queue.length = currentSize;
        } else {
          alert("queue is already empty");
        }
      }
    }

    let queue1 = new Queue();
    queue1.push_queue(50);
    queue1.push_queue(20);
    queue1.push_queue(80);
    queue1.push_queue(800);
    queue1.push_queue(890);
    queue1.pop_queue();
    queue1.pop_queue();
    

    queue1.print();