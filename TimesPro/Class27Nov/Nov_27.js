// print the array elements on the browser window or console //
var arr = [12,90,80,98,67,5,10];

for(var i=0; i<arr.length; i++)
{
    document.write("<br>" +arr[i]);
}

//     2D Array   //
var arr2d = [[1,2,3],[4,5,6],[7,8,9]];

for(var i=0; i<arr2d.length; i++)
{
    for(var j=0;j<3;j++)
    {

        document.write(arr2d[i][j]+ "")
    }
    document.write("<br>");
}


//      Factorial    //
// n * (n-1) * (n-2) * (n-3) and so on 

function fact(n){
    var result = 1;
    for(var i=1; i<=n; i++)
    {
        result = i* result;
    }
    console.log("factorial is " + result);
}
var n = prompt("Enter a number");
fact(n);

// Recursion //

//5*4*3*2*1
/*  5* factorial(4) 5*24
     4* factorial(3) 4*6
        3* factorial(2) 3*2
           2* factorial(1) 2*1
              1* factorial(0) 1*1 */

function factorial(n){
    if(n==0)
    return 1;
    else{
        return n* factorial(n-1);
    }
}

var n = prompt("Enter a number");
console.log("Factorial using recursion is: "+ factorial(n));


// Fibonnaci series //
// 0 1 1 2 3 5 8 13 21 34
// find the sum of first n number in fibonnaci series
// print the first n fibonnaci numbers

/* t1 = 0, t2 = 1
       t3 = t2+t1 
           t4 = t3+t2 
               t5 = t4+t3  */

/* var m = prompt("Enter a number");
console.log("Sum of first " +m+" number :"+ fibo(m));
//fibo(0) fibo(1) fibo(2)
for(var j=0; j<=m; j++)
{
    var term = fibo(j);
    console.log(term);
} */

//   prime number    // 




