var scene, camera, renderer;

window.addEventListener('DOMContentLoaded', function () {

    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;

    // CREATE SCENE
    scene = new THREE.Scene();

    // CREATE AND ADD CAMERA
    var ratio = wWidth / wHeight;
    camera = new THREE.PerspectiveCamera(75, ratio, 1, 10000);
    camera.position.z = 500;
    scene.add(camera);

    // PERSPECTIVE CAMERA
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(wWidth, wHeight);
    document.body.appendChild(renderer.domElement);

    // START CODING HERE

    var shape = new THREE.SphereGeometry(100,20,15); // create geometry
    var cover = new THREE.MeshNormalMaterial(); // create material
    var ball = new THREE.Mesh(shape, cover); // create new mesh
    scene.add(ball); // add ball into scene
    ball.position.set(-250,250,-250);



    // RENDERING
    renderer.render(scene, camera);

}, false);