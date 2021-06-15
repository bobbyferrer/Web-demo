import { Book, UI } from './model.js';

// Add Book To List

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
	// Get form values
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	// Instantiate book
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// Validate
	if (title === '' || author === '' || isbn === '') {
		// Error alert
		ui.showAlert('Please fill in all fields', 'error');
	} else {
		// Add book to list
		ui.addBookToList(book);

		// Show success
		ui.showAlert('Book Added!', 'success');

		// Clear fields
		ui.clearFields();
	}

	e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
	// Instantiate UI
	const ui = new UI();

	// Delete book
	ui.deleteBook(e.target);

	// Show message
	ui.showAlert('Book Removed!', 'success');

	e.preventDefault();
});
