var n = parseInt(Number(prompt("Enter a number more than 0")));
var a = 1;
var x = 0;

if (n > 0) {
    while (n >= a) {
        if (n % a == 0) {
            if (a % 2 == 1) {
                console.log(a);
            }
        }
        a++;
    }
} else {
    console.log("Wrong number!");
}