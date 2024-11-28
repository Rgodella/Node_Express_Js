//Array operations 

let arr = [1,2,3,4,5];

//=====================BASICS================================

console.log("Math.max",Math.max.apply(null,arr));
console.log(arr.indexOf(3));
console.log(arr.includes(8));

//======================REDUCE================================

//Example -

const getMax = (a, b) => {
    console.log("a",a);
    console.log("b",b);
    return a+b};

console.log([50,90].reduce(getMax,30));

const arrr = arr.reduce((x,y)=>{
    console.log("init",x);
    return x+y;
})

console.log(arrr);

//==================FILTER=====================================

//Filter based on search criteria

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function searchF(arr,que){
        return arr.filter((row) =>{
           return row.toLowerCase().includes(que.toLowerCase())
});
            
}
console.log(searchF(fruits,"ap"));

//Find all prime numbers in an array

const prime = arr.filter((num)=>{

    for(let i=2;i<num;i++){
        if(num%i == 0){
            return false;
        }
    }
    return num >1;
})

console.log("prime",prime);

//Basic Operation
const newArr2 = arr.filter(check);

function check(num){
    return num>4;
}

console.log("new Arr",newArr2);

//====================MAP=======================================
//Create new Array!! And Traverse each element
const newArr = arr.map((x)=>{
    return x*2;
})

console.log(newArr);

//Iterate Each Element ForEach
arr.forEach((x)=>{
    console.log("X ",x);
})

//==========================FALTTENING==========================
//FlatMap
//Map All elements and reduce dimensionality!!

let arr1 = [1,[2,[3,4],[5,[6]]]];
const data = arr1.flat();
//Array.flat(Depth);

console.log("Data1",data);

const newt =arr1.flatMap((x) => [x, x * 2]);
//op : [1,2,2,4,3,6,4,8,5,10];
console.log("newt",newt);

