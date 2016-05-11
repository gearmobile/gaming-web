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

    var shape = new THREE.CylinderGeometry(1,100,100,4);
    var cover = new THREE.MeshNormalMaterial();
    var pyramide = new THREE.Mesh(shape,cover);
    scene.add(pyramide);
    pyramide.rotation.set(0.5, -0.6, 0.2);

    // RENDERING
    renderer.render(scene, camera);

}, false);