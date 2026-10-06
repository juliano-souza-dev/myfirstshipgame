export class GameLoop {
  constructor(update, render) {
    this.update = update;
    this.render = render;
    this.running = false;
    this.lastTime = 0;
  }


    start(){
      if(this.running) return;
      this.running = true;
      requestAnimationFrame((time) => this.tick(time));
    }

  tick(time){
    if(!this.running) return;

    if(this.lastTime === 0 ) {
      this.lastTime = time;
    }
    const deltaTime = (time - this.lastTime) / 1000;
    this.lastTime = time;


    this.update(deltaTime);
    this.render();
    requestAnimationFrame((time) => {this.tick(time)});
  }

  stop() {
      this.running = false;
  }
}
