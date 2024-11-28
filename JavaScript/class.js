//====================CLASS=================

class School{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    fullName() {
        console.log(this.name + " & " + this.age);
    }
}

const c = new School("rahul",23);
c.fullName();

//Write a code to find Rahul's current age based on DOB and current year.

class DOB{
    constructor(name,yob){
        this.name = name;
        this.yob = yob;
    }
    age(currentYear){
        return `Rahul's Current age is `+ (currentYear - this.yob);
    }
}

const dob = new DOB("Rahul",2000);
console.log(dob.age(new Date().getFullYear()));
//OUTPUT : Rahul's Current age is 24