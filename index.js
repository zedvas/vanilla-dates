/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)
const isDate = (date) => date instanceof Date;

// 2. Create today's date
const today = new Date();

// 3. Get the current timestamp (using a static method of Date)
today.getTime();

// 4. Create a date to represent next Christmas Day
const xmasDay = new Date(2024, 11, 25);

// 5. Work out how many days it is until christmas

// Get difference between now and xmas
const timeTillXmas = Math.abs(xmasDay.getTime() - today.getTime());

// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
// Math.floor for whole days; Math.ceil to include today
const daysTillXmas = Math.floor(timeTillXmas / (24 * 60 * 60 * 1000));

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}                                                                                               //didn't use this. why is it here?

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1, date1.getTime());

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);
console.log("date2", date2, date2.getTime());

const earlierDate = (date1, date2) => {
  return date1.getTime() < date2.getTime()
    ? "date1 is earlier"
    : date1.getTime() > date2.getTime()
    ? "date2 is earlier"
    : "they're the same date";
};

console.log(earlierDate(date1, date2));

// 7. How do I test if a date is valid? ****
const isValidDate = (date) => date instanceof Date && !isNaN(date); //why?

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object
console.log(`${today.getMonth()}-${today.getDate()}-${today.getFullYear()}`);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')
const myLocaleDateString = today.toLocaleDateString("en-GB");
const myGermanDateString = today.toLocaleDateString("de-DE");

// 10. Output the current time in hours, mins & seconds
const myLocaleTimeString = today.toLocaleTimeString();

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

const clock = () => {
  console.log(today.toLocaleTimeString());
  today.setMilliseconds(today.getMilliseconds() + 1000);
};
// setInterval(clock, 1 * 1000);

// 12. Create a copy of today
const todayCopy = new Date(today.getTime());

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now
const futureDate = new Date();
futureDate.setFullYear(today.getFullYear() + 3);
futureDate.setMonth(today.getMonth() + 2);
futureDate.setDate(today.getDate() + 1);
console.log(futureDate);

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)
console.log(today.getTimezoneOffset());

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
//AEST
const sydneyFormatter = new Intl.DateTimeFormat("en-gb", {
  timeZone: "Australia/Sydney",
});
console.log("australia", sydneyFormatter.format(today));                                //check against slides

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.
const conversionToMilliseconds = (
  year,
  monthIndex,
  day,
  hours,
  minutes,
  seconds,
  milliseconds
) => {
  const date = new Date(
    year,
    monthIndex,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );
  return date.valueOf();
};

console.log(conversionToMilliseconds(1, 1, 1, 1, 1, 1, 1));                             //have I understood this question correctly? time since epoch? or time absolutely?

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates
const differenceBetweenTwoDates = (date1, date2) => {
  const datesArray = [];
  [date1, date2].forEach((date) => {
    datesArray.push({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds(),
    });
  });
  const difference = {
    year: datesArray[1].year - datesArray[0].year,
    month: datesArray[1].month - datesArray[0].month,
    day: datesArray[1].day - datesArray[0].day,
    hours: datesArray[1].hours - datesArray[0].hours,
    minutes: datesArray[1].minutes - datesArray[0].minutes,
    seconds: datesArray[1].seconds - datesArray[0].seconds,
    milliseconds: datesArray[1].milliseconds - datesArray[0].milliseconds,
  }
return difference;
};                                                                                  //revisit this. too repetitive?

console.log(differenceBetweenTwoDates(date1, date2))

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
