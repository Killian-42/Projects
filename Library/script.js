const myLibrary = [];

function Book(title, author, pages, isRead, id) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${isRead}, ${this.id}`;
	};
}

function addBookToLibrary(title, author, pages, isRead) {
	let id = crypto.randomUUID();
	let newBook = new Book(title, author, pages, isRead, id);
	myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'JRR Tolkien', 299, 'Not read');
addBookToLibrary('The Lord of The Rings', 'JRR Tolkien', 2000, 'Read');
console.log(myLibrary[0].info());
console.log(myLibrary[1].info());

console.log(myLibrary);
// console.log(myLibrary);
