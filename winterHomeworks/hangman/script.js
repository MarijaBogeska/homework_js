$(document).ready(function () {
  let aplphabet = $(".alphabet");

  function getRandomFilm(film) {
    let array = [
      "GLADIATOR",
      "SUPERBAD",
      "BRIDESMAIDS",
      "TITANIC",
      "AVATAR",
      "HANGOVER",
      "PSYCHO",
      "INCEPTION",
    ];
    let i = Math.floor(Math.random() * array.length);
    film = array[i];
    return film;
  }
  function getHintLetter(movie, underscores) {
    let hiddenIndexes = [];
    for (let i = 0; i < movie.length; i++) {
      if (underscores[i] === "_") {
        hiddenIndexes.push(i);
      }
    }
    if (hiddenIndexes.length > 0) {
      let randomIndex =
        hiddenIndexes[Math.floor(Math.random() * hiddenIndexes.length)];
      return movie[randomIndex];
    }
    return null;
  }
  function disableButtons() {
    $("button").not("#hint, #playAgain").prop("disabled", true);
    $("button")
      .not("#hint, #playAgain")
      .css("background-color", "rgb(194, 165, 127)");
  }
  function replaceIndex(string, index, replacement) {
    let array = string.split("");
    array[index] = replacement;
    return array.join("");
  }

  let film = $("#word");
  let lives = $("#lives");
  let movie = getRandomFilm(film);
  let underscores = "_".repeat(movie.length);
  let remainingLives = 6;
  let man = $("#box");
  let remainingHints = 2;

  function updateImage(lives) {
    if (lives === 5) {
      man.css("background-image", "url('./photos/pic2.png')");
    } else if (lives === 4) {
      man.css("background-image", "url('./photos/pic3.png')");
    } else if (lives === 3) {
      man.css("background-image", "url('./photos/pic4.png')");
    } else if (lives === 2) {
      man.css("background-image", "url('./photos/pic5.png')");
    } else if (lives === 1) {
      man.css("background-image", "url('./photos/pic6.png')");
    } else if (lives === 0) {
      man.css("background-image", "url('./photos/pic7.png')");
    }
  }

  film.text(underscores.split("").join(" "));
  lives.text(`You have ${remainingLives} lives `);

  $("button")
    .not("#hint, #playAgain")
    .click(function () {
      let letter = $(this).text();
      let updatedUnderscores = underscores;
      let correctGuess = false;
      console.log(letter);

      for (let i = 0; i < movie.length; i++) {
        if (movie[i] === letter) {
          updatedUnderscores = replaceIndex(updatedUnderscores, i, letter);
          correctGuess = true;
        }
      }
      if (correctGuess) {
        underscores = updatedUnderscores;
        film.text(underscores.split("").join(" "));
        if (!underscores.includes("_")) {
          alert("You win, the movie was: " + movie);
          disableButtons();
        }
      } else {
        if (remainingLives > 0) {
          remainingLives--;
          lives.text(`You have ${remainingLives} lives`);
          updateImage(remainingLives);
        }
        if (remainingLives === 0) {
          alert("Game over, the movie was: " + movie);
          disableButtons();
        }
      }
      $(this).prop("disabled", true);
      $(this).css("background-color", "rgb(194, 165, 127)");
    });

  $("#playAgain").click(function () {
    location.reload(true);
  });

  $("#hint").text(`Hint: ${remainingHints}`);

  $("#hint").click(function () {
    if (remainingHints === 0) {
      alert("No hints remaining!");
      return;
    }
    if (remainingLives === 0 || !underscores.includes("_")) {
      alert("Game is over, no more hints allowed!");
      return;
    }

    let correctGuess = false;
    let char = getHintLetter(movie, underscores);
    if (!char) {
      alert("No hidden letters left to reveal!");
      return;
    }

    let updatedUnderscores = underscores;
    for (let i = 0; i < movie.length; i++) {
      if (movie[i] === char) {
        updatedUnderscores = replaceIndex(updatedUnderscores, i, char);
        correctGuess = true;
      }
    }

    if (correctGuess) {
      remainingHints--;
      underscores = updatedUnderscores;
      film.text(underscores.split("").join(" "));
      $(this).text(`Hint: ${remainingHints}`);
      if (!underscores.includes("_")) {
        alert("You win, the movie was: " + movie);
      }
    }
  });
});
