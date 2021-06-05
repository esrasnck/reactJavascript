export class Customer{  // customer ın alanları construtor pattern ile oluşturuyoruz

    constructor(id,customerNumber){
     // bu customer ve number a ulaşabilmek için de
    // this => instance'a karşılık gelir

     this.id =id;
     this.customerNumber =customerNumber

    }

}

let customer = new Customer(1,"123456");

// prototyping = bir nesneye bambaşka bir özellik ekleyerek onu eklemiş oluyorsun
customer.name ="Murat Kurtboğan"  // instance a yapılan prototyping
console.log(customer.name);
console.log(customer.id+ " : " +customer.customerNumber)
// statik de yapabiliriz

Customer.bisey = "Bisey"  // class a yapılan prototyping

console.log(Customer.bisey);

class IndividualCustomer extends Customer{

    constructor(firstName,id, customerNumber){
      super(id,customerNumber)   // superi çalıştır. prototypeları oluştur
      this.firstName =firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
    super(id,customerNumber)
    this.companyName =companyName

}
}

// 3 : 08 de kaldım