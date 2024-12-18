// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt() or read them from HTML

let book = {
  title: "The Robots of dawn",
  author: "Isaac Asimov",
  readingStatus: true,
  info: function () {
    if (this.readingStatus == true) {
      console.log(`Already read ${book.title} by ${book.author}`);
    } else if (this.readingStatus === false) {
      console.log(`You still need to read ${book.title} by ${book.author}`);
    }
  },
};
book.info();
console.log(book.title);
