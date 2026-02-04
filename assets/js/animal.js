class Animal {
  // Не знав, що додати в якості властивостей, тому придумав від себе
  constructor(age, mood) {
    // Унеможливив створення екземпляру абстрактного класу
    if (new.target === Animal) {
      throw new ReferenceError('cannot create instance of abstract class');
    }
    this.age = age;
    this.mood = mood;
  }
  hunting() {
    console.log('Зараз дожену здобич!');
  }
  growl() {
    console.log('Грррррр!');
  }

  set age(value) {
    checkType(value, 'number');
    checkNumberRange(value, 0);
    this._age = value;
  }

  get age() {
    return this._age;
  }

  set mood(value) {
    checkType(value, 'string');
    this._mood = checkStringEmpty(value);
  }

  get mood() {
    return this._mood;
  }
}

class Wolf extends Animal {
  constructor(age, mood, isAlpha) {
    super(age, mood);
    // Додаткова властивість вовків
    this.isAlpha = isAlpha;
  }
  hunting() {
    console.log('Вовк з’їсть тебе');
  }
  growl() {
    console.log(this.mood === 'peaceful' ? 'Ррр!' : 'Грррррррр!!!!');
  }

  set isAlpha(value) {
    checkType(value, 'boolean');
    this._isAlpha = value;
  }

  get isAlpha() {
    return this._isAlpha;
  }
}

class Tiger extends Animal {
  constructor(age, mood) {
    super(age, mood);
  }
  hunting() {
    console.log('Тигр з’їсть тебе');
  }
  // Не став перезаписувати метод growl() для наглядності (викликатиметься батьківський метод)
}
