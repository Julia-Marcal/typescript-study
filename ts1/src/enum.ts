enum CelticPlayer {
  Tatum = 10,
  Brown = 7,
  Smart = 36,
}

console.log(CelticPlayer.Brown);

function ChooseCelticPlayer(player: CelticPlayer): void {
  console.log(CelticPlayer[player]);
}

ChooseCelticPlayer(CelticPlayer.Brown);
