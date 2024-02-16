// has A relationship using Javascript

class Processor{
   constructor(brand,model){
     this.brand = brand;
     this.model = model;
   }
}

class Laptop{
    constructor(brand,model,processor){
       this.brand = brand;
       this.model = model;
       this.processor = processor;
    }

    getProcessor(){
      return this.processor;
    }
}

const processor = new Processor("Intel", "Core i5");
const laptop = new Laptop("Dell", "Inspiron", processor);
console.log(laptop);
