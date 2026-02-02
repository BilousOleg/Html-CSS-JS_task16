class Book {
  constructor(author, title, yearOfWriting, pagesCount, shelfNumber) {
    this.author = author;
    this.title = title;
    this.year = yearOfWriting;
    this.pages = pagesCount;
    this._shelf = shelfNumber;
    this._userId = null; // спочатку книга стоїть на полиці, і ніхто її не читає
  }
  isVacant() {
    return this._shelf !== null && this._userId === null;
  }
  getRent(id) {
    this._shelf = null;
    this._userId = id;
  }
  // Сюди б ще метод для повернення книги, встановлення this._shelf на вказаний в аргументі і this._userId = null,
  // але тоді треба ще створити об'єкт цілої бібліотеки для збереження вільних полиць і перевіряти на це в методі
}

class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    ({
      street: this.street,
      city: this.city,
      country: this.country,
      state: this.state,
    } = address);
  }
}

const book1 = new Book(
  'J. K. Rowling',
  'Harry Potter and the Chamber of secrets',
  1998,
  352,
  12,
);

console.table(book1);

const user1 = new User(2, 'Test', 'Testovych', {
  street: '123 Main Street',
  city: 'Anytown',
  country: 'USA',
  state: 'California',
});

console.table(user1);

// Перевірка роботи методів
console.log(book1.isVacant());
book1.getRent(user1.id);
console.log(book1.isVacant());
