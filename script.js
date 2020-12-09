const todaysDateDisplay = document.getElementById('currentDay')


function showTime () {
    var todaysDate = new Date();
    todaysDateDisplay.innerHTML = todaysDate
    updateTime()
}

function updateTime () {
    var update=1000
    setTimeout(showTime, update)
}
showTime()