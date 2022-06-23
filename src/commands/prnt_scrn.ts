import { screen } from "robotjs";
import Jimp from "jimp";
import { WebSocket } from "ws";

export const prnt_scrn = (x: number, y: number, ws: WebSocket) => {
  const size = 200;
  const rimg = screen.capture(x, y, size, size);

  // Create a new blank image, same size as Robotjs' one
  const jimg = new Jimp(size, size);
  for (let f = 0; f < size; f++) {
    for (let j = 0; j < size; j++) {
      // hex is a string, rrggbb format
      const hex = rimg.colorAt(f, j);
      // Jimp expects an Int, with RGBA data,
      // so add FF as 'full opaque' to RGB color
      const num = parseInt(hex + "ff", 16);
      // Set pixel manually
      jimg.setPixelColor(num, f, j);
    }
  }
  jimg.getBase64Async(Jimp.MIME_PNG).then((base64: string) => {
    ws.send(`prnt_scrn ${base64.replace("data:image/png;base64,", "")}\0`);
  });
};
