/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let cbat;

function preload() {
  cbat = loadSound("assets/cbat.mp3");
}

function setup() {
  createCanvas(500, 500);
  cbat.play();
}

function draw() {
  background("black");
}


function touchStarter() {
  getAudioContext().resume();
}