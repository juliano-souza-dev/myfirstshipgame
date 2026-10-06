export class Renderer {
  constructor(root) {
    this.root = root;
  }

  render(world){
    this.root.innerHTML = "";

    for(const entity of world.entities) {
      const element = document.createElement("div");

        element.style.position = "absolute";
        element.style.left = `${entity.x}px`;
        element.style.top = `${entity.y}px`;
        element.style.width = `${entity.width}px`;
        element.style.height = `${entity.height}px`;
        element.style.background = "brown";
      this.root.appendChild(element);
    }
  }
}
