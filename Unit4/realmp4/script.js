/*
  Johan Karlsson, DonKarlssonSan 2018
  Referencing: 
   * three.js
   * THREE.OrbitControls (which I have in another Pen) 
*/

// 2d and web cam stuff
let canvas;
let ctx;
let w;
let h;
let size = 8;
let video;

// three.js stuff
let colors;
let scene;
let camera;
let renderer;
let cubes;
let nrOfCubesX;
let nrOfCubesY;

// weather stuff
let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
//let windspeed = 0;
let temperature = 0;
//let humidity = 0;

function setup() {

  //weather stuff

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&";

  //let myIDString = "appid=2ab3fd961cc8c4aacb1786ddb79e8da5";
    let myIDString = "appid=f1a2dfdc39b1d6fb5a02f2dda50c0ec7";

  let myTotalString = myCityString + myIDString;

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.

  // cube stuff

  setupColors();
  setupScene();
  setupRenderer();
  setupEventListeners();

  setupCanvas();
  setupWebCamera().then(() => {
    // We need to call these after 
    // the web cam is setup so we 
    // know the width and height 
    // of the video feed
    reset();
    setupCamera();
    setupCubes();
    setupLights();
    draw();
  });
}

function gotData(data) {
  weather = data;
 //print(weather); // for debugging purposes, print out the JSON data when we get it.
 // windspeed = weather.wind.speed;
  temperature = weather.main.temp;
 // humidity = weather.main.humidity;
  
}

function setupCanvas() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
}

function reset() {
  w = canvas.width = video.videoWidth;
  h = canvas.height = video.videoHeight;
  nrOfCubesX = w / size;
  nrOfCubesY = h / size;
}

function setupWebCamera() {
  return new Promise((resolve, reject) => {
    let constraints = { audio: false, video: true };
    navigator.mediaDevices.getUserMedia(constraints).
    then(mediaStream => {
      video = document.querySelector("video");
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
        resolve();
      };
    }).
    catch(err => {
      console.log(err.name + ": " + err.message);
      reject(err);
    });
  });
}

// Trying to be clever and keep all grayscale colors
// in a lookup table. Will we avoid some GCs?
function setupColors() {
  colors = new Map();
  for (let i = 0; i < 256; i++) {
    let c = new THREE.Color(`rgb(${i}, ${i}, ${i})`);
    colors.set(i, c);
  }
}

function setupScene() {
  scene = new THREE.Scene();
}

function setupRenderer() {
  renderer = new THREE.WebGLRenderer({
    antialias: true });

  renderer.setSize(
  window.innerWidth,
  window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function setupCamera() {
  let res = window.innerWidth / window.innerHeight;
  let z = 1 / size * 500;
  camera = new THREE.PerspectiveCamera(
  75,
  res,
  0.1,
  1000);
  camera.position.set(nrOfCubesX / 2, nrOfCubesY / 2, z);

  let controls = new THREE.OrbitControls(camera);
  controls.target.set(nrOfCubesX / 2, nrOfCubesY / 2, 0);
  controls.update();
}

function setupCubes() {
  let geometry = new THREE.BoxGeometry(1, 1, 1);
  cubes = [];
  let color = new THREE.Color(`rgb(128, 128, 128)`);
  for (let x = 0; x < nrOfCubesX; x++) {
    for (let y = 0; y < nrOfCubesY; y++) {
      let material = new THREE.MeshStandardMaterial({
        roughness: 0.5,
        color: color });

      let cube = new THREE.Mesh(geometry, material);
      cube.position.set(x, y, 0);
      scene.add(cube);
      cubes.push(cube);
    }
  }
}

function setupLights() {
  //let ambientLight = new THREE.AmbientLight(0x777777);
  //let temp = 34 ;
  let t = (temperature/10).toFixed(0) ;
  ambientLights = [0x222288, 0x036ffc, 0x039dfc, 0x03d3fc, 0x03fcf8, 0x03fca5, 0x03fc7b, 0x03fc2c, 0xc6fc03, 0xf4fc03, 0xfc2c03] ;
  spotLights = [0x222299, 0x0377fc, 0x2fb1f7, 0x60bef7, 0x6af7f5, 0x77f7ca, 0x7efcbb, 0x67f57e, 0xdbf774, 0xfbff8a, 0xfa6a4d] ;
  let ambientLight = new THREE.AmbientLight(ambientLights[t]);
  let spotLight = new THREE.SpotLight(spotLights[t]);
  scene.add(ambientLight);
  spotLight.position.set(0, nrOfCubesY, 100);
  spotLight.castShadow = true;
  scene.add(spotLight);
}

function draw() {
  switch (state) {
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
  requestAnimationFrame(draw);
  ctx.drawImage(video, 0, 0, w, h);
  pixelate();
  renderer.render(scene, camera);
  break; }

}

function pixelate() {
  let imageData = ctx.getImageData(0, 0, w, h);
  let pixels = imageData.data;

  cubes.forEach(cube => {
    let x = cube.position.x;
    let y = cube.position.y;
    let col = getAverage(pixels, w - x * size, h - y * size);
    let c = Math.round(col);
    cube.material.color = colors.get(c);
    //console.log(colors.get(c));
    let z = col / 10 + 0.01;
    cube.scale.z = z;
    cube.position.z = z / 2;
  });
}

function getAverage(pixels, x0, y0) {
  let r = 0;
  let g = 0;
  let b = 0;

  for (let x = x0; x < x0 + size; x += 1) {
    for (let y = y0; y < y0 + size; y += 1) {
      let index = (x + w * y) * 4;
      r += pixels[index];
      g += pixels[index + 1];
      b += pixels[index + 2];
    }
  }
  let val = (0.2126 * r + 0.7152 * g + 0.0722 * b) / (size * size);
  return isNaN(val) ? 1 : val;
}

function setupEventListeners() {
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect =
  window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(
  window.innerWidth,
  window.innerHeight);
}

setup();