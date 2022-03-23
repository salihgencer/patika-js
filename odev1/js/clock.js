"use strict"

const myName =  document.getElementById("myName");
const myClock =  document.getElementById("myClock");
const person = prompt("Please enter your name", "");

if (person != null) {
    myName.innerHTML = person;
}
function showTime(){
    getTimeAndDay();
    setInterval(function(){
        getTimeAndDay();
    }, 1000);
}

function getTimeAndDay(){
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const day =  today.toLocaleDateString("tr-TR", { weekday: 'long' });    
    myClock.innerHTML = time+" "+day;
}