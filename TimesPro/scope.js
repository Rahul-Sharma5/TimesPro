let a = 90; //global variable

for(let i=0; i<4; i++) // i is a local variable
{
    a+=i;
    document.write("<br>"+a);
}

console.log("value of a is: "+a);
// console.log(i);

var j;
var b; //hoisting
j=1;
while(j<4)
{
    b=100;
    document.write("<br>"+b);
    j++;
}
