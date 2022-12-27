// var value = Date();
// document.write("<h4><li>Date():</h4></li>"+value);                                      //Sat Dec 17 2022 08:35:37 GMT+0530 (India Standard Time)
//
// var value = new Date();
// document.write(" <h4><li>new Date():</h4></li>"+value);                                 //Sat Dec 17 2022 08:35:37 GMT+0530 (India Standard Time)
//
// var value = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.write ("<h4><li>getDay():</h4></li>"+days[value.getDay()]);                  //saturday
// var value = new Date();
// document.write("<h4><li>getDay():</h4></li>"+value.getDay());                           //getDay()-Get the weekday as a number (0-6)
//
// var value = new Date();
// document.write("<h4><li>getMonth():</h4></li>"+value.getMonth());                      // getMonth()	Get the month (0-11)
//
// var value = new Date();
// document.write(" <h4><li>getDate():</h4></li>"+value.getDate());                       // getDate()-Get the day as a number (1-31)
//
// var value = new Date();
// document.write("<h4><li>getYear():</h4></li>"+value.getYear());
//
// var value = new Date();
// document.write("<h4><li>getFullYear():</h4></li>"+value.getFullYear());                // getFullYear()-Get the four digit year (yyyy)
//
// var value = new Date();
// document.write("<h4><li>getHours():</h4></li>"+value.getHours());                      // getHours()- (Get the hour (0-23))
//
// var value = new Date();
// document.write("<h4><li>getMinutes():</h4></li>"+value.getMinutes());                 // getMinutes()-Get the minutes (0-59)
//
// var value = new Date();
// document.write("<h4><li>getSeconds():</h4></li>"+value.getSeconds());                 // getSeconds()-Get the seconds (0-59)
//
// var value = new Date();
// document.write("<h4><li>getMilliseconds():</h4></li>"+value.getMilliseconds());       // getMilliseconds()-Get the milliseconds (0-999)
//
// var value = new Date();
// document.write("<h4><li>getTime():</h4></li>"+value.getTime());                       // getTime()-Get the time (milliseconds since January 1, 1970)
//
// var value= new Date();
// value.setDate(15);
// document.write( "<h4><li>setDate():</h4></li>"+value);                                 // setDate()	Set the day as a number (1-31)
//
// var value= new Date();
// value.setMonth(3);
// document.write( "<h4><li>setMonth():</h4></li>"+value);                                // setMonth()-Set the month (0-11)
//
// var value= new Date();
// value.setYear(2022);
// document.write( "<h4><li>setYear():</h4></li>"+value);
//
// var value= new Date();
// value.setFullYear(2020);
// //value.setFullYear(2020, 11, 4);
// document.write( "<h4><li>setFullYear():</h4></li>"+value);                             // setFullYear()	Set the year (optionally month and day)
//
// var value= new Date();
// value.setHours(11);
// document.write( "<h4><li>setHours():</h4></li>"+value);                                // setHours()	Set the hour (0-23)
//
// var value= new Date();
// value.setMinutes(55);
// document.write( "<h4><li>setMintues():</h4></li>"+value);                               // setMinutes()	Set the minutes (0-59)
//
// var value= new Date();
// value.setSeconds(60);
// document.write( "<h4><li>setSeconds():</h4></li>"+value);                               // setSeconds()	Set the seconds (0-59)
//
// var value= new Date();
// value.setMilliseconds(45);
// document.write( "<h4><li>setMilliseconds():</h4></li>"+value);                          // setMilliseconds()-Set the milliseconds (0-999)
//
// var value= new Date();
// value.setTime(6);
// document.write( "<h4><li>setTime():</h4></li>"+value);       // setTime()-Set the time (milliseconds since January 1, 1970)

//practice

