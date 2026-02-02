class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    ({
      street: this.street,
      city: this.city,
      country: this.country,
      state: this.state,
    } = address);
  }
}
