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
    if (typeof value !== 'number') {
      throw new TypeError('age must be a number value');
    } else if (!Number.isSafeInteger(value) || value < 0) {
      throw new RangeError('age must be a safe, non-negative integer');
    }
    this._age = value;
  }

  get age() {
    return this._age;
  }

  set mood(value) {
    if (typeof value !== 'string') {
      throw new TypeError('mood must be a string value');
    } else if (value.trim().length === 0) {
      throw new Error('length of mood value must be greater than 0');
    }
    this._mood = value.trim();
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
    if (typeof value !== 'boolean') {
      throw new TypeError('isAlpha must be a boolean value');
    }
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
