
function calc(a,b)
{
    const add=a+b;
    const sub=a-b;
    const mul=a*b;
    const div=a/b;

    return [add,sub,mul,div];
}

const [add,sub,mul,div] = calc(7,4);

console.log("<p>Sum: " + add + "</p>");
console.log("<p>Difference " + sub + "</p>");
console.log("<p>Product: " + mul + "</p>");
console.log("<p>Quotient " + div + "</p>");




