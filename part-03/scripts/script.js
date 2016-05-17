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
    renderer.shadowMapEnabled = true; // enable shadows
    renderer.setSize(wWidth, wHeight);
    renderer.setClearColor(0xffffff, 1);
    document.body.appendChild(renderer.domElement);

    // START CODING HERE

    // CREATE BALL WITH BASIC MATERIAL
    var shape = new THREE.SphereGeometry(100);
    var cover = new THREE.MeshBasicMaterial();
    cover.color.setRGB(0.36,0.54,0.66); // set color for material
    var ball = new THREE.Mesh(shape,cover);
    ball.position.set(300, 0, 0);
    scene.add(ball);

    // CREATE TORUS WITH PHONG MATERIAL
    var torusShape = new THREE.TorusGeometry(100,50,8,20);
    var torusCover = new THREE.MeshPhongMaterial();
    torusCover.emissive.setRGB(0.8, 0.1, 0.1);
    torusCover.specular.setRGB(0.4, 0.4, 0.4);
    var torus = new THREE.Mesh(torusShape,torusCover);
    scene.add(torus);
    torus.castShadow = true;

    // CREATE LIGHTS
    var sunshine = new THREE.DirectionalLight();
    sunshine.intensity = 0.5;
    sunshine.position.set(100,100,100);
    scene.add(sunshine);
    sunshine.castShadow = true;

    // CREATE GROUND FOR SHADOW
    var groundShape = new THREE.PlaneGeometry(1000,1000);
    var groundCover = new THREE.MeshBasicMaterial();
    var ground = new THREE.Mesh(groundShape,groundCover);
    scene.add(ground);
    ground.position.set(0,-200,0);
    ground.rotation.set(-Math.PI/2,0,0);
    ground.receiveShadow = true;



    // RENDERING
    renderer.render(scene, camera);

}, false);



































