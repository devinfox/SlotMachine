
var items = [kylie, kim, kris, kanye, caitlyn_jenner, bruce_jenner, crying_kim, kylie_derp, kanye_mad]

var one = Math.floor((Math.random()*9)+1)
var two = Math.floor((Math.random()*9)+1)
var three = Math.floor((Math.random()*9)+1)

valArr = [
    83, //kanye_mad
    96, //kylie_derp
    208, //crying_kim
    209, //kanye
    487, //kim
    503, //kylie
    543, //kanye_mad
    635, //kylie_derp
    637, //crying_kim
    1096, //kanye
    1103, //kim
    1248, //kylie
    1252, //kanye_mad
    1260, //kylie_derp
    1302, //crying_kim
    1311, //kanye
    1327, //kim
    1496. //kylie
]

var winCombo = [];
win[83] = win[543] = win[1252] = 1;
win[96] = win[635] = win[1260] = 2;
win[208] = win[637] = win[1302] = 3;
win[209] = win[1096] = win[1311] = 4;
win[487] = win[1103] = win[1327] = 5;
win[503] = win[1248] = win[1496] = 6;
