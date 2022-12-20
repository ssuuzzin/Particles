class Particle {

  constructor(position) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-2, 2), random(-2, 0));
    this.position = position.copy();
    this.c = color(random(100,200),random(100,200),random(100,200));
    // this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    
    this.checkEdge();
  }
  
  checkEdge() {

    if (this.position.y > height) {
        this.velocity.y *= -1;
        this.position.y = height;
    }
    if (this.position.y < 0) {
          this.velocity.y *= -1;
          this.position.y = 0;
    }
    if (this.position.x > width) {
        this.velocity.x *= -1;
        this.position.x = width;
    }
    if (this.position.x < 0) {
          this.velocity.x *= -1;
          this.position.x = 0;
    }
    
  }

  display() {
    stroke(this.c);
    strokeWeight(2);
    fill(this.c);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}