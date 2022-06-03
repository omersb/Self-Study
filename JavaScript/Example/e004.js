// JS-CC-007 : Count Digits
// Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

// For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.
console.log(countDigits(5,30, 39));

function countDigits(digit, low, high) { 
    let count = 0;
    if (digit <0 || digit > 9 || high < low || low <0) {
        return -1;       
    } else {
        for (let i = low; i < high; i++){
            i.toString()
            .split("")
            .forEach((x) => {
                if (x == digit) {
                    count++;
                }                
            });          
        }
    }
    // returning value should be int type.
    return count;    
};
