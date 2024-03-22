function multiply(a,b)
{
    return a*b;
}
// console.log(multiply(3,5));

const log={
    // waning is a key and value is a function
    warning:(info) =>{
        console.log("Warning" , info);
    },
    error: (info) => {
        console.log("Error" , info);
    }
}
module.exports={multiply,log};