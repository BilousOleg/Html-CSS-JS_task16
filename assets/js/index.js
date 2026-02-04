'use strict';

try {
  const wolf1 = new Wolf(10, 'peaceful', true);
  console.table(wolf1);
  const wolf2 = new Wolf(15, 'agressive', false);
  console.table(wolf2);

  // Перевірка роботи методів
  wolf1.hunting();
  wolf2.hunting();
  wolf1.growl();
  wolf2.growl();

  const tiger1 = new Tiger(13, 'peaceful');
  console.table(tiger1);
  const tiger2 = new Tiger(5, 'moody');
  console.table(tiger2);

  // Перевірка роботи методів
  tiger1.hunting();
  tiger2.hunting();
  tiger1.growl();
  tiger2.growl();

  // Перевірка перевизначеності методів
  console.log(Animal.prototype.growl !== tiger1.growl); // НЕ перевизначено в дочірньому
  console.log(Animal.prototype.hunting !== tiger1.hunting); // перевизначено в дочірньому
  console.log(Animal.prototype.growl !== wolf1.growl); // перевизначено в дочірньому
  console.log(Animal.prototype.hunting !== wolf1.hunting); // перевизначено в дочірньому
} catch (error) {
  console.log(error);
}
