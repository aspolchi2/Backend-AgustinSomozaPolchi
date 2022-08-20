class User {
  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
    this._books = [];
    this._pets = [];
  }
  getFullName() {
    return `${this._name} ${this._lastName}`;
  }
  addPet(pet) {
    this._pets.push(pet);
  }
  countPets() {
    return this._pets.length;
  }
  addBooks(author, title) {
    this._books.push({ author: author, title: title });
  }
  getBookNames() {
    const bookTitles = [];
    this._books.forEach((title) => bookTitles.push(title.title));
    return bookTitles;
  }
}
const usuario = new User("Juan", "Perez");
usuario.addPet("Perro");
usuario.addPet("Gato");
usuario.addBooks("Juan", "El libro de Juan");
usuario.countPets();
usuario.getBookNames();

console.log(`${usuario.getFullName()}, tiene ${usuario.countPets()} mascotas, y un libro llamado ${usuario.getBookNames()}`);
