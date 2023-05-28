// Roll number array
var rollNumbers = [101, 102, 103, 104, 105];

// Function to check roll number status
function checkRollNumber(rollNumber) {
  if (rollNumbers.includes(rollNumber)) {
    return "Pass";
  } else {
    return "Fail";
  }
}

// Prompting user to enter roll number
var input = prompt("Enter your roll number:");

// Converting user input to a number
var userRollNumber = parseInt(input);

// Checking roll number status and displaying the result
var result = checkRollNumber(userRollNumber);
if (result === "Pass") {
  console.log("Congratulation your orientation class on moday"+"your result is" + result);
} else {
  console.log("Roll number " + userRollNumber + " is not found. Result: " + result);
}
 
