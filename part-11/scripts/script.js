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
    var shape = new THREE.TorusGeometry(100,25,8,25,3.14);
    // 100 - радиус тора, расстояние от центра до внешнего края
    // 25 - толщина туба
    // 8 - кол-во сегментов туба
    // кол-во сегментов тора
    // 3.14 - обрезка тора на заданный угол, в радианах
    var cover = new THREE.MeshNormalMaterial();
    var torus = new THREE.Mesh(shape,cover);
    scene.add(torus);
    torus.rotation.set(0,0,0);

    // RENDERING
    renderer.render(scene, camera);

}, false);