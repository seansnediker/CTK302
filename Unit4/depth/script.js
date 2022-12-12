var renderer, scene, camera, container, userData;
var video;

var ww = window.innerWidth,
	wh = window.innerHeight;

function Values(){
	this.precision = 4;
	this.depth = 50;
	this.backwards = false;
	this.picture = "burger";
	this.animation = true;
	this.wireframe = true;
	this.randomize = function(){
		createParticles("random");
	};
}

function init(){
  // ...
  // Initialize the video element and set the source to the user's webcam
  video = document.createElement('video');
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  }).then(function(stream){
    video.srcObject = stream;
    video.play();
  });
  
  // ...
}

var billData = [];
var canvas, ctx;
function getImgData(){
  // ...
  // Instead of drawing the image from the file, draw the video feed to the canvas
  ctx.drawImage(video, 0, 0);
  // ...
}
var first = true, bill;
function loadImage(){

	bill = new Image();
  bill.crossOrigin = "Anonymous";
	bill.onload = function(){

		getImgData();
		createParticles();
		
		if(first){
			requestAnimationFrame(render);
			first = false;
		}
	};
	bill.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/"+userData.picture+".png";

}


var pointsBill = null, amount = 0;
function createParticles(randomize){
	var geometry = new THREE.Geometry();
	amount = 0;
	if(pointsBill!==null){
		container.remove(pointsBill);
		pointsBill = null;
	}
	for(var y=0;y<bill.height;y+=userData.precision){
		for(var x=0;x<bill.width;x+=userData.precision){
			var color = [billData[(y*bill.width + x)*4], billData[(y*bill.width + x)*4+1], billData[(y*bill.width + x)*4+2], billData[(y*bill.width + x)*4+3]];
			var destination = {
				x : x- bill.width/2,
				y : bill.height/2-y,
				z : (userData.backwards?-1:1)*(0.299*color[0] + 0.587*color[1] + 0.114*color[2])*(userData.depth*0.01)
			};
			if(randomize === "random"){
				var particle = new THREE.Vector3( destination.x+(Math.random()-0.5)*50, destination.y+(Math.random()-0.5)*50, (Math.random()-0.5)*50);
			}
			else{
				var particle = new THREE.Vector3( destination.x, destination.y, 0);
			}

			if(!userData.animation){
				var particle = new THREE.Vector3( destination.x, destination.y, destination.z);
			}

			geometry.vertices.push(particle);
			particle.destination = destination;
			var outColor = new THREE.Color().set("rgb("+color[0]+","+color[1]+","+color[2]+")");
			if(color[3]<200){
				outColor = new THREE.Color(0x000000);
				particle.destination.z = 0;
				particle.z = 0;
			}
			if(y/userData.precision<(bill.height/userData.precision-1) && x/userData.precision < (bill.width/userData.precision-1)){
				var face = new THREE.Face3(amount, amount+1, amount+bill.width/userData.precision);
				geometry.faces.push(face);
				face.color.set(outColor)
				var face = new THREE.Face3(amount+1, amount+bill.width/userData.precision, amount+bill.width/userData.precision+1);
				geometry.faces.push(face);
				face.color.set(outColor)
			}
			amount++;
		}
	}
	var material = new THREE.MeshBasicMaterial({wireframe:userData.wireframe, vertexColors: THREE.FaceColors,side:THREE.DoubleSide });
	pointsBill = new THREE.Mesh(geometry, material);
	container.add(pointsBill);
}

function onMousemove(e){
	var x = (e.clientX-ww/2)/(ww/2);
	var y = (e.clientY-wh/2)/(wh/2);
	container.destination.x = y*0.5;
	container.destination.y = x*0.5;
}

function onResize(){
	ww = window.innerWidth;
	wh = window.innerHeight;
	camera.aspect = ww / wh;
	camera.updateProjectionMatrix();

	renderer.setSize( ww, wh );
}

function updateParticles(){
	for(var i=amount-1;i>0;i--){
		var particle = pointsBill.geometry.vertices[i];
		particle.x += (particle.destination.x - particle.x)*0.01;
		particle.y += (particle.destination.y - particle.y)*0.01;
		particle.z += (particle.destination.z - particle.z)*0.01;
	}
}

function render (a) {
	requestAnimationFrame(render);

	updateParticles();
	pointsBill.geometry.verticesNeedUpdate = true;

	container.rotation.x += (container.destination.x - container.rotation.x)*0.05;
	container.rotation.y += (container.destination.y - container.rotation.y)*0.05;

	renderer.render(scene, camera);
};

init();