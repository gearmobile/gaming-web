
var scene, camera, renderer;

window.addEventListener('DOMContentLoaded', function () {

    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;

    // CREATE SCENE
    scene = new THREE.Scene();

    // CREATE AND ADD CAMERA
    var ratio = wWidth / wHeight;
    camera = new THREE.PerspectiveCamera( 75, ratio, 1, 10000 );
    camera.position.z = 500;
    scene.add(camera);

    // PERSPECTIVE CAMERA
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(wWidth, wHeight);
    document.body.appendChild(renderer.domElement);

    // START CODING HERE
    // ***************************************** //

    var roadShape = new THREE.CubeGeometry( 200, 1000, 10 );
    var roadTexture = new THREE.MeshBasicMaterial({ color:0x990000 });
    var road = new THREE.Mesh( roadShape, roadTexture );

    road.position.set( 0, 400, 0 );
    road.rotation.set( -Math.PI/4, 0, 0 );

    scene.add(road);

    renderer.render(scene, camera);

}, false);































