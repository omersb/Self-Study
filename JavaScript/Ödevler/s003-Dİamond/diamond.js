//? JS-CC-010 : Draw Diamond with Star Character
//? The purpose of this coding challenge is to draw an empty diamond figure (only the outline) into textarea field, using star character (*). Take the number of rows from user and draw the diamond figure accordingly. Add event listener to the input field and call the function when the user enters or changes the value.
//! Learning Outcomes
//! At the end of the this coding challenge, students will be able to;
//! Analyze a problem, identify and apply programming knowledge for appropriate solution.
//! Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.
//! Use the DOM to manipulate the page.
//! Become familiar with the DOM Events API.

function diamond(row) {
  s = '';
  // upper
  for (i = 1; i < row + 1; i++) {
    s += '\n';
    for (j = 1; j <= row - i + 1; j++) {
      s += ' ';
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      if (j == 1 || j == 2 * i - 1) {
        s += '*';
      } else {
        s += ' ';
      }
    }
    for (j = 1; j <= row - i + 1; j++) {
      s += ' ';
    }
  }
  // bellow
  for (i = row - 1; i > 0; i--) {
    s += '\n';
    for (j = 1; j <= row - i + 1; j++) {
      s += ' ';
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      if (j == 1 || j == 2 * i - 1) {
        s += '*';
      } else {
        s += ' ';
      }
    }
    for (j = 1; j <= row - i + 1; j++) {
      s += ' ';
    }
  }
  return s;
}
console.log(diamond(5));
