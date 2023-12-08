"use strict";
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Easy"] = 0] = "Easy";
    GameMode[GameMode["Medium"] = 1] = "Medium";
    GameMode[GameMode["Hard"] = 2] = "Hard";
})(GameMode || (GameMode = {}));
const select = GameMode.Easy;
console.log(select);
var GameMode1;
(function (GameMode1) {
    GameMode1["Easy"] = "\u0E07\u0E48\u0E32\u0E22";
    GameMode1["Medium"] = "\u0E1B\u0E32\u0E19\u0E01\u0E25\u0E32\u0E07";
    GameMode1["Hard"] = "\u0E22\u0E32\u0E01";
})(GameMode1 || (GameMode1 = {}));
const select1 = GameMode1.Easy;
console.log(select1);
