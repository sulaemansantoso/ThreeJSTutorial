

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.background = new THREE.Color(0xFFFFFF);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x02ff02 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var triangle = new THREE.Geometry();
triangle.vertices.push(
	new THREE.Vector3(-1,1,0),
	new THREE.Vector3(-1,-1,0),
	new THREE.Vector3(1,-1,0),
	new THREE.Vector3(1,1,0),

);
triangle.faces.push(new THREE.Face3(0,1,2));
triangle.faces.push(new THREE.Face3(2,3,0));

var material = new THREE.LineBasicMaterial( { color: 0x00a0ff});
var triangle_mesh = new THREE.Mesh( triangle, material );

scene.add(triangle_mesh); 
var gridXZ = new THREE.GridHelper(100, 10);
gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
scene.add(gridXZ);

camera.position.z = 5;
//camera.position.y = 2;
//camera.position.x = 1;

var controls= new THREE.OrbitControls(camera);
 controls.update();

function animate() {
	requestAnimationFrame( animate ); 
	controls.update();
	renderer.render( scene, camera );
}
animate();