function marsExploration(s) {
    const sos = "SOS";
    return s.split("").reduce((prev, curr, currIndex) => {
        if (curr !== sos[currIndex % sos.length]) {
            prev += 1;
        }

        return prev;
    }, 0);
}


============================================================

function balancedSums(arr) {
    // Write your code here
    
    let totalSum = arr.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum -= arr[i];

        if (leftSum === totalSum) {
            return "YES";
        }

        leftSum += arr[i];
    }

    return "NO";

}

===========================================================

function minimumAbsoluteDifference(arr) {
    // Write your code here
    
    if (arr.length < 2) {
        return 0; // No difference possible if there are fewer than 2 elements
    }

    // Sort the array first
    arr.sort((a, b) => a - b);

    // Initialize the minimum difference to a large number
    let minDiff = Infinity;

    // Iterate through the array and find the minimum difference
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
}

==================================================================================

function jimOrders(orders) {
    // Write your code here

    let res = {};
    
    for(let i = 0; i<orders.length; i++){
        let sum=0;
        for(let j =0; j< orders[i].length; j++){
            sum+=orders[i][j];
        }
        res[i+1]=sum;
    }
    
    let sorted = Object.keys(res).sort((a,b) => res[a] - res[b]);
    return sorted;

}

=============================================================================

function toys(w) {
    // Write your code here
    let sorted = w.sort((a,b) => a-b);
    let container = 1, max_weight= w[0] + 4;
    
    for(let weight of sorted){
        if(weight<=max_weight){
            continue
        }
        container+=1;
        max_weight = weight+4;
    }
    
    
    return container;
}

==================================================================================

function lonelyinteger(a) {
    // Write your code here
    let res = [];
    
    a.forEach(n => {
        if(res.includes(n)){
            let index = res.findIndex(ele => ele === n);
            res.splice(index, 1);
        }else{
            res.push(n)
        }
    })
    
    return res;
}

==================================================================================

const countOccur = (str) => {
let res = [];

for(let s of str){
    let popped = res.pop();
    if(popped !== undefined && popped.charAt(0) === s){
        let nextCount = +popped.substr(1,) + 1;
        res.push(s + nextCount);
    } else{
        if(popped !== undefined){
            res.push(popped);
        }
        res.push(s+1);
    }
}

 console.log(res.join(''));
}

countOccur("qqqyyhhhhaaaavvvvbbb") //count the occurence of each letter in place

=====================================================================================
