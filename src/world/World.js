import { Entity } from "./Entity.js";
export  class World {
  constructor() {
    this.entities = [];
  }


  addEntity(entity) {
    if(!(entity instanceof Entity)) {
      throw new Error("Only instances of Entity can be added to the world.");
    }
    this.entities.push(entity);
  }
}
