// synchronous asynchronous //
// alert("Welcome to Js");
// alert("Welcome to TimesPro");

// document.write("<h1> I am happy when i code</h1>");

async function print(){ // return a Promise
    document.write("<h1>I am happy when i code</h1>");
    // return Promise.resolve("Hello");
}

print().then(function(value){
    console.log("hello");
}).catch(function(error){
    console.log(error);
})

function change(){
    document.getElementById('div1').innerHTML="CSS";
    document.getElementById('div1').style.backgroundColor = 'black';
}

let element = document.getElementsByClassName('para1');
console.log(element);
// element[0].onclick=alert('hello');

document.write("Screen height" + screen.height +"<br>")

// function printpara(){
    document.getElementsByClassName('para1').innerHTML='JavaScript';
// }

function print(){
    let par1=document.createElement('p');
    par1.innerHTML="I Love Java";
    par1.style.backgroundColor="aqua";
    document.body.appendChild(par1);
    // document.append;
}

















// Alert popup Browser Objetc Model//

// alert('hello');
// prompt('Enter number');
// confirm('Do you wish to click');

