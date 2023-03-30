export class Person {
  constructor(
    public Firstname: string,
    public Lastname: string,
    private age: number,
    protected cpf: string,
  ){}

  getAge(): number {
    return this.age;
  }

  getCPF(): string{
    return this.cpf
  }

  getFullName(): string{
    return `${this.Firstname} + ' ' + ${this.Lastname}`
  }
}

export class Student extends Person {}
export class Client extends Person {}

const person1 = new Person('Julia', 'Marçal', 18, '000.000.000-00')
const student1 = new Student('Julia', 'Marçal', 18, '000.000.000-00')
const client1 = new Client('Julia', 'Marçal', 18, '000.000.000-00')
