function print()
{
    // document.write("wish you all a <br>");
    let myp = new Promise(function(resolve, reject)
    {
        resolve("success");
        reject("fail");
    });
    myp.then((value) =>
    {
        console.log('success')
    }).catch((error) =>{
        console.log('fail')
        return myp;
    })
}
async function demo()
{
    await print();
}
demo();