// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert
function tellStory(array) {
  for (let i = 0; i < 3; i++) {
    if (typeof array[i] !== "string") {
      console.log("invalid input");
      return 0;
    }
  }
  console.log(
    `This is ${array[0]}. ${array[0]} is a nice person. Today they are feeling ${array[1]}. They are ${array[2]} all day. The end.`
  );
}

let array = ["Marija", "good", "working"];
tellStory(array);
