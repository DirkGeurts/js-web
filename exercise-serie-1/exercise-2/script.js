//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function calculate(action)
{
  let value1 = Number(document.getElementById('value1').value);
  let value2 = Number(document.getElementById('value2').value);
  let result = document.getElementById('result');
  if(action == "+") { result.value = value1 + value2; }
  if(action == "-") { result.value = value1 - value2; }
  if(action == "*") { result.value = value1 * value2; }
  if(action == "/") { result.value = value1 / value2; }
}