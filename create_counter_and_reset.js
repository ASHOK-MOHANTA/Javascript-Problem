function createcounter(){
    let count=0;
    function increment(){
        count++;
        return count;
    }
    increment.reset = function(){
        count=0;
        return count;
    };
    return increment;
}

let counter = createcounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2 
console.log(counter.reset()); // Output: 0s
console.log(counter()); // Output: 1