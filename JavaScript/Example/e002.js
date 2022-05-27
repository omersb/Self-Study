//* JS-CC-005 : Roman Numerals
//* Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).
// let numara = document.getElementById("numara").innerHTML
// let roman = document.getElementById("roma").innerHTML

// function convertToRoman(num) {
//     let roman = '';
//     let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     for (let i = 0; i < decimal.length; i++) {
//         while (decimal[i] <= num) {
//             roman += romanNum[i];
//             num -= decimal[i];
//         }
//     }
//     return roman;
// } 

// let sayı = prompt("Bir sayı giriniz: ")
// console.log(convertToRoman(sayı));   

    let num = 2770;
    let roman = '';
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let bolum =0;
    for (let i = 0; i < decimal.length; i++){
        bolum = Math.floor(num / decimal[i]);
        num = num % decimal[i];
        for(let k = 0; k < bolum; k++){
            roman += romanNum[i]
        }        
        console.log(bolum);
    }console.log(roman);