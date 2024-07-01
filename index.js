const express = require("express");
const app = express();
const port = 3000;

//heights/sort-ascending
let heights = [160, 165, 170, 175, 180];
function sortHeightsAscending(heights1, heights2) {
  return heights1 - heights2;
}
app.get("/heights/sort-ascending", (req, res) => {
  let sortedHeights = heights.sort();
  sortedHeights.sort(sortHeightsAscending);
  res.json(sortedHeights);
});

// heights/sort-descending
function sortHeightsDescending(heights1, heights2) {
  return heights2 - heights1;
}
app.get("/heights/sort-descending", (req, res) => {
  let sortedHeights = heights.slice();
  sortedHeights.sort(sortHeightsDescending);
  res.json(sortedHeights);
});

// employees/sort-by-salary-descending
let employees = [
  { name: "John", employeeId: 101, salary: 75000 },
  { name: "Jack", employeeId: 102, salary: 65000 },
  { name: "Jill", employeeId: 103, salary: 79000 },
  { name: "Jane", employeeId: 104, salary: 48000 },
];

function sortEmployeesBySalaryDescending(employee1, employee2) {
  return employee2.salary - employee1.salary;
}
app.get("/employees/sort-by-salary-descending", (req, res) => {
  let sortedEmployees = employees.slice();
  sortedEmployees.sort(sortEmployeesBySalaryDescending);
  res.json(sortedEmployees);
});

// books/sort-by-pages-ascending
let books = [
  { titile: "The of Small Things", author: "Morrison", pages: 290 },
  { titile: "The Great Gatsby", author: "Fitzgerald", pages: 180 },
  { titile: "To Kill a Mockingbird", author: "Lee", pages: 380 },
  { titile: "The Catcher in the Rye", author: "Salinger", pages: 275 },
];

function sortBooksByPagesAscending(book1, book2) {
  return book1.pages - book2.pages;
}

app.get("/books/sort-by-pages-ascending", (req, res) => {
  let sortedBooks = books.slice();
  sortedBooks.sort(sortBooksByPagesAscending);
  res.json(sortedBooks);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
