//set the items for each roll on the slot machine
var weights = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5]
var items = [{
        name: "Kanye Mad!",
        url: "url('https://i.imgur.com/ADklBcq.jpg')",
        payout: -100,
        audio: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1Ani73F0xb4.mp3"
    },
    {
        name: "kylie_derp",
        url: "url('https://imgur.com/QtfNDAx.jpg')",
        payout: 100,
        audio: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1Ani73F0xb4.mp3"
    },
    {
        name: "crying_kim",
        url: "url('https://i.imgur.com/0t56DZH.jpg')",
        payout: 500,
        audio: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s15JPTkCYGx1.mp3"
    },

    {
        name: "kanye",
        url: "url('https://i.imgur.com/nMDt2QN.jpg')",
        payout: 1000,
        audio: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1iDlf7DSP6i.mp3"
    },
    {
        name: "kim",
        url: "url('https://i.imgur.com/vH3pQk1.jpg')",
        payout: 5000,
        audio: "http://freesound.org/data/previews/361/361346_5506271-lq.mp3"
    },
    {
        name: "kylie",
        url: "url('https://i.imgur.com/hK9e5cU.jpg')",
        payout: 10000,
        audio: "http://freesound.org/data/previews/69/69690_866625-lq.mp3"
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
var Highscores;
var score = $('.score');
var high_scores = $('#highscores');
var leverSound = new Audio("http://freesound.org/data/previews/316/316931_1015240-lq.mp3");
var player = new Audio();

$(function() {

    // event listener for slot randomizer
    $('#lever').on('click', play);

    function play() {
        leverSound.play();
        bankroll -= 10;

        reels = reels.map(function() {
            return getRandomSymbol();
        });

        winnings = computeWinnings();
        bankroll += winnings;
        checkGameOver();

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
            player.src = items[reels[0]].audio;
            player.play();
            return items[reels[0]].payout;
            // console.log(items[reels[0]].payout);
        } else {
            return 0;
        }

    };

    function determineHighBankRoll() {
        console.log(localStorage.getItem("Highscore"))
        if (localStorage.getItem("Highscore")) {
            var currentHighScore = parseInt(localStorage.getItem("Highscore"))
            if (currentHighScore < bankroll) {
                localStorage.setItem("Highscore", bankroll.toString())
            }
        } else {
            localStorage.setItem("Highscore", "1000");
        }
    }

    function render() {
        // render the reels
        // pick three random urls first
        renderRandom();

        setTimeout(function() {
            renderRandom();
        }, 200)
        setTimeout(function() {
            // pick the real one
            renderReal();
        }, 400)

        //push score to score board
        $('.score').text('$' + bankroll);
        determineHighBankRoll();
        $('#highscores').html(window.localStorage.getItem("Highscore"));
    };



    function renderRandom() {
        $reels.each(function(idx) {
            $(this).css('background-image', reels[idx] !== null ? items[Math.floor(Math.random() * 6)].url : '');
        });
    }

    function renderReal() {
        $reels.each(function(idx) {
            $(this).css('background-image', reels[idx] !== null ? items[reels[idx]].url : '');
        });
    }

    function checkGameOver() {
        if (bankroll < 0) {
            alert("Sorry, You Lose!");
            init();
        }
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


