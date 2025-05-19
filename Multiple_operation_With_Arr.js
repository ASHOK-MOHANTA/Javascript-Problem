let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];


function findevennum(arr){
    return arr.filter(num => num%2 ===0);
}

function sumofarr(arr){
    return arr.reduce((acc,num)=> acc+num,0);
}

function sortandconcat(arr1,arr2){
    let sortedarr1 = arr1.sort((a,b) => a-b);
    let sortedarr2 = arr2.sort((a,b) => a-b);
    return sortedarr1.concat(sortedarr2);
}
console.log(findevennum(arr1));
console.log(findevennum(arr2));
console.log(sumofarr(arr1));
console.log(sumofarr(arr2));
console.log(sortandconcat(arr1,arr2));