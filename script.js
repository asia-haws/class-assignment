class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;

  }

  introduce() {
    console.log("Hi my name is " + this.name + " and I am " + this.age + " years old!")
  }
}

alice = new Person("Alice", 25)

alice.introduce()

console.log(alice)


class Counter {
  constructor () {
    this.value = 0;
  }


  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
    
  }

  clear() {
    this.value = 0;
  }


  getValue() {
    return this.value
  }
}

const counter = new Counter();

counter.increment();
console.log(counter.getValue());

counter.increment();
console.log(counter.getValue());

counter.decrement();
console.log(counter.getValue());

counter.clear();
console.log(counter.getValue());

counter.decrement();
console.log(counter.getValue());


class BankAccount {
  constructor (first, last, balance) {
    this.first = first;
    this.last = last;
    this.balance = balance;

  }


  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount){
    if (amount > this.balance) {
      console.log("Error insufficent funds.")
    }
    else {
      this.balance -= amount;
    }
  }

  getBalance() {
    console.log(this.balance)
  }
}


const account = new BankAccount("Asia", "Haws", 300)

account.deposit(90);
account.getBalance();

account.withdraw(40);
account.getBalance();

account.withdraw(900);
account.getBalance();