// //Date.prototype.getDate()
// var value = new Date('August 19, 1975 23:15:30');
// var date = value.getDate();
// console.log(date);
//
// //Date.prototype.getDay()
// var value = new Date('August 19, 1975 23:15:30');
// var day = value.getDay();                                                          // Sunday - Saturday : 0 - 6
// console.log(day);
//
// //Date.prototype.getFullYear()
// var fullyear = new Date('July 20, 69 00:20:18');
// console.log(fullyear.getFullYear());
//
// //Date.prototype.getHours()
// var value = new Date('March 28, 08 04:20');
// console.log(value.getHours());
//
// //Date.prototype.getMilliseconds()
// var value = new Date('July 20, 69 00:20:18');
// value.setMilliseconds(123);
// console.log(value.getMilliseconds());
//
// //Date.prototype.getMinutes()
// var value= new Date('March 13, 08 04:20');
// console.log(value.getMinutes());
//
// //Date.prototype.getMonth()
// var value = new Date('July 20, 69 00:20:18');
// console.log(value.getMonth());
//
// //Date.prototype.getSeconds()
//  var value= new Date('July 20, 69 00:20:18');
// console.log(value.getSeconds());
//
// //Date.prototype.getTime()
// var value = new Date('July 20, 69 20:17:40 GMT+00:00');         // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
// console.log(moonLanding.getTime());
//
// //Date.prototype.getTimezoneOffset()
// var date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');        // expected output: your local timezone offset in minutes// (eg -120). NOT the timezone offset of the date object.
// var date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');
// console.log(date1.getTimezoneOffset());
// console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
//
// //Date.prototype.getUTCDate()
// var date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
// var date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');
// console.log(date1.getUTCDate());
// console.log(date2.getUTCDate());
//
// //Date.prototype.getUTCDay()
// var date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
// var date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');
// console.log(date1.getUTCDay());// Tuesday
// console.log(date2.getUTCDay());// Wednesday
//
// //Date.prototype.getUTCFullYear()
// var date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// var date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
// console.log(date1.getUTCFullYear());
// console.log(date2.getUTCFullYear());
//
// //Date.prototype.getUTCHours()
// var date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// var date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
// console.log(date1.getUTCHours());
// console.log(date2.getUTCHours());
//
// //Date.prototype.getUTCMilliseconds()
// var value = new Date('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)
// console.log(value.getUTCMilliseconds());
// //Date.prototype.getUTCMinutes()
// var date1 = new Date('1 January 2000 03:15:30 GMT+07:00');
// var date2 = new Date('1 January 2000 03:15:30 GMT+03:30');
// console.log(date1.getUTCMinutes());                                       // 31 Dec 1999 20:15:30 GMT
// console.log(date2.getUTCMinutes());                                       // 31 Dec 1999 23:45:30 GMT
//
// //Date.prototype.getUTCMonth()
// var date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// var date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
// console.log(date1.getUTCMonth());           // December
// console.log(date2.getUTCMonth());           // January
//
// //Date.prototype.getUTCSeconds()
// var value= new Date('July 20, 1969, 20:18:04 UTC');
// console.log(value.getUTCSeconds());
//
// //Date.now()
// var start = Date.now();
// console.log('starting timer...');
// setTimeout(() => {
//   var millis = Date.now() - start;
//   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
// }, 2000);
//
// //Date.parse()
// var unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
// var javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');
// console.log(unixTimeZero);
// console.log(javaScriptRelease);
//
// //Date.prototype.setDate()
// var value = new Date('August 19, 1975 23:15:30');
// value.setDate(24);
// console.log(event.getDate());
// value.setDate(32);                 // Only 31 days in August!
// console.log(value.getDate());
//
// //Date.prototype.setFullYear()
// var value = new Date('August 19, 1975 23:15:30');
// value.setFullYear(1969);
// console.log(value.getFullYear());
// value.setFullYear(0);
// console.log(value.getFullYear());
//
// //Date.prototype.setHours()
// var  value= new Date('August 19, 1975 23:15:30');
// value.setHours(20);
// console.log(value);       // (note: your timezone may vary)
// value.setHours(20, 21, 22);
// console.log(value);
//
// //Date.prototype.setMilliseconds()
// var value = new Date('August 19, 1975 23:15:30');
// console.log(value.getMilliseconds());
// value.setMilliseconds(456);
// console.log(value.getMilliseconds());
//
// //Date.prototype.setMinutes()
// const event = new Date('August 19, 1975 23:15:30');
// event.setMinutes(45);
// console.log(event.getMinutes());
// console.log(event);       // (note: your timezone may vary)
//
// //Date.prototype.setMonth()
// const event = new Date('August 19, 1975 23:15:30');
// event.setMonth(3);
// console.log(event.getMonth());
// console.log(event);// (note: your timezone may vary)
//
// //Date.prototype.setSeconds()
// const event = new Date('August 19, 1975 23:15:30');
// event.setSeconds(42);
// console.log(event.getSeconds());
// console.log(event);    // (note: your timezone may vary)
//
// //Date.prototype.setTime()
// const launchDate = new Date('July 1, 1999, 12:00:00');
// const futureDate = new Date();
// futureDate.setTime(launchDate.getTime());
// console.log(futureDate);
// const fiveMinutesInMillis = 5 * 60 * 1000;
// futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);
// console.log(futureDate); // (note: your timezone may vary)
//
// //Date.prototype.setUTCDate()
// const event = new Date('August 19, 1975 23:15:30 GMT-3:00');
// console.log(event.getUTCDate());
// event.setUTCDate(19);
// console.log(event.getUTCDate());
//
// //Date.prototype.setUTCFullYear()
// const event = new Date('December 31, 1975 23:15:30 GMT-3:00');
// console.log(event.getUTCFullYear());
// console.log(event.toUTCString());
// event.setUTCFullYear(1975);
// console.log(event.toUTCString());
//
// //Date.prototype.setUTCHours()
// const event = new Date('August 19, 1975 23:15:30 GMT-3:00');
// console.log(event.toUTCString());
// console.log(event.getUTCHours());
// event.setUTCHours(23);
// console.log(event.toUTCString());
//
// //Date.prototype.setUTCMilliseconds()
// const date1 = new Date('2018-01-24T12:38:29.069Z');
// console.log(date1.getUTCMilliseconds());
// date1.setUTCMilliseconds(420);
// console.log(date1.getUTCMilliseconds());
//
// //Date.prototype.setUTCMinutes()
// const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// console.log(date1.getUTCMinutes());
// date1.setUTCMinutes(25);
// console.log(date1.getUTCMinutes());
//
// //Date.prototype.setUTCMonth()
// const event = new Date('December 31, 1975 23:15:30 GMT-3:00');
// console.log(event.toUTCString());   // Thu, 01 Jan 1976 02:15:30 GMT
// console.log(event.getUTCMonth());
// event.setUTCMonth(11);
// console.log(event.toUTCString());
//
// //Date.prototype.setUTCSeconds()
// const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// console.log(date1.getUTCSeconds());
// date1.setUTCSeconds(39);
// console.log(date1.getUTCSeconds());
//
// //Date.prototype.toDateString()
// const event = new Date(1993, 6, 28, 14, 39, 7);
// console.log(event.toString());      // (note: your timezone may vary)
// console.log(event.toDateString());
//
// //Date.prototype.toISOString()
// const event = new Date('05 October 2011 14:48 UTC');
// console.log(event.toString());    // (note: your timezone may vary)
// console.log(event.toISOString());
//
// //Date.prototype.toJSON()
// const event = new Date('August 19, 1975 23:15:30 UTC');
// const jsonDate = event.toJSON();
// console.log(jsonDate);
// console.log(new Date(jsonDate).toUTCString());
//
// //Date.prototype.toLocaleDateString()
// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options =
// {
// 	weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// };
// console.log(event.toLocaleDateString('de-DE', options));          //  (varies according to local timezone): Donnerstag, 20. Dezember 2012
// console.log(event.toLocaleDateString('ar-EG', options));           //  (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢
// console.log(event.toLocaleDateString(undefined, options));         // (varies according to local timezone and default locale): Thursday, December 20, 2012
//
// //Date.prototype.toLocaleString()
// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));     // British English uses day-month-year order and 24-hour time without AM/PM
// console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));     // Korean uses year-month-day order and 12-hour time with AM/PM
//
//  //Date.prototype.toLocaleTimeString()
// const event = new Date('August 19, 1975 23:15:30 GMT+00:00');
// console.log(event.toLocaleTimeString('en-US'));
// console.log(event.toLocaleTimeString('it-IT'));
// console.log(event.toLocaleTimeString('ar-EG'));
//
// //Date.prototype.toString()
// const event = new Date('August 19, 1975 23:15:30');
// console.log(event.toString());
//
// //Date.prototype.toTimeString()
// const event = new Date('August 19, 1975 23:15:30');
// console.log(event.toTimeString());
//
// //Date.prototype.toUTCString()
// const event = new Date('14 Jun 2017 00:00:00 PDT');
//
// console.log(event.toUTCString());
//
//
// //Date.UTC()
// const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
// const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
// console.log(utcDate1.toUTCString());
// console.log(utcDate2.toUTCString());
//
// //Date.prototype.valueOf()
// var date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
// console.log(date1.valueOf());
// var date2 = new Date('02 Feb 1996 03:04:05 GMT');
// console.log(date2.valueOf());

var x =prompt("Enter the date yyyy-mm-dd")
var givenDate=new Date(x);
var currentDay = givenDate.getDay();
var dateIsInWeekend = (currentDay === 6) || (currentDay === 0);
if(dateIsInWeekend==true){
   console.log("The given date "+givenDate+" is a Weekend");
} 
else 
{
   console.log("The given date " +givenDate+"is a not a Weekend");
}
