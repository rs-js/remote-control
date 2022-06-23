import { RawData } from "ws";
import { getMousePos } from "robotjs";

export const output = (data: RawData, position = true) => {
  console.log("Command: %s", data);
  position && console.log("Result: %s", getMousePos());
};
