
import { Ship } from "../entities/Ship.js";
import { Renderer } from "../rendering/Renderer.js";
import { World } from "../world/World.js";

import { GameLoop } from "../core/GameLoop.js";

export class Game {
  constructor(){

    this.running = false;

    this.world = new World();
    this.Renderer = new Renderer(document.getElementById("game"));

    this.playerShip = new Ship("player1", 100, 100);
    this.world.addEntity(this.playerShip);

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

this.playerShip.move(deltatime);

  }
  render() {
    this.Renderer.render(this.world);
  }
}
