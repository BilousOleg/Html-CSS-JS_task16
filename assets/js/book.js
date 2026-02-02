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
