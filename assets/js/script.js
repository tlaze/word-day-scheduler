var todaysDate = $('#currentDay');
var hourSlot = $('textarea');
var time = moment().format('H');
var hour = $(".hour").text().trim();
var inputButton = $('.saveBtn');
var ex = $('9');

var savedInputs = new Array();


//Loops through each hour
//Color changes dynamically based on the time of day

hourSlot.each(function(i){

    if(time === i+9){
        $(this).addClass('present');
    }
    else if(time > i+9){
        $(this).addClass('past');
    }
    else if(time < i+9){
        $(this).addClass('future');
    }
    else{
        console.log("Time does not exist");
    }
});


inputButton.click('click', saveEntry);


//Uses moment.js to display time
function displayTime(){
    var rightNow = moment().format('dddd MMM Do YYYY');
    todaysDate.text(rightNow);
}

function saveEntry(){
    console.log("click");
    // deleteEntry();
    // getStoredEntries();


    savedInputs.push({
        entry: $('#9').val().trim(),
        entry: $('#10').val().trim(),
        entry: $('#11').val().trim(),
        entry: $('#12').val().trim(),
        entry: $('#13').val().trim(),
        entry: $('#14').val().trim(),
        entry: $('#15').val().trim(),
        entry: $('#16').val().trim(),
        entry: $('#17').val().trim(),
    });
    localStorage.setItem('Event', JSON.stringify(savedInputs));
    console.log(localStorage);


}
function deleteEntry(){
    localStorage.clear();
}

function getStoredEntries(){
    var entry = localStorage.getItem('Event');
    if(entry != null){
        savedInputs = JSON.parse(entry);
    }
}
 
displayTime();
