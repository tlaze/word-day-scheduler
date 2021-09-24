var todaysDate = $('#currentDay');
var hourSlot = $('textarea');
var time = moment().format('H');
var hour = $(".hour").text().trim();


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


//Uses moment.js to display time
function displayTime(){
    var rightNow = moment().format('dddd MMM Do YYYY');
    todaysDate.text(rightNow);
}

function saveEntry(){
    // localStorage.setItem('userInputs', hourSlot.val());
}



    
displayTime();
