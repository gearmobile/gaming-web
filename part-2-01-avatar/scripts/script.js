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

    // RIGHT HAND
    var handRight = new THREE.Mesh(hand,cover);
    //scene.add(handRight); // add to scene
    avatar.add(handRight); // add to avatar
    handRight.position.set(-150,0,0);

    // LEFT HAND
    var handLeft = new THREE.Mesh(hand,cover);
    //scene.add(handLeft);
    avatar.add(handLeft);
    handLeft.position.set(150,0,0);

    var foot = new THREE.SphereGeometry(50);

    // RIGHT FOOT
    var footRight = new THREE.Mesh(foot, cover);
    //scene.add(footRight);
    avatar.add(footRight);
    footRight.position.set(-75,-130,0);

    // LEFT FOOT
    var footLeft = new THREE.Mesh(foot, cover);
    //scene.add(footLeft);
    avatar.add(footLeft);
    footLeft.position.set(75,-130,0);

    // RENDERING
    // renderer.render(scene, camera);

    var is_wheeling = false;
    var is_flipping = false;

    function animate () {
        requestAnimationFrame(animate);
        if ( is_wheeling ) {
            avatar.rotation.z += 0.05;
        }
        if ( is_flipping ) {
            avatar.rotation.x += 0.05;
            avatar.rotation.y += 0.05;
        }
        renderer.render(scene, camera);
    }

    animate();

}, false);































