'use strict';

try {
  const book1 = new Book(
    'J. K. Rowling',
    'Harry Potter and the Chamber of secrets',
    1998,
    352,
    12
  );

  console.table(book1);

  const user1 = new User('Test1', 'Testovych', {
    street: '123 Main Street',
    city: 'Anytown',
    country: 'USA',
    state: 'California',
  });

  const user2 = new User('Test2', 'Testovych', {
    street: '123 Main Street',
    city: 'Anytown',
    country: 'USA',
    state: 'California',
  });

  const user3 = new User('Test3', 'Testovych', {
    street: '123 Main Street',
    city: 'Anytown',
    country: 'USA',
    state: 'California',
  });

  console.table(user1);
  console.table(user2);
  console.table(user3);

  // Перевірка роботи методів
  console.log(book1.isVacant());
  book1.getRent(user2.id);
  console.log(book1.isVacant());
} catch (error) {
  console.log(error);
}
