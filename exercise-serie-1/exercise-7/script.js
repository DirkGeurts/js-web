//Check to see if script is linked properly.
console.log("This script is linked properly!")

let turn = 0;
let word = document.getElementById("btn")

//Write your JS code here...
function Move() {
    turn++;
    if (turn === 11) {
        turn = 0;
    }
    let btn = document.getElementById("btn")
    btn.style.top = Math.floor((Math.random() * 200) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * 230) + 1) + "px";

    switch (turn) {
        case 0:
            word.textContent = "hit me once"
            break
        case 1:
            word.textContent = "hit me twice"
            break
        case 2:
            word.textContent = "hit me three times  "
            break
        case 3:
            word.textContent = "hit me four times"
            break
        case 4:
            word.textContent = "hit me five times"
            break
        case 5:
            word.textContent = "hit me six times"
            break
        case 6:
            word.textContent = "hit me seven times"
            break
        case 7:
            word.textContent = "hit me eight times"
            break
        case 8:
            word.textContent = "hit me nine times"
            break
        case 9:
            word.textContent = "hit me ten times"
            break
        case 10:
            word.textContent = "try again"
            break
        case 11:

    }
}
