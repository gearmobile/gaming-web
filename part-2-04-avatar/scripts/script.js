// Ctrl+Shift+J - console Google Chrome

// x-axis - left\right
// y-axis - up\down
// z-axis - in\out

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

    // PERSPECTIVE CAMERA
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(wWidth, wHeight);
    document.body.appendChild(renderer.domElement);

    // START CODING HERE
    // ***************************************** //

    var is_wheeling = false;
    var is_flipping = false;

    var clock = new THREE.Clock();

    var marker = new THREE.Object3D();
    scene.add(marker);

    var cover = new THREE.MeshNormalMaterial();
    var body = new THREE.SphereGeometry(100);
    var avatar = new THREE.Mesh(body,cover);
    marker.add(avatar);

    // FIX CAMERA TO MARKER
    marker.add(camera);

    var hand = new THREE.SphereGeometry(50);
    var foot = new THREE.SphereGeometry(50);

    // RIGHT HAND
    var handRight = new THREE.Mesh(hand,cover);
    handRight.position.set(-150,0,0);
    avatar.add(handRight);

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

    function acrobatics () {
        if ( is_wheeling )
            handRight.position.z += 0.05;
        if ( is_flipping )
            handRight.position.x += 0.05;
    }

    function go () {
        if ( is_wheeling ) {
            avatar.rotation.z += 0.05;
        }
        if ( is_flipping ) {
            avatar.rotation.x += 0.05;
            avatar.rotation.y += 0.05;
        }
    }

    function walk () {
        if ( is_wheeling )
            handRight.position.z = Math.sin(clock.getElapsedTime()*10)*100;
    }

    function animate () {
        requestAnimationFrame(animate);
        acrobatics();
        walk();
        go();
        renderer.render(scene, camera);
    }

    makeTree(-750,-1000);
    makeTree(-500,0);
    makeTree(500,0);
    makeTree(750,-1000);

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
        if ( event.keyCode === 87 ) {
            is_wheeling = !is_wheeling;
        }

        // KEY F
        if ( event.keyCode === 70 ) {
            is_flipping = !is_flipping;
        }

    }, false);

}, false);































