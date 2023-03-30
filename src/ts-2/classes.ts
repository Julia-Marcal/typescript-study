export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addColaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  public showCurrentColaborator(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborator {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const Coopivara = new Company('Coopivara', '11.111.111/0001-11');

const collaborator1 = new Collaborator('Julia', 'Marçal');
const collaborator2 = new Collaborator('Ana', 'Oliveira');
const collaborator3 = new Collaborator('Ray', 'Paulista');

Coopivara.addColaborator(collaborator1);
Coopivara.addColaborator(collaborator2);
Coopivara.addColaborator(collaborator3);

Coopivara.showCurrentColaborator()
