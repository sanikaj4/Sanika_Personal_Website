let x = 5;
let y = 7;
let A = "Hello ";
let B = "world!";

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
    return x3
}
let z = SumNPrint(x, y);
let C = SumNPrint(A, B);
console.log(C);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array, arrayName) {
    array.forEach(function(item, index) {
        if (item === "Banana") {
            alert(`We found the Banana in the ${arrayName} at index ${index}`);
        }
    });
}
findTheBanana(L1, "first array");
findTheBanana(L2, "second array");

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Good morning, I am Sanika!";
    } else if (h < 18) {
        E.innerHTML = "Good afternoon, I am Sanika!";
    } else if (h < 20) {
        E.innerHTML = "Good evening, I am Sanika!";
    } else if (h < 24 || h < 5) {
        E.innerHTML = "Good night, I am Sanika!";
    }
}
greetingFunc();