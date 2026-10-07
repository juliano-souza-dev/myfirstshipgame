export const SHIP_DIRECTIONS = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
];

export function getShipDirection(angle) {
  const degrees = (angle * 180) / Math.PI;

  const compassDegrees = (degrees + 90 + 360) % 360;

  const directionIndex = Math.round(compassDegrees / 22.5) % 16;

  return SHIP_DIRECTIONS[directionIndex];
}
