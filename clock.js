let count=1;
let setTime = 
   setInterval(() => {
        
        if (count>0) 
           {
            

let currSeconds = new Date().getSeconds();
console.log(currSeconds);
let currMinutes = new Date().getMinutes();
console.log(currMinutes);
let currHours = new Date().getHours()%12;
console.log(currHours);


let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");


// hourHand.style.transform = 'transform rotate(0deg)';
// minuteHand.style.transform = 'transform rotate(0deg)';
// secondHand.style.transform = 'transform rotate(0deg)';
let hourDeg=((currHours*3600) + (currMinutes*60) + (currSeconds))/120;
console.log(hourDeg);
hourHand.style.transform = `rotate(${hourDeg}deg)`
let minuteDeg=((currMinutes*60) + (currSeconds))/10;
console.log(minuteDeg);
minuteHand.style.transform = `rotate(${minuteDeg}deg)`
let secondDeg=currSeconds*6;
console.log(secondDeg);
secondHand.style.transform = `rotate(${secondDeg}deg)`
           }

           else {
            clearInterval(interval);
           }

    }, 1000);


