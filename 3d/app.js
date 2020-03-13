let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
document.body.appendChild(app.view);
let img = new PIXI.Sprite.from('./jotaro.jpg');
img.width = window.innerWidth;
app.stage.addChild(img);

let depthMap = new PIXI.Sprite.from('./map.png');
app.stage.addChild(depthMap);

let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);

app.stage.filters = [displacementFilter];

window.onmousemove = function (e) {
  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 30;
  displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 30;
}