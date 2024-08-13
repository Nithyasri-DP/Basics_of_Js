function findsum(n) {
    let sum = 0;
    for(let i =1; i<=n; i++)
        sum=sum+i;
    return sum;
}
const n=7;
console.log(findsum(n));