class Confetti extends Particle {
  
  constructor(position) {
    super(position);
    // this.synth = new p5.MonoSynth();
    this.c = color(random(100,200),random(100,200),random(100,200));
    this.r1 = random(100);
    this.r2 = random(100);
}
  
  // Override the display method
  display() {
    // rectMode(CENTER);
    fill(this.c);
    stroke(this.c);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    let theta = map(this.position.x, 0, width, 0, TWO_PI * 20);
    // rotate(theta);
    rect(0, 0, this.r1, this.r2);
    pop();
  }
}


