var second = document.querySelector("#second");
var minute = document.querySelector("#minute");
var hour = document.querySelector("#hour");

function tikTak(){
    var sec = new Date().getSeconds();
    var min = new Date().getMinutes();
    var hours = new Date().getHours();

    second.style.transform = `rotate(${180 + (sec * 6)}deg)`;
    minute.style.transform = `rotate(${180 + (min * 6)}deg)`;
    hour.style.transform = `rotate(${180 + (hours * 30)}deg)`;
}
setInterval(tikTak,1000)