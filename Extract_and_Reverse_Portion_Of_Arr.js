let arr =[15, 30, 45, 60, 75, 90];
function extractAndReverse(arr, start, end) {
    
    let extract = arr.slice(start, end );

    let reverse = extract.reverse();
    
    return reverse;
}

console.log(extractAndReverse(arr,2,4))