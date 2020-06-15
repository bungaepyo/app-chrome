
const clock = document.querySelector(".js-clock");

function getTime(){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const sec = currentDate.getSeconds();
    const time = `${hour < 10 ? `0${hour}` : hour}:
                ${min < 10 ? `0${min}`:min}:
                ${sec < 10 ? `0${sec}`:sec}`; 
    clock.innerHTML = time;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();