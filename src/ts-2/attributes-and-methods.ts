export class Person {
  constructor(
    public Firstname: string,
    public Lastname: string,
    public age: number,
    public cpf: string,
  ) {}
  static createPerson(
    Firstname: string,
    lastname: string,
    age: number,
    cpf: string,
  ): Person {
    return new Person(Firstname, lastname, age, cpf);
  }
}

const pessoa = Person.createPerson('Julia', 'Marçal', 10, '123.456.789-10');
console.log(pessoa);
