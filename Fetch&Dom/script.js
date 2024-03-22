//promise
// const response=fetch('https://dummyjson.com/products/1')
// .then((response) => {

// })
// .catch(err => {

// })

async function fetchdata() {
    try{

        const loading=document.getElementById('loading');
        const phoneBox=document.getElementById('box');

        phoneBox.style.display='none';
        loading.style.display='block';
        
        const response=await fetch('https://dummyjson.com/products/1');   //fetching api
        console.log(response);
        const jsondata= await response.json();   //accessing json function
        console.log(jsondata);
    
        phoneBox.style.display='block';
        loading.style.display='none';
       loaddata(jsondata);   //function call to loaddata

    }
   catch(err)
   {
    console.log(err);
   }

}
function loaddata(jsondata)
{
    const phoneTextElement=document.getElementById('phone-title');
    const phoneDiscElement=document.getElementById('phone-desc');
    const phoneImg=document.getElementById('phone-img');

    phoneTextElement.innerHTML=jsondata.title;
    phoneDiscElement.innerHTML=jsondata.description;
    phoneImg.src=jsondata.thumbnail;

}

fetchdata();