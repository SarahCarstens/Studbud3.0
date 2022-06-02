//Creating a variable for the timer which includes if the timer has started, setting minutes and seconds to 0 as an initialisation
var timer = {
    started: false,
    minutes: 0,
    seconds: 0,
    height_fill: 0,
    increment: 0,
    interval: null,
    declare_minutes: null,
    declare_seconds: null,
    fillerDom: null,
    //initialising the timer
    initialise: function() {
        var self = this;
        //Linking the minutes value from the html to the java code
        this.declare_minutes = document.querySelector('#minutes');
        //linking the seconds value to the java code
        this.declare_seconds = document.querySelector('#seconds');
        this.fillerDom = document.querySelector('#filler');
        //setting the interval to make the timer correct
        this.interval = setInterval(function() {
            self.intervalCallback.apply(self);
        }, 1000);
        //when the work button is clicked then the start work function will begin
        document.querySelector('#work').onclick = function() {
            self.startWork.apply(self);
        };
        //when the short break button is clicked then the short break function will begin
        document.querySelector('#short').onclick = function() {
            self.startShortBreak.apply(self);
        };
        //when the long button is clicked then the long break function will begin
        document.querySelector('#long').onclick = function() {
            self.startLongBreak.apply(self);
        };
        //when the stop button is clicked the stop timer function will begin
        document.querySelector('#stop').onclick = function() {
            self.stopTimer.apply(self);
        };
    },
    //starting the work section of the pomodoro timer
    //setting minutes to 25
    startWork: function() {
        this.minutes = 25;
        this.seconds = 0;
        this.started = true;
        this.increment = 200 / (this.minutes * 60);
    },
    //setting the short break for the timer to 5 minutes
    startShortBreak: function() {
        this.minutes = 5;
        this.seconds = 0;
        this.started = true;
        this.increment = 200 / (this.minutes * 60);
    },
    //setting the long break for the timer to 15 minutes
    startLongBreak: function() {
        this.minutes = 15;
        this.seconds = 0;
        this.started = true;
        this.increment = 200 / (this.minutes * 60);
    },
    //turning started to false and stopping the timer
    stopTimer: function() {
        this.minutes = 0;
        this.seconds = 0;
        this.started = false;
        this.increment = 200 / (this.minutes * 60);
        this.updateDom();
    },
    //setting the timer function for the digits to reach 10 and then update either the 10's column of the seconds or the minutes column
    toDoubleDigit: function(num) {
        if (num < 10) return "0" + parseInt(num, 10);
        return num;
    },
    //changing the values in the html file to display the timer
    updateDom: function() {
        //setting minutes in the html file to the countdown of minutes
        this.declare_minutes.innerHTML = this.toDoubleDigit(this.minutes);
        //setting seconds in the html file to the countdown of seconds
        this.declare_seconds.innerHTML = this.toDoubleDigit(this.seconds);
    },
    //if the timer is not running or it reaches 0 then run the timer complete function
    intervalCallback: function() {
        if (!this.started) return false;
        if (this.seconds == 0) {
            if (this.minutes == 0) {
                this.timerComplete();
                return;
            }
            //if seconds = 59 then minus 1 minute
            this.seconds = 59;
            this.minutes--;
        //otherwise minus 1 second
        } else this.seconds--;
        this.updateDom();
    },
    //when the timer is finished, set started to false so the timer stops
    timerComplete: function() {
        this.started = false;
    }
};
//initialise the timer when the window loads
window.onload = function() {
    timer.initialise();
}; //(Gupta, 2016)

//# sourceMappingURL=pomodoro.9ce3d7ef.js.map
