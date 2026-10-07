export class Renderer {
  constructor(root) {
    this.root = root;
  }

  render(world){
    this.root.innerHTML = "";

    for(const entity of world.entities) {

      const element = document.createElement("img")
      element.style.position = "absolute";
      element.style.left = `${entity.x}px`;
      element.style.top = `${entity.y}px`;
     element.style.width = `${entity.width}px`;
    element.style.height = "auto";
element.style.transform = "translate(-50%, -50%)";
element.style.transformOrigin = "center";
element.style.transform = `
  translate(-50%, -50%)
  rotate(${entity.angle}rad)
`;
        element.src = "./assets/ships/el-colombo.webp";
      this.root.appendChild(element);
    }
  }
}
