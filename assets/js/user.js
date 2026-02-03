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
    checkStringEmpty(value);
    this._firstName = value.trim();
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    checkType(value, 'string');
    checkStringEmpty(value);
    this._lastName = value.trim();
  }

  get lastName() {
    return this._lastName;
  }

  set street(value) {
    checkType(value, 'string');
    checkStringEmpty(value);
    this._street = value.trim();
  }

  set city(value) {
    checkType(value, 'string');
    checkStringEmpty(value);
    this._city = value.trim();
  }

  set country(value) {
    checkType(value, 'string');
    checkStringEmpty(value);
    this._country = value.trim();
  }

  set state(value) {
    checkType(value, 'string');
    checkStringEmpty(value);
    this._state = value.trim();
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
