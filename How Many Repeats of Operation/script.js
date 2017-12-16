var n = parseInt(Number(prompt("Enter a number")));
var a = n;
var digitSum = 0;
var count = 0;

if (n > 0) {
    console.log("Your number is "+n);
    while (n > 0) {
        while (n > 0) {
            digitSum = digitSum + (n % 10);
            // console.log(digitSum);
            n = (n - digitSum) / 10;
            // console.log(n);
        }
        console.log("Sum of digits from " + a + " = " + digitSum);
        a = a - digitSum;
        digitSum = 0;
        // console.log(digitSum);
        // console.log(a);
        n = a;
        // console.log(n);
        count++;
    }
    console.log("Operation repeats " + count + " times");

} else {
    console.error("Wrong number!");
}
