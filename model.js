// Book Constructor
export function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
export function UI() {}
UI.prototype.addBookToList = function(book) {
	const list = document.getElementById('book-list');
	// Create tr element
	const row = document.createElement('tr');
	// Insert cols
	row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

	list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
	// Create div
	const div = document.createElement('div');
	// Add classes
	div.className = `alert ${className}`;
	// Add text
	div.appendChild(document.createTextNode(message));
	// Get parent
	const container = document.querySelector('.container');
	// Get form
	const form = document.querySelector('#book-form');
	// Insert alert
	container.insertBefore(div, form);

	// Timeout after 3 sec
	setTimeout(function() {
		document.querySelector('.alert').remove();
	}, 3000);
};

// Delete Book
UI.prototype.deleteBook = function(target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};

// Clear Fields
UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};
