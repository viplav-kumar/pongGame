let p_l;
let p_r;
let ball;
let score1 = 0;
let score2 = 0;
let timer = 60;
let startToken;
let song;

function setup(){
    song = loadSound('');
    startToken = 0;
    createCanvas(400, 400);
    rectMode(CENTER);
    p_l = new Paddle(10);
    p_r = new Paddle(390);
    ball = new Ball();
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        p_r.change_dir(-3);
    }
    if(keyCode == DOWN_ARROW){
        p_r.change_dir(3);
    }

    if(keyCode == 65){
        p_l.change_dir(-3);
    }
    if(keyCode == 90){
        p_l.change_dir(3);
    }

    if(keyCode === ENTER){
        startToken = 1;
    }
}

function draw(){
    clear();
    if(startToken == 0){
        background(30);
        textSize(20);
        text('Press ENTER to start the game.', 58, 200);
        fill(255);
    }
    if(startToken == 1){
        background(30);
        textSize(20);
        line(200,0,200,height);
        text("Player 1", 30, 30);
        fill(255);
        text(score1, 60, 60);
        text("Player 2", 290, 30);
        text(score2, 320, 60);
        text(timer, 190, 30);
        if(timer == 0){
            if(score1 > score2){
                textSize(35);
                text("Player 1 wins !!",80,200);
                noLoop();
            }else if(score2 > score1){
                textSize(35);
                text("Player 2 wins !!",80,200);
                noLoop();
            }else{
                textSize(35);
                text("Match Tied !!",80,200);
                noLoop();
            }
        }
        if(frameCount % 60 == 0 && timer > 0){
            timer -= 1;
        }
        p_l.show();
        p_r.show();
        p_l.move();
        p_l.update();
        p_r.move();
        p_r.update();

        ball.show();
        ball.move();
        ball.update();

        if(ball.x >= width){
            score1++;
            ball.reset();
        }

        if(ball.x <= 0){
            score2++;
            ball.reset();
        }

        // collision
        if(ball.x >= 380 && ball.y <=(p_r.y + 50) && ball.y >= (p_r.y - 50)){
            ball.vx = -ball.vx;
        }
        if(ball.x <= 20 && ball.y <= (p_l.y + 50) && ball.y >= (p_l.y - 50)){
            ball.vx = -ball.vx;
        }
    }
    
}