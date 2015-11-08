function Person() {
  this.name = 'YAMADA';
  this.age = 34;
  this.hello = () => {
    console.log('hello' + this.name);
  }
}

var person = new Person();
person.hello();
