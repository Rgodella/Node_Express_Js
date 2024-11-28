/*JavaScript Closure
Lexical scoping that preserve the variable from outer scope of a function to the innner scope of a function.
Function having access to parent scope even parent scope has close
Remeber the data from the last call
*/

//self invoking functions - Immediately ececuted once they are declared!!
const add = (function(){
    let count = 0;
    return function(){
        return count++;
    }
})();

console.log(add()); //0
console.log(add()); //1
console.log(add()); //2


//Example Closure scope chain

const add1 =function sum(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

console.log(add1(4)(5)(6));
