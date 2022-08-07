var img = document.getElementById("leftpec");
var count = document.getElementById("score");
var yourscore = document.getElementById('my_score');
var score = 0;
var MyScore = 0;
var audio = new Audio('popopen.mp3');
var audio2 = new Audio('popclose.mp3');
var us_score = 1500, jp_score = 730, ca_score = 500, au_score = 459, fi_score = 350, se_score = 250, pl_score = 220, dm_score = 180, id_score=90, hu_score=69, sr_score = 51; 

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'rightpec.png';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'leftpec.png';
    audio2.play();
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'rightpec.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'leftpec.png';
     audio.play();
});


// Score on leaderboard
setInterval(startCountUs, 100);

function startCountUs(){
    us_score++;
    document.getElementById("table").rows[1].cells.item(3).innerHTML = us_score;
}

setInterval(startCountJp, 200);

function startCountJp(){
    jp_score++;
    document.getElementById("table").rows[2].cells.item(3).innerHTML = jp_score;
}

setInterval(startCountCa, 250);

function startCountCa(){
    ca_score++;
    document.getElementById("table").rows[3].cells.item(3).innerHTML = ca_score;
}

setInterval(startCountAu, 350);

function startCountAu(){
    au_score++;
    document.getElementById("table").rows[4].cells.item(3).innerHTML = au_score;
}

setInterval(startCountFi, 400);

function startCountFi(){
    fi_score++;
    document.getElementById("table").rows[6].cells.item(3).innerHTML = fi_score;
}

setInterval(startCountSe, 450);

function startCountSe(){
    se_score++;
    document.getElementById("table").rows[7].cells.item(3).innerHTML = se_score;
}

setInterval(startCountPl, 500);

function startCountPl(){
    pl_score++;
    document.getElementById("table").rows[8].cells.item(3).innerHTML = pl_score;
}

setInterval(startCountDm, 600);

function startCountDm(){
    dm_score++;
    document.getElementById("table").rows[9].cells.item(3).innerHTML = dm_score;
}

setInterval(startCountId, 750);

function startCountId(){
    id_score++;
    document.getElementById("table").rows[10].cells.item(3).innerHTML = id_score;
}

setInterval(startCountHu, 800);

function startCountHu(){
    hu_score++;
    document.getElementById("table").rows[11].cells.item(3).innerHTML = hu_score;
}

setInterval(startCountSr, 1000);

function startCountSr(){
    sr_score++;
    document.getElementById("table").rows[12].cells.item(3).innerHTML = sr_score;
}

function increaseScore(){
    score++;
    MyScore++;
    count.innerHTML = score;
    yourscore.innerHTML = MyScore;
    document.getElementById("table").rows[5].cells.item(3).innerHTML = MyScore;
}
