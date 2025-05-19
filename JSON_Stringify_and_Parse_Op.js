const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  isAdmin: false
};

let jsonstring = JSON.stringify(user);
let jsonobject = JSON.parse(jsonstring);
console.log(jsonobject);

// Output:
// Name: John Doe
// Age: 25
// Email: john@example.com
// Admin: false
