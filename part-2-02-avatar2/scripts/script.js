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

    var headShape = new THREE.SphereGeometry(100);
    var bodyShape = new THREE.CylinderGeometry(1,160,220,30);
    var handShape = new THREE.SphereGeometry(50);
    var footShape = new THREE.SphereGeometry(50);
    var cover = new THREE.MeshNormalMaterial();

    var head = new THREE.Mesh(headShape,cover);
    var body = new THREE.Mesh(bodyShape,cover);
    var handRight = new THREE.Mesh(handShape,cover);
    var handLeft = new THREE.Mesh(handShape,cover);
    var footRight = new THREE.Mesh(footShape,cover);
    var footLeft = new THREE.Mesh(footShape,cover);

    scene.add(head,body,handRight,handLeft,footRight,footLeft);

    head.position.set(0,100,0);
    handRight.position.set(-150,0,0);
    handLeft.position.set(150,0,0);
    footRight.position.set(-100,-300,0);
    footLeft.position.set(100,-300,0);
    body.position.set(0,-50,0);

    // RENDERING
    renderer.render(scene, camera);

}, false);



































