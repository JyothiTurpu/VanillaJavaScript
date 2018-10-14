class Book{
  constructor(title,author,isbn)
  {
    this.title = title;
    this.author= author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(book)
  {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a id=${book.isbn} href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }


  clearFields()
  {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = ''; 
  }

  showAlert(message,className)
  {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const parentNode = document.querySelector('.container');
    const refNode = document.querySelector('#book-form');

    parentNode.insertBefore(div,refNode);

    window.setTimeout(function(){document.querySelector('.alert').remove()},3000);
  }

  deleteBook(target)
  {
    if(target.className === 'delete')
    {
      target.parentNode.parentNode.remove();
    }
  }
}

class Store{
  static displayBooks(){
    const books = Store.getBooks();
    if(books.length != 0){
        const ui = new UI();
        books.forEach(function(book){
        ui.addBookToList(book);
      });
    }
  }

  static getBooks()
  {
    let books;
    if(localStorage.getItem("books") == null)
    {
      books = [];
    }
    else{
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;

  }

  static addBook(book)
  {
    const books = Store.getBooks();
    books.push(book);

    localStorage.setItem("books",JSON.stringify(books));
  }

  static removeBook(isbn)
  {
    const books = Store.getBooks();
    books.forEach(function(book,index){
      if(book.isbn === isbn)
        books.splice(index,1);
    });

    localStorage.setItem("books",JSON.stringify(books));
  }
}


document.getElementById('book-form').addEventListener('submit',function(e){

  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value;

  const book = new Book(title,author,isbn);

  const ui = new UI();
  if(title === '' || author ==='' || isbn === '')
  {
    ui.showAlert('Please fill in all fields','error');
  }
  else{
    ui.addBookToList(book);
    Store.addBook(book);
    ui.showAlert('Book Added','success');
    ui.clearFields();
  }
  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){

  const ui = new UI();
  ui.deleteBook(e.target);
  Store.removeBook(e.target.id);
  ui.showAlert('Book Deleted successfully','success');
  
e.preventDefault();
});

document.addEventListener('DOMContentLoaded',Store.displayBooks());