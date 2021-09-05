const clock = document.querySelector("#clock");

function getTime() {
    let time= new Date();
    let hour = String(time.getHours()).padStart(2, '0');
    let minute = String(time.getMinutes()).padStart(2, '0');
    let second = String(time.getSeconds()).padStart(2, '0');
    clock.innerText = `${hour} : ${minute} : ${second}`;
}
getTime();
setInterval(getTime, 1000);