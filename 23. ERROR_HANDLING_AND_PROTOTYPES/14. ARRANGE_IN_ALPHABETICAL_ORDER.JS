/*Arrange in alphabetical order.

Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order. */

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    },
    {
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        year: 1927
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        year: 1967
    },
];

function extractTitles(books,callBack){
    const titles = books.map((book) => book.title);
    return callBack(titles);
};

function logTitles(titles){
    titles.sort();
    console.log(titles.join(' , '));
}

console.log(extractTitles(books,logTitles));
