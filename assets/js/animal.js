class Animal {
  // Не знав, що додати в якості властивостей, тому придумав від себе
  constructor(age, mood) {
    this.age = age;
    this.mood = mood;
  }
  hunting() {
    console.log('Зараз дожену здобич!');
  }
  growl() {
    console.log('Грррррр!');
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
