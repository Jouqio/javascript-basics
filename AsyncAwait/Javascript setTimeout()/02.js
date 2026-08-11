// program to display time every 3 seconds
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // returns the current local time
  let time = dateTime.toLocaleTimeString();

  console.log(time);

  // display the time after 3 seconds
  setTimeout(showTime, 3000);
}

// calling the function
showTime();

// program to display a name
function greet(name, lastName) {
  console.log("Hello" + " " + name + " " + lastName);
}

// passing argument to setTimeout
setTimeout(greet, 1000, "John", "Doe");
