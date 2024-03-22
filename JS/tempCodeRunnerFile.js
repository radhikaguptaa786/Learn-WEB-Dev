function bookseat()
{
   setTimeout(()=>{ const seat='B2';
    const Name='Radhika';
    const Payment=1555;
    selectseat(seat)
      .then((seat)=>{
        enterdetails(Name,seat);
      })
    .then((details)=>{
        Paymentforseat(Name,seat,Payment);
    })},2000)
    
}

function selectseat(seat)
{
    return new Promise((res,rej)=>{
   setTimeout(()=>{ console.log('seat confirmed',seat);
    res(`confirmed ${seat}`);}
    )}
    ,2000)
}
function enterdetails(Name,seat)
{
    return new Promise((res,rej)=>{
   setTimeout(()=>{ console.log('Name- ',Name, 'seat - ',seat);
    res(`confirmed- ${Name} ${seat}`);}
    ,2000)}
    )
}
function Paymentforseat(Name,seat,Payment)
{
    return new Promise((res,rej)=>{
   setTimeout(()=>{ console.log('Name- ',Name, 'seat - ',seat,'Payment- ',Payment);
    res(`Payment Done- ${Name} ${seat} ${Payment}`);}
    )}
    ,4000)
}

bookseat();
