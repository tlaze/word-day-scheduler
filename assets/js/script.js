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


$('.saveBtn').click(function (){
    var entry = $(this).siblings('.hour').val();
    var entryTime = $(this).parent().attr("class").split("-")[1];
    localStorage.setItem(entryTime, entry);
});


//Uses moment.js to display time
function displayTime(){
    var rightNow = moment().format('dddd MMM Do YYYY');
    todaysDate.text(rightNow);
}

function saveEntry(){
    console.log("click");
    // deleteEntry();
    // getStoredEntries();


    console.log(localStorage);


    $(".row1 .hour").val(localStorage.getItem("09"));
    $(".row2 .hour").val(localStorage.getItem("10"));
    $(".row3 .hour").val(localStorage.getItem("11"));
    $(".row4 .hour").val(localStorage.getItem("12"));
    $(".row5 .hour").val(localStorage.getItem("13"));
    $(".row6 .hour").val(localStorage.getItem("14"));
    $(".row7 .hour").val(localStorage.getItem("15"));
    $(".row8 .hour").val(localStorage.getItem("16"));
    $(".row9 .hour").val(localStorage.getItem("17"));

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
