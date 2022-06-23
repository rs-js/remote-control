import { mouseToggle, dragMouse } from "robotjs";

export const draw_circle = (x: number, y: number, offset: number) => {
  mouseToggle("down");
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const newX = x + offset * Math.cos(i);
    const newY = y + offset * Math.sin(i);
    dragMouse(newX - offset + 1, newY);
  }
  mouseToggle("up");
};
