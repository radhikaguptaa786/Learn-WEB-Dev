async function  fetchdata()
{
    try{
        const response =await fetch('https://dummyjson.com/products/1');
        console.log(response);
        const jsondata=response.json();
        console.log(jsondata);

        const dummy_data=document.getElementById('dummydata');
        dummy_data.innerHTML=jsondata.title;
    }catch(err){
        console.log(err);
    };

}