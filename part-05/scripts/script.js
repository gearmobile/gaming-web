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

    var shape = new THREE.CylinderGeometry(100,100,20);
    var cover = new THREE.MeshNormalMaterial();
    var torus = new THREE.Mesh(shape,cover);
    scene.add(torus);
    torus.rotation.set(0.4, 0.5, 0.4);

    // RENDERING
    renderer.render(scene, camera);

}, false);