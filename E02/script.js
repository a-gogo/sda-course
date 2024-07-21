for(var i = 10; i<=20; i++){

console.log("for loop:",i)
}

var j = 10;
while(j <= 20){
    console.log("while loop",j);
    j++;
}
var k = 10;
do{
    console.log(k);
    k++;
}
while(k<=20);
do{
    console.log("while loop",i);
}
while(i<=20);

for(var i=10; i<=20; i+=2){
    console.log(i); 
}

function numbers(a,b){
    for(var i = a; i <= b; i+=2){
        console.log("general", i);
    }
}

function number(a,b){
    if(a<b){
        console.log("function called")

        var c;
        if(a<b){
            for(var i = a; i<=b; i+=2){
                console.log(i)
            }
        }}else {
        for(var i = a; i<=b; i+=2){
            console.log(i);
        }
    }
}

numbers(10,20);


