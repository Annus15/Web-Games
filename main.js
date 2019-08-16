/* ********************************

//Algorithm
// -Select all circles in the form of array by using querySelectorAll
// -Generate 6 random colors and assign these colors to circles
// -Pick one color as answer from the colors you generated randomly
// -Set this color (ans) in top heading by using .textContent
// -Attach resultGenerator function to all function on event 'click'
// -Attach reset function that follow all given steps plus some ui changes to reset button
******************************** */
var answer = 0;
var circles = document.querySelectorAll('.circle');
var html = document.querySelector('html');
var rgbHeading = document.querySelector('.rgbHeading');
var rgbBox = document.querySelector('.rgb');
var reset = document.querySelector('.resetBtn');
// console.log(circles);

var randomNumber = (max,min) => {
    return Math.floor(Math.random() * (max-min)) + min;
}


var randomColors = (circleArr) => {
        circleArr.forEach((circle) => {
            circle.style.background = `rgb(${randomNumber(0,256)},${randomNumber(0,256)},${randomNumber(0,256)})`    
    });
}
// console.log(randomNumber(0,10));

var circleColor = (circleArr) => {
    var anonymousNumber = randomNumber(0, circleArr.length);
    answer = circleArr[anonymousNumber].style.background;
    rgbHeading.textContent = answer; 
};

circles.forEach((circle)=>{
    circle.addEventListener('click',(e) => {
        var ansCheck = e.target.style.background;
        if (ansCheck === answer) {
            html.style.background = answer;
            rgbBox.style.background = answer;
            circles.forEach((circle) => {
                if (circle.style.background !== answer){
                    circle.style.opacity = '0';
                }
            })
        }
        else {
            e.target.style.opacity = '0'
            }

    });
});

function resetFunction() {
    document.location.reload(true);
}

var init = () => {
    randomColors(circles);
    circleColor(circles);
    reset.addEventListener('click',function(){resetFunction()});
};
init();
