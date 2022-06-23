import "dotenv/config";
import { WebSocketServer } from "ws";
import { server, app } from "./src";

const PORT = process.env.PORT || 3000;
const WS_PORT = Number(process.env.WS_PORT) || 8080;
const wss = new WebSocketServer({ port: WS_PORT });

wss.on("connection", app);
process.on("exit", () => {
  for (const client of wss.clients) {
    client.close();
  }
});

server.listen(PORT, () => {
  console.log(`Start static http server on the ${PORT} port!`);
});
