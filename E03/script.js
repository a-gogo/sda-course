var tab = [1,2,3,4,5,6,7,8,9,10];
console.log(tab)

var a = tab.pop();
console.log(a);
tab.push(11);

var tab = [1,2,3,4,5,6,7,8,9,10];
console.log(tab);
tab[1]=15;
console.log(tab);


for(var i=0; i < tab.length; i+=3){
  tab[i] = 1;
}
console.log(tab);
