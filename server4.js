function filterAndCapitalizeBooks(books) {
    const filteredBooks = books.filter((book) => book.year >= 2010);
  
    const capitalizedBooks = filteredBooks.map((book) => {
      const capitalizedAuthor = book.author.toUpperCase();
      return { ...book, author: capitalizedAuthor };
    });
  
    return capitalizedBooks;
  }
  
  // Example usage
  const books = [
    { title: "Book 1", author: "Author 1", year: 2005 },
    { title: "Book 2", author: "Author 2", year: 2012 },
    { title: "Book 3", author: "Author 3", year: 2008 },
    { title: "Book 4", author: "Author 4", year: 2015 },
  ];
  
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  console.log(filteredAndCapitalizedBooks);
  