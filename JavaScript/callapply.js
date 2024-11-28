// ================ CALL APPLY AND BIND ===================
//These are the methods for explicit function binding

//===================CALL========================
/* Using call and Apply method to call an Object method with another object as an argument*/

// const obj1 = {
//     'name' : "Rahul",
//     'age' : 24
// }

// const obj2 = {
//     fullName : function(){
//         return this.name + "'s Age is " + this.age;
//     }
// }

// let x =obj2.fullName.call(obj1);
// console.log(x);

function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
  }
  
  const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
  };
  
  greet.call(obj); // cats typically sleep between 12 and 16 hours



  //======================BIND===================================

  const obj2 = {
    fullName : function(){
        return this.animal + " and " + this.sleepDuration;
    }
  }

  const x = obj2.fullName.bind(obj);
  console.log(x());
