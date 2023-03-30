export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  atacar(Character: Character): void {
    this.line();
    Character.loselife(this.attack);
  }

  loselife(forcaattack: number): void {
    this.life -= forcaattack;
    console.log(
      `${this.emoji} - ${this.name} now has  ${this.life} of life...`,
    );
  }

  abstract line(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  line(): void {
    console.log(this.emoji + ' Warrior Attack!!');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  line(): void {
    console.log(this.emoji + ' MONNNNNNNNNNNSSSTERRRRRRRRRRRRRR!!!!');
  }
}

const warrior = new Warrior('Guereira', 100, 1000);
const monster = new Monster('monster', 87, 1000);
