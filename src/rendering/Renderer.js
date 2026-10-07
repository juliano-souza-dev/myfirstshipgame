import { getShipDirection } from './ShipDirections.js';
import { CORSARIO_EL_RUBRO_MAP } from './ships/corsario-rubro/spriteMap.js';

export class Renderer {
  constructor(root) {
    this.root = root;
  }

  render(world) {
    this.root.innerHTML = '';

    for (const entity of world.entities) {
      const direction = getShipDirection(entity.angle);
      const sprite = CORSARIO_EL_RUBRO_MAP[direction];

      const displaySize = Number(entity.width);

      const element = document.createElement('div');

      element.style.position = 'absolute';

      element.style.left = `${entity.x}px`;
      element.style.top = `${entity.y}px`;

      element.style.width = `${displaySize}px`;
      element.style.height = `${displaySize}px`;

      element.style.transform = 'translate(-50%, -50%)';

      element.style.backgroundImage = 'url("./assets/ships/corsario-rubro.png")';

      element.style.backgroundRepeat = 'no-repeat';

      element.style.backgroundSize = `${displaySize * 4}px ${displaySize * 4}px`;

      element.style.backgroundPosition = `-${sprite.column * displaySize}px -${sprite.row * displaySize}px`;

      this.root.appendChild(element);
    }
  }
}
