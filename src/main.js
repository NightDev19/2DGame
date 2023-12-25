import kaboom from "./kaboom.js";
import loadAssets from "./character-animation.js";
import setWorld from "../Map/world.js";
import setBattle from "../Map/battle.js";
// Canvas
kaboom({
  width: 1280,
  height: 720,
  scale: 0.7,
});
const gameCanvas = document.querySelector("canvas");
gameCanvas.style.display = "block";
gameCanvas.style.margin = "auto";
gameCanvas.style.position = "absolute";
gameCanvas.style.top = "50%";
gameCanvas.style.left = "50%";
gameCanvas.style.transform = "translate(-50%, -50%)";

setBackground(Color.fromHex("#36A6E0"));
loadAssets();

scene("world", (worldState) => {
  setWorld(worldState);
});
scene("battle", (worldState) => {
  setBattle(worldState);
});

go("world");
