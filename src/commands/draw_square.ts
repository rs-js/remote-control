import { mouseToggle, dragMouse } from "robotjs";

export const draw_square = (x: number, y: number, offset: number) => {
  mouseToggle("down");
  for (let i = 0; i <= offset; i += 1) {
    dragMouse(x + offset, y);
  }
  for (let i = 0; i <= offset; i += 1) {
    dragMouse(x + offset, y + offset);
  }
  for (let i = 0; i <= offset; i += 1) {
    dragMouse(x, y + offset);
  }
  for (let i = 0; i <= offset; i += 1) {
    dragMouse(x, y);
  }
  mouseToggle("up");
};
