// Described in documentation
import flatpickr from "flatpickr";
// Additional styles import
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateSelect = document.querySelector("input");
const startBtn = document.querySelector("button");
const digitzContr = document.querySelector(".timer");
const digitzItem = document.querySelectorAll(".field");
const digitz = document.querySelectorAll(".value");
const digitzLabel = document.querySelectorAll(".label");
let ms;




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        //console.log(selectedDates[0]);
        
    },
};

startBtn.disabled = true;

const selectedDate = flatpickr(dateSelect, options);

//console.log(options.defaultDate);

const todaysDate = options.defaultDate;



selectedDate.config.onClose.push(function (selectedDates, dateStr, selectedDate) { 

    if (selectedDate.selectedDates[0] < todaysDate) {

        //alert("Please choose a date in the future");
        Notiflix.Notify.warning('Please choose a date in the future');
        
    }

    else if (selectedDate.selectedDates[0] > todaysDate) {
        
        startBtn.disabled = false;
        
    }

    ms = Math.floor((selectedDate.selectedDates[0] - todaysDate));


});


//console.log(selectedDate.selectedDates[0]);

//console.log(options.onClose());



digitzContr.style.display = "flex";

for (let i = 0; i < digitzItem.length; i++) {


    digitzItem[i].style.display = "flex";
    digitzItem[i].style.flexDirection = "column";
    digitzItem[i].style.alignItems = "center";
    
    if (i < digitzItem.length - 1) {
        digitzItem[i].style.marginRight = "5px";
    }

    if (i != 0) {
        digitzItem[i].style.marginLeft = "5px"
    }


}


for (let i = 0; i < digitz.length; i++) { 

    digitz[i].style.fontSize = "30px";
    

}

for (let i = 0; i < digitzLabel.length; i++) {

    digitzLabel[i].style.fontSize = "15px";
    digitzLabel[i].style.fontWeight = 700;
    
}





for (let i = 0; i < digitzItem.length; i++) {

    

    if (i < digitzItem.length - 1) {

        const coln = document.createElement('span');
        //const containr = document.createElement('span');
        coln.textContent = ":";
        coln.style.fontWeight = 700;
        digitzItem[i].after(coln);
        coln.style.marginTop = "10px"

        /*digitzItem[i].prepend(containr);
        containr.append(coln);
        //containr.append(digitz);
        containr.appendChild(digitz[i]);
        containr.style.display = "flex";
        digitz[i].style.paddingLeft = "20px"*/
        
    }


}




function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {

    //console.log(ms);
const timer = setInterval(() => {
      
    
    const remTime = convertMs(ms);

    //console.log(remTime.seconds);

    function addLeadingZero(value) {

        return value.toString().padStart(2, '0');
    }

    digitz[0].textContent = addLeadingZero(remTime.days);
    digitz[1].textContent = addLeadingZero(remTime.hours);
    digitz[2].textContent = addLeadingZero(remTime.minutes);
    digitz[3].textContent = addLeadingZero(remTime.seconds);

    ms = ms - 1000; 
    console.log(ms);

    if (ms < 0) {
        clearInterval(timer);
        console.log('Time is up');
    }
   
}, 1000);

});

