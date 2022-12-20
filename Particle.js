class Particle {
    constructor(position) {
        this.acc = createVector(0,0.15);
        this.vel = createVector(random(-2,0),random(-2,-0));
        this.position = position.copy();
        this.lifespan = 255;
    }
    
    run() {
        this.update();
        this.display();
    }

    update() {
        this.vel.add(this.acc);
        this.position.add(this.vel);
        this.lifespan -= 2;

        this.checkEdge();
    }

    checkEdge() {
        if (this.position.y > height) {
            this.vel.y *= -1;
            this.position.y = height;
        }
    }

    display() { 
        stroke(255,this.lifespan);
        strokeWeight(2);
        fill(255,this.lifespan);
        ellipse(this.position.x,this.position.y,12,12)
    }

    // isDead() {
        //   if (this.lifespan < 0.0) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
}