$(document).ready(function() {
  smoothScrool(1000);

  timeRunOut(37,67);
  console.log('test');

});




function smoothScrool (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if (target.length) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);


      }

  });

}

function timeRunOut(elapsedTime, endTime) {
  let timeLeft = endTime - elapsedTime;
  console.log(timeLeft);
}


function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Bobi has ${favoriteBooks.length} favorite books`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

var favoriteBooks = [];

addFavoriteBook("5 Lat Kacetu");
addFavoriteBook("Great Wall in China");
addFavoriteBook("Metallica Biography");
addFavoriteBook("Witcher");
addFavoriteBook("Great Gatsby");

printFavoriteBooks();

var message1 ="There is ";
var monthsNumber = 11;
var message2 =" months left.";

console.log(message1 + monthsNumber + message2);

let workshop2Element = 20;

var workshopenrollment = workshop2Element.value;
console.log(workshopenrollment);

//NaN simple function

/* NOTES FROM FRONTEND MASTERS COURSES. NEED TO BE REWRITTEN INTO NOTEBOOK, AFTER BUYING

Three Pillars of JS

1. Types / Coercion   coercion means "przymus" in polish
2. Scope / Closures   "Zakres / Zamknięcia"
3. this / Prototypes

Types / Coercion

- Primitive Types
- Converting Types
- Checking Equality

"In JavaScript everything is an object" - It is NOT true

Primitive Types

- undefined
- string
- number
- boolean
- object
- symbol
- null (behaves little strangely)

In JavaScript variables DON'T have types,
Values DO.

Historical bug of JS. typeof v = null; gives answer that is an object. It should be null.

The way of convert one type to another is - "COERCION"

== double equals allow coercion (different types)

=== triple equals disallow coercion (same types)

*/
