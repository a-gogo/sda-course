function algorithm(a,b){
    var x = 1;
    var result = 1;
    while(x<=b){
        result *=a;
        x++;
    }
    return result;
}

console.log(algorithm(9,8))
console.log(algorithm(2,2))