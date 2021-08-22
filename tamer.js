let counterTicks = prompt('Сколько по времени')
let clicks = 0;
let money = 109990;
let sum = 0;
let timer1 = setInterval(function(){myTimer()},1000);
function myTimer()
{
document.getElementById("displayTime").innerHTML="Timer:"+counterTicks;

if(counterTicks<=0){
window.clearInterval(timer1);
alert("Всего куплено 13 iphone - "+clicks +" "+  "с вас:" + " " +sum + "рублей");
}
counterTicks--;
}
