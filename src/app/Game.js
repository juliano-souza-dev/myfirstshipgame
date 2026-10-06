
import { Ship } from "../entities/Ship.js";
import { Renderer } from "../rendering/Renderer.js";
import { World } from "../world/World.js";

import { GameLoop } from "../core/GameLoop.js";
import { Input } from "../input/Input.js";

export class Game {
  constructor(){

    this.running = false;

    this.world = new World();
    this.Renderer = new Renderer(document.getElementById("game"));

    this.playerShip = new Ship("player1", 100, 100);
    this.world.addEntity(this.playerShip);

    this.input = new Input();

this.loop = new GameLoop(
  (deltaTime) => this.update(deltaTime),
  () => this.render()
);

   this.start();
  }
  start() {
    this.running = true;
    this.loop.start();
  }

  update(deltatime) {
  this.playerShip.directionX = 0;
  this.playerShip.directionY = 0;

 if (this.input.isPressed("w")) {
    this.playerShip.directionY = -1;
}
if( this.input.isPressed("s")) {
    this.playerShip.directionY = 1;
}

if(this.input.isPressed("d")){
  this.playerShip.directionX = 1;
}
if(this.input.isPressed("a")){
  this.playerShip.directionX = -1;
}

  this.playerShip.move(deltatime);

  }
  render() {
    this.Renderer.render(this.world);
  }
}
