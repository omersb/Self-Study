//* JS-CC-006 : Merge Arrays
//* Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

let list1 = [0, 1, 2, 4, 5, , ,];
let list2 = [1, 3, 4, 5, 6];

// function mergeArray (list1, list2) {
//     if (list1.length == 0 || list2.length == 0) {
//         return "Dolu liste gönderiniz."
//     } else {
//         let list3 = list1.concat(list2);
//         return list3;
//     }
    
// } console.log(mergeArray(list1, list2));

let list3 = list1.concat(list2).sort((a, b) => a - b).filter((v) => v != undefined)
console.log(list3);
