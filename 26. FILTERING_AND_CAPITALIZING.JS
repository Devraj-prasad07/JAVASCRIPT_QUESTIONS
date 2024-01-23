/* Filtering and Capitalizing: Books Published After 2010 with Author Names.

 /* Write a program that takes a list of books, including their authors and publication years as input.
  The program should then filter out all books that were published before 2010 and create a new array 
  with the remaining books, but with their author names capitalized. */

let authorsData = [
    {authorName: "Shubhra Gupta" , bookName : "Irrfan Khan: A Life in Movies" , year : 2010},
    {authorName: "J. R. Moehringer" , bookName : "Spare" , year : 2012},
    {authorName: "Kaki Madhava Rao" , bookName : "Breaking Barriers: the Story of a Dalit Chief" , year : 2011},
    {authorName: "Shashi Tharoor", bookName : "Ambedkar: A Life", year: 2008},
    {authorName: "Dr. Ashvini Kumar Dwivedi", bookName: "Human Anatomy", year : 2006},
];

function filterAndCapitalize(authorsData){
    const filterData = authorsData.filter(authorsData => authorsData.year <= 2010);
    const capitalized = filterData.map(authorsData => ({
    authorName : authorsData.authorName.toUpperCase(),
    bookName : authorsData.bookName,
    year : authorsData.year,
    }));
    return capitalized;
}

console.log(filterAndCapitalize(authorsData));

	
	
	