import { Ship } from '../entities/Ship.js';
import { Renderer } from '../rendering/Renderer.js';
import { World } from '../world/World.js';

import { GameLoop } from '../core/GameLoop.js';
import { Input } from '../input/Input.js';

export class Game {
  constructor() {
    this.running = false;

    this.world = new World();
    this.Renderer = new Renderer(document.getElementById('game'));

    this.playerShip = new Ship('player1', 100, 100);
    this.world.addEntity(this.playerShip);

    this.npcShip = new Ship('npc1', 500, 300);
    this.world.addEntity(this.npcShip);

    this.input = new Input();

    this.loop = new GameLoop(
      (deltaTime) => this.update(deltaTime),
      () => this.render(),
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

    if (this.input.isPressed('w')) {
      this.playerShip.directionY = -1;
    }
    if (this.input.isPressed('s')) {
      this.playerShip.directionY = 1;
    }

    if (this.input.isPressed('d')) {
      this.playerShip.directionX = 1;
    }
    if (this.input.isPressed('a')) {
      this.playerShip.directionX = -1;
    }

    this.playerShip.move(deltatime);
    if (this.playerShip.directionX !== 0 || this.playerShip.directionY !== 0) {
      this.playerShip.angle = Math.atan2(this.playerShip.directionY, this.playerShip.directionX);
    }

    this.playerShip.speed = 350;
    const dx = this.playerShip.x - this.npcShip.x;
    const dy = this.playerShip.y - this.npcShip.y;

    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    if (distance > 200) {
      this.npcShip.directionX = dx;
      this.npcShip.directionY = dy;

      this.npcShip.angle = Math.atan2(this.npcShip.directionY, this.npcShip.directionX);

      this.npcShip.move(deltatime);
    } else {
      this.npcShip.directionX = 0;
      this.npcShip.directionY = 0;
    }
  }
  render() {
    this.Renderer.render(this.world);
  }
}
