class Line extends Particle {
  
    constructor(position) {
        super(position);
        this.w = 12;
        this.c = color(random(255),random(255),random(255),random(150,255));
        this.r1 = random(20);
        this.r2 = random(80); 
    }
  
    display() {
        stroke(this.c);
        strokeWeight(this.r1);
        push();
        translate(this.position.x, this.position.y);
        let theta = map(this.position.x, 0, width, TWO_PI*-2, TWO_PI * 2);
        rotate(theta);
        line(0, 0, this.r2, this.r2);
        pop();
    }
}