var n = parseInt(Number(prompt("Enter postiive number")));
var a = 1;
var count = 0;

if (n > 0) {
    while (n >= a) {
        if (n % a == 0) {
            count++;
        }
        a++;
    }
    console.log(count);
} else {
    console.log("Wrong number!");
}