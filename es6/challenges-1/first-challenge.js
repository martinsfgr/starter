class User {
  constructor() {
    this.email = String;
    this.password = String;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor() {
    super();
    this.admin = true;
  }
}

const user = new User('email@email.com', 'senha123');
const admin = new Admin('email@email.com', 'senha123');

console.log('Primeira Tarefa');
console.log(user.isAdmin(), admin.isAdmin());
