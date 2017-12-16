var m = parseInt(Number(prompt("Enter amount of coins")));
console.log("Total amount of coins: " + m + " coins.");
var a = parseInt(Number(prompt("How many coins took the youngest pirate?")));
console.log("The youngest pirate took: " + a + " coins.")
var x = 1;
var z = parseInt(m / 3);

if (m >= 0 && a >= 0 && a < z) {
    while (a < z) {
        a++;
    }
    x++;
    console.log("Total number of pirates: " + (x + 1));
    console.log(z % (x + 1) + " Coins left.");

} else {
    console.log("Wrong given data!");
}