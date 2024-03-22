// Task 1 
class Author {
    constructor(firstName, lastName, country, arrayOfBooks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.arrayOfBooks = arrayOfBooks;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getBooks() {
        return this.arrayOfBooks
    } 
} 

class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}
const book1 = new Book('Game of Thrones','Epic Fantasy', 694); 
const book2 = new Book('Clash of Kings','Epic Fantasy', 768); 
const book3 = new Book('Storm of Swords','Epic Fantasy', 973); 

const author1 = new Author('George R.R', 'Martin', 'United States', [book1, book2, book3]);
console.log(author1.getFullName())
const books = [book1, book2, book3];
for(const book of author1.getBooks()) {
    console.log(book)
} 

// Task 4 
function Author1(firstName, lastName, country, arrayOfBooks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.arrayOfBooks = arrayOfBooks;
}

Author1.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
};

Author1.prototype.getBooks = function () {
    return this.arrayOfBooks
}

function BookA(title, genre, page) {
    this.title = title;
    this.genre = genre;
    this.page = page;
}

const book4 = new BookA('Game of Thrones','Epic Fantasy', 694); 
const book5 = new BookA('Clash of Kings','Epic Fantasy', 768); 
const book6 = new BookA('Storm of Swords','Epic Fantasy', 973); 

const author2 = new Author1('George R.R', 'Martin', 'United States', [book4, book5, book6]);
console.log(author2.getFullName())
const books1 = [book1, book2, book3];
for(const book of author2.getBooks()) {
    console.log(book)
}
