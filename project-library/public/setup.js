function findAccountById(accounts, id) {
    return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
    return accounts.sort((accountA, accountB) => accountA.name.last.localeCompare(accountB.name.last));
}

function getAccountFullNames(accounts) {
    return accounts.map(account => `${account.name.first} ${account.name.last}`);
}
function findAuthorById(authors, id) {
    return authors.find(author => author.id === id);
}
function findBookById(books, id) {
    return books.find(book => book.id === id);
}
function partitionBooksByBorrowedStatus(books) {
    const checkedOut = books.filter(book => book.borrows[0].returned === false);
    const returned = books.filter(book => book.borrows[0].returned === true);
    return [checkedOut, returned];
}
function getTotalBooksCount(books) {
    return books.length;
}
function getTotalAccountsCount(accounts) {
    return accounts.length;
}
function getBooksBorrowedCount(books) {
    const checkedOutBooks = books.filter(book => book.borrows[0].returned === false);
    return checkedOutBooks.length;
}




const module = { exports: {} };
