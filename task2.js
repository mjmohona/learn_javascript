let arr = [2, 5, 4, 6, 7];

let highest = arr[0];
let secondHighest = arr[0];

for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    if (current > highest) {
        secondHighest = highest;
        highest = current;
    } else if (current > secondHighest && current !== highest) {
        secondHighest = current;
    }
}

console.log("Second highest number is:", secondHighest);

