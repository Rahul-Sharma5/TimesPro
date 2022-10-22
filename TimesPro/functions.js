// function display() {} //declaration

// function display()
// {
//     var a = parseInt(prompt("Enter First Number"));
//     var b =parseInt(prompt("Enter second Number"));
//     document.write("<h1> The addition is:"+(a+b)+" </h1>");
// }

// display(); // invoking a function or function call

function subtract(a,b) //parameters
{
    document.write("Subtraction is: "+(a-b));
}
subtract(90,70);

let output = () =>{
    var a = parseInt(prompt("Enter First Number"));
    var b =parseInt(prompt("Enter second Number"));

    return (a+b);
}
console.log("Addition is" +output());