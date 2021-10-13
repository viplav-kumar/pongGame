class Paddle {
    
    constructor(x){
        this.x = x;
        this.y = 200;
        this.w = 20;
        this.h = 100;
        this.vy = 0;
    }

    update(){
        if(this.y >= height-50 || this.y <= 50){
            this.vy = -this.vy;
        }
    }

    move(){
        this.y += this.vy;
    }

    change_dir(y){
        this.vy = y;
    }

    show(){
        rect(this.x, this.y, this.w, this.h);
    }
}