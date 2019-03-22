//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function getAge() {
    year = document.getElementById('year').value;
    month = document.getElementById('month').value;
    day = document.getElementById('day').value;
    let date = month + "/" + day + "/" + year;
  
  if(isValidDate(date)) {
    document.getElementById("age").innerHTML = getAge2(year + "/" + month + "/" + day);
  }
  else {
    document.getElementById("age").innerHTML = "Invalid date!";
  }
  }
  
  function getAge2(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }
  
  function isValidDate(dateString)
  {
      // First check for the pattern
      if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
          return false;
  
      // Parse the date parts to integers
      var parts = dateString.split("/");
      var day = parseInt(parts[1], 10);
      var month = parseInt(parts[0], 10);
      var year = parseInt(parts[2], 10);
  
      // Check the ranges of month and year
      if(year < 1000 || year > 3000 || month == 0 || month > 12)
          return false;
  
      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  
      // Adjust for leap years
      if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;
  
      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
  };