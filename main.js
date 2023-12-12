let circle = document.querySelector("#circle");
let circleIcon = document.querySelector("#circle i");
let seconds = 0

let secText = document.querySelector("#sec-text")
circle.onclick = function () {
    // Flipping icons from play to pulse vice versa
    if (circleIcon.classList.contains("fa-play")) {
        circleIcon.classList.replace("fa-play", "fa-pause")
        // Starting timer
        setInterval(function () {
            // Returning seconds to 0 if it gets to 59
            if (seconds > 59) {
                seconds = 0;
                minutes++;
                if (minutes > 59) {
                    minutes = 0;
                    hours++;
                }
            }
            // Pushing the time to 
            secText.innerHTML = `${seconds < 10 ? `0${seconds}`: seconds}`
            minText.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`
            hourText.innerHTML = `${hours < 10 ? `0${hours}` :hours}`
            console.log(seconds);

            seconds++;
        }, 1000)
        // Adding rotation to timer
        // timerIcon.classlist.add("rotate")
        
    }
}