// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs
let dog={
    name: "Lara",
    kind: "labrador",
    speak: function(message){
            console.log(`Dog says: ${message}`)
        }
}
console.log(dog.name);
let message= prompt("Enter a dog message");
dog.speak(message);

