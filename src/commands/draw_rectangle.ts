import { mouseToggle, dragMouse } from "robotjs";

export const draw_rectangle = (
  x: number,
  y: number,
  offset: number,
  length: number
) => {
  mouseToggle("down");
  for (let i = 0; i <= length; i += 1) {
    dragMouse(x + length, y);
  }
  for (let i = 0; i <= offset; i += 1) {
    dragMouse(x + length, y + offset);
  }
  for (let i = 0; i <= length; i += 1) {
    dragMouse(x, y + offset);
  }
  for (let i = 0; i <= offset; i += 1) {
    dragMouse(x, y);
  }
  mouseToggle("up");
};
