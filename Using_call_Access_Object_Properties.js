const person={
    name:"Ashok",
    age:24,
};

function personinfo(){
    return `Name: ${this.name}, Age: ${this.age}`;

}
console.log(personinfo.call(person));
