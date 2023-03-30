export class Person {
  constructor(
    private Firstname: string,
    private Lastname: string,
    private age: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this.cpf = cpf;
  }

  get cpf(): string {
    return this.cpf.replace(/\D/g, '');
  }
}

const pessoa = new Person('Julia', 'Marçal', 10, '123.456.789-10');
