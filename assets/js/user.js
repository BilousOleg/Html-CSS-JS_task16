class User {
  constructor(firstName, lastName, address) {
    this._id = User.counter++; // Використання статичної властивості для автоматичного визначення унікального id (збільшення через постфіксний інкремент)
    this.firstName = firstName;
    this.lastName = lastName;
    ({
      street: this.street,
      city: this.city,
      country: this.country,
      state: this.state,
    } = address);
  }

  static counter = 0;

  get id() {
    return this._id;
  }

  set firstName(value) {
    checkType(value, 'string');
    this._firstName = checkStringEmpty(value);
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    checkType(value, 'string');
    this._lastName = checkStringEmpty(value);
  }

  get lastName() {
    return this._lastName;
  }

  set street(value) {
    checkType(value, 'string');
    this._street = checkStringEmpty(value);
  }

  set city(value) {
    checkType(value, 'string');
    this._city = checkStringEmpty(value);
  }

  set country(value) {
    checkType(value, 'string');
    this._country = checkStringEmpty(value);
  }

  set state(value) {
    checkType(value, 'string');
    this._state = checkStringEmpty(value);
  }

  get address() {
    return {
      street: this._street,
      city: this._city,
      country: this._country,
      state: this._state,
    };
  }
}
