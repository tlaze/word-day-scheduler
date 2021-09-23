var todaysDate = $('#currentDay');



function displayTime(){
    var rightNow = moment().format('dddd MMM Do YYYY');
    todaysDate.text(rightNow);
}


displayTime();