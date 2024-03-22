const box=document.getElementsByClassName('box-1');
box.classList.add('fancy');
 //box.classList.remove('box-1');

const boxx=document.getElementById('box1');
let count=0;
const Coordinates=document.createElement('p');
document.body.append(Coordinates);

const logMessage = (obj) =>
{
    console.log('clicked',count++);
    // console.log(obj);
   // Coordinates.innerHTML=`$(obj.offsetX) $(obj.offsetY)`;
}

box.addEventListener('click', logMessage);
