const Original= { name: "Alice", hobbies: ["reading", "traveling"] }
let deepcopy = JSON.parse(JSON.stringify(Original));
deepcopy.hobbies.push("coding");
console.log(Original)
console.log(deepcopy)
