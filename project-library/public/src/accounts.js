function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
  //
  return accounts.find(account => account.id === id);

}

function sortAccountsByLastName(accounts) {
  // Use the sort method to sort the accounts array by last name
  accounts.sort((a, b) => {
    // Extract last names from account objects
    const lastNameA = a.name.last.toLowerCase();
    const lastNameB = b.name.last.toLowerCase();
    
    // Compare last names and return the result
    if (lastNameA < lastNameB) {
      return -1;
    } else if (lastNameA > lastNameB) {
      return 1;
    } else {
      return 0;
    }
  });

  // Return the sorted accounts array
  return accounts;
}


function getAccountFullNames(accounts) {
  // Use the map method to extract full names from each account object
  const fullNames = accounts.map(account => {
    // Combine first name and last name into a full name string
    return `${account.name.first} ${account.name.last}`;
  });

  // Return the array of full names
  return fullNames;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
