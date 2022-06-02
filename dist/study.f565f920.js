//setting time variables to equal 0
let [mil, sec, min, hor] = [
    0,
    0,
    0,
    0
];
//linking variable to html file
let stopwatch_timer = document.querySelector('.display_timer');
let int = null;
//setting up the time functions for 1000 miliseconds in a second ect.
function stopwatch() {
    mil += 10;
    if (mil == 1000) {
        mil = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hor++;
            }
        }
    }
    //when the total time in each time type is less than 10 then a 0 is added before that digit
    let h = hor < 10 ? "0" + hor : hor;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = mil < 10 ? "00" + mil : mil < 100 ? "0" + mil : mil;
    //writing the values into the html file
    stopwatch_timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
//the start function to start the stopwatch
document.getElementById('start').addEventListener('click', ()=>{
    if (int !== null) clearInterval(int);
    int = setInterval(stopwatch, 10);
});
//pause the stopwatch
document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
});
//reset the stopwatch back to 0
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [mil, sec, min, hor] = [
        0,
        0,
        0,
        0
    ];
    stopwatch_timer.innerHTML = '00 : 00 : 00 : 000 ';
}); //("Create a Simple Stopwatch using JavaScript (Tutorial + Code)", 2021)

//# sourceMappingURL=study.f565f920.js.map
