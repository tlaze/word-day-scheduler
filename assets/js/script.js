var todaysDate = $('#currentDay');
var hourSlot = $('textarea');
var time = moment().format('H');



function displayTime(){
    var rightNow = moment().format('dddd MMM Do YYYY');
    todaysDate.text(rightNow);
}

var hour = $(".hour").text().trim();

//Loops through each hour
//If color changes based on the tim
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


})
    


displayTime();
