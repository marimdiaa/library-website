 // Sample Book Data
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Moby Dick", author: "Herman Melville" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
];

// Display Books
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear existing books

    books.forEach((book) => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
        bookItem.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
        bookList.appendChild(bookItem);
    });
}

// Search Books
function searchBooks() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput)
    );
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear existing books

    filteredBooks.forEach((book) => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
        bookItem.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
        bookList.appendChild(bookItem);
    });
}

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Initialize
document.addEventListener("DOMContentLoaded", displayBooks);
