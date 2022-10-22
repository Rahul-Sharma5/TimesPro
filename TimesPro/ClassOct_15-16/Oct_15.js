// var truck = []; // array
var truck = { speed:120, wheel:4, color:'black'}; // object

document.write( truck.color);

let arr = [10,20,30,40,50];
let arr2 = [200,300,500];
document.write(arr.concat(arr2));

arr.push(90);
document.write("<br> New array" + arr);

// alert(arr.pop());
// document.write("<br> after pop" + arr);

console.log("First element" + arr.shift());
document.write("After shift" + arr);

console.log("After unshift" + arr.unshift(90));
document.write("<br> After unshift" + arr);

delete(arr[2]);
document.write("<br> After delete " + arr);  // [90,20,30,40,50]

arr.splice(1,2);
document.write("<br> After Splice" + arr); // [90,30,40,50]

arr.splice(1,1,23); // function overloading
document.write("<br> Modifire " + arr); // 90 23 40 50

array3 = [1,2,3,4,5,6];
document.write("<br> After slicing: "+array3.splice(1,2));

array3.map((array3) => {
    console.log(array3*2);
})

// Map Method //

// var ary = [11,4,9,16];

// var b = ary.map(test);
// document.write(b);

// function test(x){
//     return x * 10;
// }

array3.filter(greater);
function greater(n){
    if(n>3)
    console.log(n);
}

// old_array = ['i', 'love', 'java', 'script'];
// new_array = ['i', 'hate', 'coding', 'java', 'script'];

// old_array.splice(1,2, 'hate','coding');

// document.write(old_array);

try{
    document.write("<br> The lenght of an array is: " + array3.length()); // error
    document.write("I Love Coding! ");
}
catch(error){
    document.write(error);
}
// finally{
//     document.write("<br><br> I Love Coding! </br>");
// }

try{
    let arr = ['I', 'Love', 'Java'];
    for(let i=0; i<=3; i++)
    document.write(arr[i]);
    var result = 5/0;
    console.log(result);
}
catch(error){
    document.write("<br>" + error);
}
finally { console.log('no error');}


// Callback Function //

function display(value){
    document.write("<b> The value is: " + value +"</b>");
}

function add(num1, num2, mycallback){
    let result = num1+num2;
    mycallback(result);
}
add(10,90, display);


// synchronous asynchronous //
// setinterval // H.W //

// Promise Function //

let newpromise = new Promise((resolve, reject) =>{
    let x = 0;
    for(let i=0; i<5; i++)
    x++;

    if(x>5)
    resolve();
    else
    reject();
})

newpromise.then ( function(value){
    console.log("Resolve");
})
.catch( function(error){
    console.log("Rejected");
})

