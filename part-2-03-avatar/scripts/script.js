// Ctrl+Shift+J - console Google Chrome

// keypress
// keydown
// keyup
// event.keyCode

// arrow left - 37
// arrow up - 38
// arrow down - 40
// arrow right - 39

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
    //scene.add(camera);

    // PERSPECTIVE CAMERA
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(wWidth, wHeight);
    document.body.appendChild(renderer.domElement);

    // START CODING HERE
    // ***************************************** //

    var marker = new THREE.Object3D(); // create marker
    scene.add(marker);

    var cover = new THREE.MeshNormalMaterial();
    var body = new THREE.SphereGeometry(100);
    var avatar = new THREE.Mesh(body,cover);
    //avatar.add(camera);
    marker.add(avatar,camera);

    // FIX CAMERA TO AVATAR
    scene.add(avatar);

    var hand = new THREE.SphereGeometry(50);
    var foot = new THREE.SphereGeometry(50);

    // RIGHT HAND
    var handRight = new THREE.Mesh(hand,cover);
    avatar.add(handRight);
    handRight.position.set(-150,0,0);

    // LEFT HAND
    var handLeft = new THREE.Mesh(hand,cover);
    avatar.add(handLeft);
    handLeft.position.set(150,0,0);

    // RIGHT FOOT
    var footRight = new THREE.Mesh(foot, cover);
    avatar.add(footRight);
    footRight.position.set(-75,-130,0);

    // LEFT FOOT
    var footLeft = new THREE.Mesh(foot, cover);
    avatar.add(footLeft);
    footLeft.position.set(75,-130,0);

    // MAKE TREE
    function makeTree(x,z) {

        // MAKE TREE TRUNK
        var treeTrunkShape = new THREE.CylinderGeometry(50,50,200);
        var treeTrunkColor = new THREE.MeshBasicMaterial({color:0xA0522D});
        var treeTrunk = new THREE.Mesh(treeTrunkShape,treeTrunkColor);

        // MAKE TREE CRONE
        var treeCrownShape = new THREE.SphereGeometry(150);
        var treeCrownColor = new THREE.MeshBasicMaterial({color:0x228B22});
        var treeCrown = new THREE.Mesh(treeCrownShape,treeCrownColor);
        treeCrown.position.set(0,175,0);

        treeTrunk.add(treeCrown);
        treeTrunk.position.set(x,-75,z);

        scene.add(treeTrunk);

    }

    makeTree(-750,-1000);
    makeTree(-500,0);
    makeTree(500,0);
    makeTree(750,-1000);

    var is_wheeling = false;
    var is_flipping = false;

    // ROTATE AND FLIP AVATAR
    function animate () {

        requestAnimationFrame(animate);
        if ( is_wheeling ) {
            avatar.rotation.z += 0.05;
        }
        if ( is_flipping ) {
            avatar.rotation.x += 0.05;
            avatar.rotation.y += 0.05;
        }
        // RENDERING
        renderer.render(scene, camera);

    }

    animate();

    document.addEventListener('keydown', function (event) {

        console.log(event.keyCode);

        // MOVE LEFT
        if ( event.keyCode === 37 ) {
            marker.position.x -= 5;
        }

        // MOVE RIGHT
        if ( event.keyCode === 39 ) {
            marker.position.x += 5;
        }

        // MOVE FORWARD
        if ( event.keyCode === 38 ) {
            marker.position.z += 5;
        }

        // MOVE BACKWARD
        if ( event.keyCode === 40 ) {
            marker.position.z -= 5;
        }

        // KEY C
        if ( event.keyCode === 67 ) {
            is_wheeling = !is_wheeling;
        }

        // KEY F
        if ( event.keyCode === 70 ) {
            is_flipping = !is_flipping;
        }

    }, false);

}, false);































