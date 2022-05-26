//* JS-CC-006 : Merge Arrays
//* Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

let list1 = [1, 2, 3, 4, 5];
let list2 = [6, 7, 8, 9, 10];

function mergeArray (list1, list2) {
    if (list1.length == 0 || list2.length == 0) {
        return "Dolu liste gönderiniz."
    } else {
        let list3 = list1.concat(list2);
        return list3;
    }
    
} console.log(mergeArray(list1, list2));