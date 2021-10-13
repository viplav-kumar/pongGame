class Ball{

    constructor(){
        this.x = 200;
        this.y = 100;
        this.w = 20;
        this.vx = 3;
        this.vy = 1;
    }

    move(){
        this.x += this.vx;
        this.y += this.vy;
    }

    update(){
        if(this.y >= height || this.y <= 0){
            this.vy = -this.vy;
        }
    }

    reset(){
        this.x = 200;
        this.y = 200;
    }

    show(){
        ellipse(this.x, this.y, this.w);
    }
}