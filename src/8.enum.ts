enum GameMode {
  Easy,
  Medium,
  Hard,
}

const select: GameMode = GameMode.Easy;
console.log(select);

enum GameMode1 {
  Easy = "ง่าย",
  Medium = "ปานกลาง",
  Hard = "ยาก",
}

const select1: GameMode1 = GameMode1.Easy;
console.log(select1);
