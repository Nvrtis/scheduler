// Const and variable list
const nineInput = $('#user-input9')
const tenInput = $('#user-input10')
const elevenInput = $('#user-input11')
const twelveInput = $('#user-input12')
const thirteenInput = $('#user-input13')
const fourteenInput = $('#user-input14')
const fifteenInput = $('#user-input15')
const sixsteenInput = $('#user-input16')
const seventeenInput = $('#user-input17')
const input = $('.input')
const timeBlock = $('.time-block')
const row = $('.row')
const saveBtn = $('.btn')
const todaysDateDisplay = $('#currentDay')
const rowValue= $('.time')

var todaysDate = new Date();
var todaysHour = todaysDate.getHours()

// Function for showing the time in the header
function showTime() {
    todaysDate = new Date();
    todaysHour = todaysDate.getHours()
    todaysDateDisplay.html(todaysDate)
    updateTime()
}
// function for the timer to update every second
function updateTime() {
    var update = 1000
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

// changing color depending on what hour of the day

for(var i = 0; i < rowValue.length; i++) {
if (todaysHour == $(rowValue[i]).text()) {
    $(row[i]).removeClass('past present future')
    $(row[i]).addClass('present')
}
else if (todaysHour > $(rowValue[i]).text()) {
    $(row[i]).removeClass('past present future')
    $(row[i]).addClass('past')
}
else {
    $(row[i]).removeClass('past present future')
    $(row[i]).addClass('future')
}
}
