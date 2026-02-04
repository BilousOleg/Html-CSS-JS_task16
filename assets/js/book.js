class Book {
  constructor(author, title, yearOfWriting, pagesCount, shelfNumber) {
    this.author = author;
    this.title = title;
    this.year = yearOfWriting;
    this.pages = pagesCount;
    this.shelf = shelfNumber;
    this._userId = null; // спочатку книга стоїть на полиці, і ніхто її не читає
  }

  set author(value) {
    checkType(value, 'string');
    this._author = checkStringEmpty(value);
  }

  get author() {
    return this._author;
  }

  set title(value) {
    checkType(value, 'string');
    this._title = checkStringEmpty(value);
  }

  get title() {
    return this._title;
  }

  set year(value) {
    checkType(value, 'number');
    checkNumberRange(value, 0);
    this._year = value;
  }

  get year() {
    return this._year;
  }

  set pages(value) {
    checkType(value, 'number');
    checkNumberRange(value, 1);
    this._pages = value;
  }

  get pages() {
    return this._pages;
  }

  set shelf(value) {
    checkType(value, 'number');
    checkNumberRange(value, 1);
    this._shelf = value;
  }

  get shelf() {
    return this._shelf;
  }

  set userId(value) {
    checkType(value, 'number');
    checkNumberRange(value, 0);
    this._userId = value;
  }

  get userId() {
    return this._userId;
  }

  isVacant() {
    return this._shelf !== null && this._userId === null;
  }
  getRent(id) {
    this._shelf = null;
    this.userId = id;
  }
  // Сюди б ще метод для повернення книги, встановлення this._shelf на вказаний в аргументі і this._userId = null,
  // але тоді треба ще створити об'єкт цілої бібліотеки для збереження вільних полиць і перевіряти на це в методі
}
