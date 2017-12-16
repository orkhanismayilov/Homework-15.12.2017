var x = parseInt(Number(prompt("Enter an non-negative number")));
var count = 0;

if (x > 0) {
    while (x > 0) {
        x = parseInt(x / 10);
        count++;
    }
    console.log(count);
} else {
    console.log("Wrong number!");
}
