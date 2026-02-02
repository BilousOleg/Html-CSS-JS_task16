'use strict';

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
