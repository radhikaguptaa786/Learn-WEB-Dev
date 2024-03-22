
console.log('ordering burger');
// for(var i=0;i<500000;i++)
// {
//     i=i*878757;
// }
// function greet()
// {
//     console.log('Hello Greet');
// }
function greet(name)
{
    console.log('Hello',name);
}
console.log('Before greet' );
// setTimeout(greet,2000);  //greet will execute after 2s
// setTimeout(greet,2000,'Radhika');
const timeoutId=setTimeout(greet,2000,'Radhika');
clearTimeout(timeoutId);
console.log('This is written after greet');

//setinterval
const intervalid=setInterval(increasecount,1000);
let count=0;
function increasecount()
{
    count++;
    const date=new Date().toTimeString();
    console.log(date);
    if(count==5)
        clearInterval(intervalid);
}
for(var i=0;i<3;i++)
console.log('another work',i);

//CallBacks
 
function orderpizza(myfunction)
{
    bakepizza((pizza) => {
        myfunction(pizza);//callback
    });
}

function bakepizza(callback)
{
    setTimeout(()=> {
        const pizza='🍕';
        console.log('baked the ',pizza);
        callback(pizza);  //callback    
    },2000)
}
function notification(pizza)
{
    console.log(pizza,'pizza is ready');
}
 orderpizza(notification); 