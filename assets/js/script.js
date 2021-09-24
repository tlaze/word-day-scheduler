var todaysDate = $('#currentDay');
var hourSlot = $('textarea');
var time = moment().format('HH');

$(".row-1 .hour").val(localStorage.getItem("1"));
$(".row-2 .hour").val(localStorage.getItem("2"));
$(".row-3 .hour").val(localStorage.getItem("3"));
$(".row-4 .hour").val(localStorage.getItem("4"));
$(".row-5 .hour").val(localStorage.getItem("5"));
$(".row-6 .hour").val(localStorage.getItem("6"));
$(".row-7 .hour").val(localStorage.getItem("7"));
$(".row-8 .hour").val(localStorage.getItem("8"));
$(".row-9 .hour").val(localStorage.getItem("9"));

//Loops through each hour
//Color changes dynamically based on the time of day

console.log(time);
hourSlot.each(function(i){
    console.log(i);
    console.log(this);
    if(time > i+9){
        $(this).addClass('past');
    }
    if(time === i+9){
        $(this).addClass('present');
    }
    if(time < i+9){
        $(this).addClass('future');
    }
});


//Uses moment.js to display time
function displayTime(){
    var rightNow = moment().format('dddd MMM Do YYYY');
    todaysDate.text(rightNow);
}


$('.saveBtn').click(function(event){
    event.preventDefault();
    var entryTime = $(this).parent().attr("class").split("-")[1];   //splits up each row class into just its number
    var entry = $(this).siblings('.hour').val().trim("");
    localStorage.setItem(entryTime, JSON.stringify(entry));

});

$('#clear').click(function (event){
    event.preventDefault();
    localStorage.clear();
    location.reload();
});

displayTime();
