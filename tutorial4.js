// Is A relationship using Javascript

class Person{
    constructor(name,age){
       this.name = name;
       this.age = age;
    }
}

class Student extends Person{
     constructor(class,roll_no,name,age){
         super(name,age);
         this.class = class;
         this.roll_no = roll_no; 
     }
}

const stud1 = new Student('IX',10,'James',14);
const stud2 = new Student('X',16,''Frank',15);

console.log(stud1);
console.log(stud2);
