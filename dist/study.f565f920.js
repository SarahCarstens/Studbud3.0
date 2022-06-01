let [mil, sec, min, hor] = [
    0,
    0,
    0,
    0
];
let stopwatch_timer = document.querySelector('.display_timer');
let int = null;
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
    let h = hor < 10 ? "0" + hor : hor;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = mil < 10 ? "00" + mil : mil < 100 ? "0" + mil : mil;
    stopwatch_timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
document.getElementById('start').addEventListener('click', ()=>{
    if (int !== null) clearInterval(int);
    int = setInterval(stopwatch, 10);
});
document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
});
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [mil, sec, min, hor] = [
        0,
        0,
        0,
        0
    ];
    stopwatch_timer.innerHTML = '00 : 00 : 00 : 000 ';
});

//# sourceMappingURL=study.f565f920.js.map
