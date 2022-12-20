class Confetti extends Particle {
  
  constructor(position) {
    super(position);
    this.w = 12;
    // this.synth = new p5.MonoSynth();
    this.c = color(255);

  }
  
  // Override the display method
  display() {
    rectMode(CENTER);
    fill(this.c);
    stroke(this.c);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    let theta = map(this.position.x, 0, width, 0, TWO_PI * 20);
    rotate(theta);
    rect(0, 0, this.w, this.w);
    pop();
  }
}


