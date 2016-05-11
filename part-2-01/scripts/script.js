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

    var cover = new THREE.MeshNormalMaterial();
    var body = new THREE.SphereGeometry(100);
    var avatar = new THREE.Mesh(body,cover);
    scene.add(avatar);

    var hand = new THREE.SphereGeometry(50);
    var handRight = new THREE.Mesh(hand,cover);
    scene.add(handRight);
    handRight.position.set(-150,0,0);
    var handLeft = new THREE.Mesh(hand,cover);
    scene.add(handLeft);
    handLeft.position.set(150,0,0);

    // RENDERING
    renderer.render(scene, camera);

}, false);