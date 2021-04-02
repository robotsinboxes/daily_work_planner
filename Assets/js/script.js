var timeBlock = $('.time-block')
var row = $('.row');
var am9 = $('.am9');
var am10 = $('.am10');
var am11 = $('.am11');
var pm12 = $('.pm12');
var pm1 = $('.pm1');
var pm2 = $('.pm2');
var pm3 = $('.pm3');
var pm4 = $('.pm4');
var pm5 = $('.pm5');
var input = $('.input');
var saveBtn = $('.save');
var save1 = $('#save1');
var saveData;

// set the current day and date to display in jumbotron
var currentDay = moment().format('dddd, MMM Do');
$("#currentDay").text(currentDay);
console.log(currentDay);
// storing timestamp in timeLine for comparison
var timeLine = moment().format()

save1.onclick(function(event) {
    event.preventDefault();
    var newEvent = document.querySelector('input').value;
    localStorage.setItem("newEvent", newEvent);
    renderEvent()
})

function renderEvent() {
    var newEvent = localStorage.getItem("newEvent");
    input.textContent = newEvent;

}

        
         
