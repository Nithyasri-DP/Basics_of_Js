const prompt=require("prompt-sync")({sigint:true});
const n = parseFloat(prompt("Enter number: "));
let i = 1;
for (i = 1; i < n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}
console.log(n);
