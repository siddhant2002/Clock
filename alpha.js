const second = document.querySelector('.second-hand');
const minute = document.querySelector('.minute-hand');
const hour = document.querySelector('.hour-hand');
function setDate()
{
    const date =new Date();
    const sec = date.getSeconds();
    const rot = ((sec/60) * 360)+90;
    second.style.transform = `rotate(${rot}deg)`

    const min = date.getMinutes();
    const rot1 = ((min/60) * 360) + ((sec/60) * 6) + 90;
    minute.style.transform = `rotate(${rot1}deg)`

    const hr = date.getHours();
    const rot2 = ((hr/12) * 360) + ((min/60) * 30) + 90;
    hour.style.transform = `rotate(${rot2}deg)`
}
setInterval(setDate,1000);