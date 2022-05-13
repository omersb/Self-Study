let asd = "Everything you get your heart desires"

let x = asd.split(" ")
let result = []
for (let i = 0; i < x.length; i++) {
    result.push(x[i].split("").reverse().join(""));
}

console.log(result.join(" "))