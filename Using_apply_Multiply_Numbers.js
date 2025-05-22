function multiplaynumbers(a,b){
    function multiply(x, y) {
        return x * y;
    }
    return multiply.apply(null, [a, b]);
}

console.log(multiplaynumbers(2, 3))
