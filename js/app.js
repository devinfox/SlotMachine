
//set the items for each roll on the slot machine
var weights = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5]
var items = [
    {
        name: "Kanye Mad Bitch!",
        url: "url('https://i.imgur.com/ADklBcq.jpg')",
        payout: -100
    },
    {
        name: "kylie_derp",
        url: "url('https://i.imgur.com/WECmV1U.jpg')",
        payout: 100
    },
    {
        name: "crying_kim",
        url: "url('https://i.imgur.com/QtfNDAx.jpg')",
        payout: 500
    },
    {
        name: "kanye",
        url: "url('https://i.imgur.com/nMDt2QN.jpg')",
        payout: 1000
    },
    {
        name: "kim",
        url: "url('https://i.imgur.com/vH3pQk1.jpg')",
        payout: 5000
    },
    {
        name: "kylie",
        url: "url('https://i.imgur.com/L5MSS1c.jpg')",
        payout: 10000
    }
];



    
// cached elements
var reel1 = $('#reel-1');
var reel2 = $('#reel-2');
var reel3 = $('#reel-3');
var lever = $('#lever');
var reset = $('#init');
var $reels = $('.reel');
var reels;
var winnings;
var bankroll;
var score = document.getElementsByClassName("score");

$(function () {

// event listener for slot randomizer
$('#lever').on('click', play);

function play()  {
    // generate reels
    bankroll -= 10;
    reels = reels.map(function() {
        return getRandomSymbol();
    });
    
    winnings = computeWinnings();
    bankroll += winnings;
    render();
};

function getRandomSymbol() {
    return weights[Math.floor((Math.random() * weights.length))];
}

function init() {
    reels = [null, null, null];
    bankroll = 1000;
};

function computeWinnings() {
    if (reels[0] === reels[1] && reels[0] === reels[2]) {
        return items[reels[0]].payout;
        console.log(items[reels[0]].payout);
    } else {
        return 0;
    }
    
};

// function scoreBoard(); {
//     for(i=0, i>=index, i++)
// }
// function checkforMatch() {
    // if (state[one] === state[one] = state[one]) = 1;
    // win[two] = win[two] = win[two] = 2;
//    if (reel1image === reel2image && reel1image === reel3image) {
//        if (reel1image = one)

    // win[four] = win[four] = win[four] = 4;
    // win[five] = win[five] = win[five] = 5;
    // win[four] = win[four] = win[four] = 6;
    
// }


function render() {
    // render the reels
    $reels.each(function(idx) {
        $(this).css('background-image', reels[idx] !== null ? items[reels[idx]].url : '');
    });
    $('.score').text(bankroll);
}

$('#init').on('click', function() {
    bankroll = 1000;
    $('.score').text(bankroll);
    reels = [null, null, null];
    render();
});

init();
render();
});
