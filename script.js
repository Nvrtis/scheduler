// Const and variable list
const nineInput = $('#user-input9')
const rowValueNine = $('#time1').text()
const tenInput = $('#user-input10')
const rowValueTen = $('#time2').text()
const elevenInput =  $('#user-input11')
const rowValueEleven = $('#time3').text()
const twelveInput =  $('#user-input12')
const rowValueTwelve = $('#time4').text()
const thirteenInput=  $('#user-input13')
const rowValueThirteen = $('#time5').text()
const fourteenInput = $('#user-input14')
const rowValueFourteen = $('#time6').text()
const fifteenInput =  $('#user-input15')
const rowValueFifteen = $('#time7').text()
const sixsteenInput =  $('#user-input16')
const rowValueSixsteen = $('#time8').text()
const seventeenInput =  $('#user-input17')
const rowValueSeventeen = $('#time9').text()
const input =  $('.input')
const timeBlock =  $('.time-block')
const row =  $('.row')

const saveBtn =  $('.btn')
const todaysDateDisplay = $('#currentDay')
var todaysDate = new Date();
var todaysHour = todaysDate.getHours()

// Function for showing the time in the header
function showTime () {
    todaysDate = new Date();
    todaysHour = todaysDate.getHours()
    todaysDateDisplay.html(todaysDate)
    updateTime()
}
// function for the timer to update every second
function updateTime () {
    var update=1000
    setTimeout(showTime, update)
}
// calling function for loading it with the page
    showTime()
// eventlistener for getting users input for task
    saveBtn.on("click", getTask)
    
// get task function
    function getTask(event) {
        event.preventDefault();
        // save task as a variable
        var nineValue = nineInput.val();
        var tenValue = tenInput.val();
        var elevenValue = elevenInput.val();
        var twelveValue = twelveInput.val();
        var thirteenValue = thirteenInput.val();
        var fourteenValue = fourteenInput.val();
        var fifteenValue = fifteenInput.val();
        var sixsteenValue = sixsteenInput.val();
        var seventeenValue = seventeenInput.val();
    
    // setting task in the local storage
        localStorage.setItem("9OClock", JSON.stringify(nineValue));
        localStorage.setItem("10OClock", JSON.stringify(tenValue));
        localStorage.setItem("11OClock", JSON.stringify(elevenValue));
        localStorage.setItem("12OClock", JSON.stringify(twelveValue));
        localStorage.setItem("13OClock", JSON.stringify(thirteenValue));
        localStorage.setItem("14OClock", JSON.stringify(fourteenValue));
        localStorage.setItem("15OClock", JSON.stringify(fifteenValue));
        localStorage.setItem("16OClock", JSON.stringify(sixsteenValue));
        localStorage.setItem("17OClock", JSON.stringify(seventeenValue));
    };
    
    // calling displayText when page loads
    displayText();
    // displayText function for recieving from local storage and displaying in input field
    function displayText() {
        // taking from local storage and saving as a variable
        var nine = JSON.parse(localStorage.getItem("9OClock",)) || [];
        var ten = JSON.parse(localStorage.getItem("10OClock",)) || [];
        var eleven = JSON.parse(localStorage.getItem("11OClock",)) || [];
        var twelve = JSON.parse(localStorage.getItem("12OClock",)) || [];
        var thirteen = JSON.parse(localStorage.getItem("13OClock",)) || [];
        var fourteen = JSON.parse(localStorage.getItem("14OClock",)) || [];
        var fifteen = JSON.parse(localStorage.getItem("15OClock",)) || [];
        var sixsteen = JSON.parse(localStorage.getItem("16OClock",)) || [];
        var seventeen = JSON.parse(localStorage.getItem("17OClock",)) || [];
    
        // putting the variable into the input field
        nineInput.val(nine)
        tenInput.val(ten)
        elevenInput.val(eleven)
        twelveInput.val(twelve)
        thirteenInput.val(thirteen)
        fourteenInput.val(fourteen);
        fifteenInput.val(fifteen)
        sixsteenInput.val(sixsteen)
        seventeenInput.val(seventeen)
    
    }

    if (todaysHour == rowValueNine){
        $('#row1').removeClass('past present future')
        $('#row1').addClass('present')
    }
    else if (todaysHour > rowValueNine) {
        $('#row1').removeClass('past present future')
        $('#row1').addClass('past')
}
    else {
        $('#row1').removeClass('past present future')
        $('#row1').addClass('future')
    }

    if (todaysHour == rowValueTen){
        $('#row2').removeClass('past present future')
        $('#row2').addClass('present')
    }
    else if (todaysHour > rowValueTen) {
        $('#row2').removeClass('past present future')
        $('#row2').addClass('past')
}
    else {
        $('#row2').removeClass('past present future')
        $('#row2').addClass('future')
    }

    if (todaysHour == rowValueEleven){
        $('#row3').removeClass('past present future')
        $('#row3').addClass('present')
    }
    else if (todaysHour > rowValueEleven) {
        $('#row3').removeClass('past present future')
        $('#row3').addClass('past')
}
    else {
        $('#row3').removeClass('past present future')
        $('#row3').addClass('future')
    }
    if (todaysHour == rowValueTwelve){
        $('#row4').removeClass('past present future')
        $('#row4').addClass('present')
    }
    else if (todaysHour > rowValueTwelve) {
        $('#row4').removeClass('past present future')
        $('#row4').addClass('past')
}
    else {
        $('#row4').removeClass('past present future')
        $('#row4').addClass('future')
    }

    if (todaysHour == rowValueThirteen){
        $('#row5').removeClass('past present future')
        $('#row5').addClass('present')
    }
    else if (todaysHour > rowValueThirteen) {
        $('#row5').removeClass('past present future')
        $('#row5').addClass('past')
}
    else {
        $('#row5').removeClass('past present future')
        $('#row5').addClass('future')
    }
    if (todaysHour == rowValueFourteen){
        $('#row6').removeClass('past present future')
        $('#row6').addClass('present')
    }
    else if (todaysHour > rowValueFourteen) {
        $('#row6').removeClass('past present future')
        $('#row6').addClass('past')
}
    else {
        $('#row6').removeClass('past present future')
        $('#row6').addClass('future')
    }

    if (todaysHour == rowValueFifteen){
        $('#row7').removeClass('past present future')
        $('#row7').addClass('present')
    }
    else if (todaysHour > rowValueFifteen) {
        $('#row7').removeClass('past present future')
        $('#row7').addClass('past')
}
    else {
        $('#row7').removeClass('past present future')
        $('#row7').addClass('future')
    }

    if (todaysHour == rowValueSixsteen){
        $('#row8').removeClass('past present future')
        $('#row8').addClass('present')
    }
    else if (todaysHour > rowValueSixsteen) {
        $('#row8').removeClass('past present future')
        $('#row8').addClass('past')
}
    else {
        $('#row8').removeClass('past present future')
        $('#row8').addClass('future')
    }
    if (todaysHour == rowValueSeventeen){
        $('#row9').removeClass('past present future')
        $('#row9').addClass('present')
    }
    else if (todaysHour > rowValueSeventeen) {
        $('#row9').removeClass('past present future')
        $('#row9').addClass('past')
}
    else {
        $('#row9').removeClass('past present future')
        $('#row9').addClass('future')
    }