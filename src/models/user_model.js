class UserModel {
  constructor(email, password, name, role) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.role = role;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

  getRole() {
    return this.role;
  }

  setRole(role) {
    this.role = role;
  }
}

export { UserModel };
