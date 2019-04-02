//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function refreshCat() {
    axios.get('https://aws.random.cat/meow')
      .then(function (response) {
        document.getElementById("imageid").src= response['data']['file'];
        document.getElementById("imageid").style.width = "300px";
        document.getElementById("imageid").style.height = "300px";
      })
    setTimeout(function(){
      refreshCat();
  }, 3000);
  }
  