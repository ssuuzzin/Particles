class Line extends Particle {
  
    constructor(position) {
        super(position);
        this.w = 12;
        this.c = color(random(100,200),random(100,200),random(100,200));
        this.r1 = random(20);
        this.r2 = random(80); 
    }
  
    display() {
        stroke(this.c);
        strokeWeight(2);
        push();
        translate(this.position.x, this.position.y);
        let theta = map(this.position.x, 0, width, TWO_PI*-2, TWO_PI * 2);
        rotate(theta);
        line(0, 0, this.r1, this.r2);
        pop();
    }
}