//2 ways of creating a array that can include just one type

const NumbersArray: Array<number> = [1, 2, 3];
const NumArr: number[] = [1, 2, 3];

const StringsArray: Array<string> = ['mouse', 'laptop', 'coopivara'];
const StrAr: string[] = ['mouse', 'laptop', 'coopivara'];

//Objects with types

const myNickname = 'Player1';

const player: { Nickname: string; Age: number; isOnline?: boolean } = {
  Nickname: myNickname,
  Age: 21,
  isOnline: false,
};

//Using these informations in a function

function PlayerCanPlay(player: any): string {
  if (player.Age < 18) {
    return `${player.Nickname} can't create an account`;
  } else {
    return `${player.Nickname} can play`;
  }
}

console.log(PlayerCanPlay(player));
