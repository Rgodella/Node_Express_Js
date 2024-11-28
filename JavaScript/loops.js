//Loops in JS 
// For / For IN / For OF / While / Do while

//===========FOR IN =======================
//It loops through the property of an object.
//And returns the keys of the object

let Person = {
    fname : 'Rahul',
    lname : 'Godella',
    age   :  24
}
for(let x in Person){
    //Key
    console.log(x);
    //Value
    console.log(Person[x]);
}

//NOTE : Don't use for in loop if index is required.

//===================FOR OF===========================

//Loop through the values of an iterable Object.

let arr = ["Rahul","Depp",'Priya'];
for(let x of arr){
    console.log(x);
}

//===================WHILE============================

let m = 10;
while(m--){
    console.log("m",m);
}
