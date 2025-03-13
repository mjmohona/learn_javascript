// Creating an object
const person = {
    name: "Alice",
    age: 25,
    isStudent: false,
    hobbies: ["reading", "cycling"],
    address: {
        city: "New York",
        zip: 10001
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Accessing object properties
console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 25
console.log(person.hobbies[0]); // Output: reading
console.log(person.address.city); // Output: New York

// Calling a method
person.greet(); // Output: Hello, my name is Alice

// Adding a new property
person.country = "USA";
console.log(person.country); // Output: USA

// Modifying a property
person.age = 26;
console.log(person.age); // Output: 26

// Deleting a property
delete person.isStudent;
console.log(person.isStudent); // Output: undefined
