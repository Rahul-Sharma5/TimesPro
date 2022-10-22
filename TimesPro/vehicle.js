// Creating a class & Object of the class
// encapsulation & abstraction & inheritance
class Vehicle{
    constructor(type, color, speed){
this.type= type;
this.color=color;
this.speed=speed;
    }
increment_speed(){
    return (this.speed+=10);
}
print(){
    document.write('<br> speed is' + this.increment_speed()+'<br>Type is'+this.type);
}
}
// Class Definition ends


let auto = new Vehicle('3 wheeler', 'Black', 50);
auto.print();

let bike = new Vehicle('2 wheeler', 'Red', 100);
bike.print();

// console.log(type); // reference error

class Car extends Vehicle{
    constructor(type, color, speed, engine)
    {
        super(type, color, speed);
        this.engine=engine;
    }
    print(){
        super.print();
        document.write("<br>"+this.engine);
    }
}
let hondacity = new Car('4-Wheel', 'white',120, 'superfast');
hondacity.print();
var arathy;
document.write(arathy);