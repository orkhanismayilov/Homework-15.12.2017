var m = parseInt(Number(prompt("Enter amount of coins")));
console.log("Total amount of coins: " + m + " coins.");
var a = parseInt(Number(prompt("How many coins took the youngest pirate?")));
console.log("The youngest pirate took: " + a + " coins.")
var x = 0;
var z = parseInt(m / 3);

if (m > 0 && a > 0 && a < z) {
    while (a <= z) {
        z -= a;
        a++;
        x++;
    }
    // console.log(z);
    if (z == 0) {
        console.log("Total number of pirates: " + (x + 1));
    }else{
        console.warn(" Wrong given data!");
    }

} else {
    console.warn(" Wrong given data!");
}