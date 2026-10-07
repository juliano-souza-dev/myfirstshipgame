import { Entity } from "../world/Entity.js";
export class Ship extends Entity {
  constructor(id, x = 0, y = 0) {
    super(id, x, y);

    this.speed = 150;
    this.health = 100;
    this.width = "250";
    this.height = "250";
    this.angle = 0;
    this.directionX = 1;
    this.directionY = 1;
  }


move(deltaTime) {
  const length = Math.sqrt(
    this.directionX ** 2 +
    this.directionY ** 2
  );
  if (length == 0 ) return;
  const normalizedX = this.directionX / length;
  const normalizedY = this.directionY / length;

  this.x += normalizedX * this.speed * deltaTime;
  this.y += normalizedY * this.speed * deltaTime;
}

}
