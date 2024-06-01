// const car = {
//     manufacturer: "BMW",
//     model: "X5",
//     year: 2022,
//     averageSpeed: 100, // km/h

//     displayInfo: function () {
//         console.log(`Car: ${this.manufacturer} ${this.model}`);
//         console.log(`Year of manufacture: ${this.year}`);
//         console.log(`Average speed: ${this.averageSpeed} km/h`);
//     },

//     calculateTravelTime: function (distance) {
//         const timeWithoutBreaks = distance / this.averageSpeed;
//         const numberOfBreaks = Math.floor(timeWithoutBreaks / 4);
//         const totalTime = timeWithoutBreaks + numberOfBreaks;
//         return totalTime;
//     }
// };

// car.displayInfo();

// const distance = 500;
// const travelTime = car.calculateTravelTime(distance);
// console.log(`Travel time for a distance of ${distance} km: ${travelTime} hours`);

const Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    displayTime: function () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    changeBySeconds: function (seconds) {
        this.seconds += seconds;
        this.updateTime();
    },
    changeByMinutes: function (minutes) {
        this.minutes += minutes;
        this.updateTime();
    },
    changeByHours: function (hours) {
        this.hours += hours;
        this.updateTime();
    },
    updateTime: function () {
        while (this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes++;
        }
        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours++;
        }
        while (this.seconds < 0) {
            this.seconds += 60;
            this.minutes--;
        }
        while (this.minutes < 0) {
            this.minutes += 60;
            this.hours--;
        }
        while (this.hours >= 24) {
            this.hours -= 24;
        }
        while (this.hours < 0) {
            this.hours += 24;
        }
    }
};
const time = Object.create(Time);
time.hours = 20;
time.minutes = 30;
time.seconds = 45;
console.log("Initial Time:");
time.displayTime();
time.changeBySeconds(30);
console.log("Time after adding 30 seconds:");
time.displayTime();
time.changeBySeconds(-45);
console.log("Time after subtracting 45 seconds:");
time.displayTime();
time.changeByMinutes(15);
console.log("Time after adding 15 minutes:");
time.displayTime();
time.changeByHours(2);
console.log("Time after adding 2 hours:");
time.displayTime();