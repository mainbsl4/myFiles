function sayHello(message, ...names){
  names.forEach(name => console.log(`${message} ${name}`));
}

sayHello('Hello', "John", "Smith", "Doe");
