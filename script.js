const nineInput = $('#user-input9')
const tenInput = $('#user-input10')
const elevenInput =  $('#user-input11')
const twelveInput =  $('#user-input12')
const thirteenInput=  $('#user-input13')
const fourteenInput = $('#user-input14')
const fifteenInput =  $('#user-input15')
const sixsteenInput =  $('#user-input16')
const seventeenInput =  $('#user-input17')
const input =  $('.input')
const timeBlock =  $('.time-block')

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
// function for the timer to update everysecond
function updateTime () {
    var update=1000
    setTimeout(showTime, update)
}
    showTime()
    
    saveBtn.on("click", function (event) {
        event.preventDefault();
        var nineValue = nineInput.val();
        var tenValue = tenInput.val();
        var elevenValue = elevenInput.val();
        var twelveValue = twelveInput.val();
        var thirteenValue = thirteenInput.val();
        var fourteenValue = fourteenInput.val();
        var fifteenValue = fifteenInput.val();
        var sixsteenValue = sixsteenInput.val();
        var seventeenValue = seventeenInput.val();
    
    
        localStorage.setItem("9OClock", JSON.stringify(nineValue));
        localStorage.setItem("10OClock", JSON.stringify(tenValue));
        localStorage.setItem("11OClock", JSON.stringify(elevenValue));
        localStorage.setItem("12OClock", JSON.stringify(twelveValue));
        localStorage.setItem("13OClock", JSON.stringify(thirteenValue));
        localStorage.setItem("14OClock", JSON.stringify(fourteenValue));
        localStorage.setItem("15OClock", JSON.stringify(fifteenValue));
        localStorage.setItem("16OClock", JSON.stringify(sixsteenValue));
        localStorage.setItem("17OClock", JSON.stringify(seventeenValue));
    });
    
    displayText();
    
    function displayText() {
        var nine = JSON.parse(localStorage.getItem("9OClock",)) || [];
        var ten = JSON.parse(localStorage.getItem("10OClock",)) || [];
        var eleven = JSON.parse(localStorage.getItem("11OClock",)) || [];
        var twelve = JSON.parse(localStorage.getItem("12OClock",)) || [];
        var thirteen = JSON.parse(localStorage.getItem("13OClock",)) || [];
        var fourteen = JSON.parse(localStorage.getItem("14OClock",)) || [];
        var fifteen = JSON.parse(localStorage.getItem("15OClock",)) || [];
        var sixsteen = JSON.parse(localStorage.getItem("16OClock",)) || [];
        var seventeen = JSON.parse(localStorage.getItem("17OClock",)) || [];
    
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

    if(todaysHour===17) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn17').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "green")
    }
    else if(todaysHour===16) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn16').removeClass('btn-secondary')
        $('#btn17').addClass('btn-success')
        $('#btn16').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        sixsteenInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "lightgreen")
        $('#time-block-8').css("background-color", "green")
    }
    else if(todaysHour===15) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn16').removeClass('btn-secondary')
        $('#btn15').removeClass('btn-secondary')
        $('#btn17').addClass('btn-success')
        $('#btn16').addClass('btn-success')
        $('#btn15').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        sixsteenInput.css("background-color", "white")
        fifteenInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "lightgreen")
        $('#time-block-8').css("background-color", "lightgreen")
        $('#time-block-7').css("background-color", "green")
    }
    else if(todaysHour===14) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn16').removeClass('btn-secondary')
        $('#btn15').removeClass('btn-secondary')
        $('#btn14').removeClass('btn-secondary')
        $('#btn17').addClass('btn-success')
        $('#btn16').addClass('btn-success')
        $('#btn15').addClass('btn-success')
        $('#btn14').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        sixsteenInput.css("background-color", "white")
        fifteenInput.css("background-color", "white")
        fourteenInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "lightgreen")
        $('#time-block-8').css("background-color", "lightgreen")
        $('#time-block-7').css("background-color", "lightgreen")
        $('#time-block-6').css("background-color", "green")
    }

    else if(todaysHour===13) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn16').removeClass('btn-secondary')
        $('#btn15').removeClass('btn-secondary')
        $('#btn14').removeClass('btn-secondary')
        $('#btn13').removeClass('btn-secondary')
        $('#btn17').addClass('btn-success')
        $('#btn16').addClass('btn-success')
        $('#btn15').addClass('btn-success')
        $('#btn14').addClass('btn-success')
        $('#btn13').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        sixsteenInput.css("background-color", "white")
        fifteenInput.css("background-color", "white")
        fourteenInput.css("background-color", "white")
        thirteenInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "lightgreen")
        $('#time-block-8').css("background-color", "lightgreen")
        $('#time-block-7').css("background-color", "lightgreen")
        $('#time-block-6').css("background-color", "lightgreen")
        $('#time-block-5').css("background-color", "green")
    }

    else if(todaysHour===12) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn16').removeClass('btn-secondary')
        $('#btn15').removeClass('btn-secondary')
        $('#btn14').removeClass('btn-secondary')
        $('#btn13').removeClass('btn-secondary')
        $('#btn12').removeClass('btn-secondary')
        $('#btn17').addClass('btn-success')
        $('#btn16').addClass('btn-success')
        $('#btn15').addClass('btn-success')
        $('#btn14').addClass('btn-success')
        $('#btn13').addClass('btn-success')
        $('#btn12').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        sixsteenInput.css("background-color", "white")
        fifteenInput.css("background-color", "white")
        fourteenInput.css("background-color", "white")
        thirteenInput.css("background-color", "white")
        twelveInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "lightgreen")
        $('#time-block-8').css("background-color", "lightgreen")
        $('#time-block-7').css("background-color", "lightgreen")
        $('#time-block-6').css("background-color", "lightgreen")
        $('#time-block-5').css("background-color", "lightgreen")
        $('#time-block-4').css("background-color", "green")
    }

    else if(todaysHour===11) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn16').removeClass('btn-secondary')
        $('#btn15').removeClass('btn-secondary')
        $('#btn14').removeClass('btn-secondary')
        $('#btn13').removeClass('btn-secondary')
        $('#btn12').removeClass('btn-secondary')
        $('#btn11').removeClass('btn-secondary')
        $('#btn17').addClass('btn-success')
        $('#btn16').addClass('btn-success')
        $('#btn15').addClass('btn-success')
        $('#btn14').addClass('btn-success')
        $('#btn13').addClass('btn-success')
        $('#btn12').addClass('btn-success')
        $('#btn11').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        sixsteenInput.css("background-color", "white")
        fifteenInput.css("background-color", "white")
        fourteenInput.css("background-color", "white")
        thirteenInput.css("background-color", "white")
        twelveInput.css("background-color", "white")
        elevenInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "lightgreen")
        $('#time-block-8').css("background-color", "lightgreen")
        $('#time-block-7').css("background-color", "lightgreen")
        $('#time-block-6').css("background-color", "lightgreen")
        $('#time-block-5').css("background-color", "lightgreen")
        $('#time-block-4').css("background-color", "lightgreen")
        $('#time-block-3').css("background-color", "green")
    }

    else if(todaysHour===10) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        $('#btn17').removeClass('btn-secondary')
        $('#btn16').removeClass('btn-secondary')
        $('#btn15').removeClass('btn-secondary')
        $('#btn14').removeClass('btn-secondary')
        $('#btn13').removeClass('btn-secondary')
        $('#btn12').removeClass('btn-secondary')
        $('#btn11').removeClass('btn-secondary')
        $('#btn10').removeClass('btn-secondary')
        $('#btn17').addClass('btn-success')
        $('#btn16').addClass('btn-success')
        $('#btn15').addClass('btn-success')
        $('#btn14').addClass('btn-success')
        $('#btn13').addClass('btn-success')
        $('#btn12').addClass('btn-success')
        $('#btn11').addClass('btn-success')
        $('#btn10').addClass('btn-primary')
        input.css("background-color", "grey")
        seventeenInput.css("background-color", "white")
        sixsteenInput.css("background-color", "white")
        fifteenInput.css("background-color", "white")
        fourteenInput.css("background-color", "white")
        thirteenInput.css("background-color", "white")
        twelveInput.css("background-color", "white")
        elevenInput.css("background-color", "white")
        tenInput.css("background-color", "white")
        timeBlock.css("background-color", "darkgrey")
        $('#time-block-9').css("background-color", "lightgreen")
        $('#time-block-8').css("background-color", "lightgreen")
        $('#time-block-7').css("background-color", "lightgreen")
        $('#time-block-6').css("background-color", "lightgreen")
        $('#time-block-5').css("background-color", "lightgreen")
        $('#time-block-4').css("background-color", "lightgreen")
        $('#time-block-3').css("background-color", "lightgreen")
        $('#time-block-2').css("background-color", "green")
    }
    else if(todaysHour<=9) {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-success')
        $('#btn9').removeClass('btn-success')
        $('#btn9').addClass('btn-primary')
        input.css("background-color", "white")
        timeBlock.css("background-color", "lightgreen")
        $('#time-block-1').css("background-color", "green")
    }

    else {
        saveBtn.removeClass('btn-primary')
        saveBtn.removeClass('btn-success')
        saveBtn.removeClass('btn-secondary')
        saveBtn.addClass('btn-secondary')
        input.css("background-color", "grey")
        timeBlock.css("background-color", "darkgrey")
    }