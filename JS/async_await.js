 async function bookseat()
{
    const seat='B2';
    const Name='Radhika';
    const Payment=1555;
   try{
        const select=await selectseat(seat);
        console.log('confirmed ',select);
        const name=await enterdetails(Name,seat);
        console.log('confirmed ',name , 'seat',select);
        const pay=await Paymentforseat(Name,seat,Payment);
        console.log('confirmed ',name ,'seat- ',select, 'Payment- ',pay);
   }catch(e)
   {
    console.log(e);
   }
}

 async function selectseat(seat)
{
    return new Promise((res,rej)=>{
   setTimeout(()=>{ 
    res(`confirmed ${seat}`);}
    )}
    ,2000)
}
async function enterdetails(Name,seat)
{
    return new Promise((res,rej)=>{
   setTimeout(()=>{ 
    res(`confirmed- ${Name} ${seat}`);}
    ,2000)}
    )
}
async function Paymentforseat(Name,seat,Payment)
{
    return new Promise((res,rej)=>{
   setTimeout(()=>{ 
    res(`Payment Done- ${Name} ${seat} ${Payment}`);}
    )}
    ,4000)
}

bookseat();
