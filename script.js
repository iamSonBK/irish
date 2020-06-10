import data from "./data.js";
// const dataSplit = getDataFromArr(data, [2, 3]);
let myCanvas = document.getElementById("canvas");
let context = myCanvas.getContext("2d");

context.beginPath();

context.moveTo(0, 0);
context.lineTo(0, 0);
context.strokeStyle = "black";
context.stroke();

context.fllStyle = "red";
function draw() {
  const ox = 0,
    oy = 0,
    maxX = ox + 500,
    minY = 500;
  //draw chart
  context.beginPath();
  context.moveTo(ox + 10, oy);
  context.lineTo(oy + 10, maxX);
  context.lineTo(maxX + 250, minY);
  context.fillText("0", 0, 530);
  context.stroke();
  //draw point
  for (var i = 1; i < 8; i++) {
    context.fillText(`${i}`, 0 + i * 100, minY + 30);
    context.fillText(`${i}`, 0, minY + 30 + -i * 100);
  }
  const getSplitData = (data = [], index) =>
    data.map((d) => {
      const splitVal = [index[0], index[1], d.length - 1];

      return d.filter((val, index) => (splitVal.includes(index) ? val : null));
    });
  const dataAfterSplit = getSplitData(data, [2, 3]);
  console.log(dataAfterSplit);
  const colors = ["none", "red", "blue", " green"];
  dataAfterSplit.forEach((val) => {
    context.beginPath();
    context.rect(val[0] * 100, 500 - val[1] * 100 - 10, 10, 10);
    context.fillStyle = colors[val[2]];
    context.fill();
  });
}
draw();
