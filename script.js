"use strict";
function digitalClock() {
    // initializing days array coz getDay method returns in array indexing
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    //initializing months array
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // getting elements from html
    let hrs = document.getElementById("hours");
    let mins = document.getElementById("minutes");
    let secs = document.getElementById("seconds");
    let period = document.getElementById("ampm");
    let day = document.getElementById("dd");
    let date = document.getElementById("dt");
    let time = new Date(); // making new Date instance
    // getting current hours,mins,secs,ampmk,day,date
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm;
    let d = time.getDay();
    // getting for date format
    let dt = time.getDate();
    let year = time.getFullYear();
    let month = time.getMonth(); // month was made 0 based index
    // setting date format
    const formatedDate = `${months[month]} ${dt} ${year}`;
    //function to convert 24 hrs time to 12 hrs time
    function getFormatedTime(h) {
        if (h == 0) {
            h = 12;
            return "AM";
        }
        else if (h < 12) {
            return "AM";
        }
        else if (h == 12) {
            return "PM";
        }
        else {
            h - 12;
            return " PM";
        }
    }
    ;
    ampm = getFormatedTime(h);
    // logic for if number is less than 10
    h < 10 ? h = "0" + h : h;
    m < 10 ? m = "0" + m : m;
    s < 10 ? s = "0" + s : s;
    //logic for day & date
    d = days[d]; //passing day in array
    // randering h, m, s, & period on browser
    hrs.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = d;
    date.innerHTML = formatedDate;
}
;
// logic for button
let button = document.getElementById("btn");
let clock = document.querySelector(".digitalClock");
let body = document.querySelector("body");
let currMode = "light"; //curr mode
// making colors
let white = "ghostwhite";
let black = "rgba(0, 0, 0, 0.9)";
// shadow colors
let shadowBlack = "0 0 6px 9px rgba(1, 1, 0.5, 0.5)";
let shadowBlue = "0 0 5px 8px rgba(22 ,77 ,225, 0.5)";
// event listener
button.addEventListener("click", () => {
    if (currMode === "light") {
        body.style.backgroundColor = black;
        clock.style.boxShadow = shadowBlue;
        button.style.color = "white";
        currMode = "dark"; // changing mode
    }
    else {
        body.style.backgroundColor = white;
        clock.style.boxShadow = shadowBlack;
        button.style.color = "black";
        currMode = "light";
    }
    ;
});
setInterval(() => digitalClock(), 1000); // calling the clock func after every 1 sec
