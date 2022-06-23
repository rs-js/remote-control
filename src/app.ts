import { getMousePos, moveMouse } from "robotjs";
import { WebSocket } from "ws";
import { output } from "./utils";
import {
  draw_circle,
  draw_rectangle,
  draw_square,
  prnt_scrn,
} from "./commands";

export const app = (ws: WebSocket) => {
  ws.on("message", (data) => {
    const { x, y } = getMousePos();
    const args = data.toString().split(" ");
    const command = args[0];
    const offset = parseInt(args[1]);
    const length = parseInt(args[2]);

    switch (command) {
      case "mouse_position":
        ws.send(`mouse_position ${x},${y}\0`);
        output(data);
        break;
      case "mouse_right":
        moveMouse(x + offset, y);
        output(data);
        break;
      case "mouse_left":
        moveMouse(x - offset, y);
        output(data);
        break;
      case "mouse_up":
        moveMouse(x, y - offset);
        output(data);
        break;
      case "mouse_down":
        moveMouse(x, y + offset);
        output(data);
        break;
      case "draw_circle":
        draw_circle(x, y, offset);
        output(data, false);
        break;
      case "draw_rectangle":
        draw_rectangle(x, y, offset, length);
        output(data, false);
        break;
      case "draw_square":
        draw_square(x, y, offset);
        output(data, false);
        break;
      case "prnt_scrn":
        prnt_scrn(x, y, ws);
        output(data, false);
        break;
      default:
        output(data, false);
    }
  });
};
