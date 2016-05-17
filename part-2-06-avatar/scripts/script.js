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

    // PERSPECTIVE CAMERA
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(wWidth, wHeight);
    document.body.appendChild(renderer.domElement);

    // START CODING HERE
    // ***************************************** //

    var notAllowed = [];

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

        // MAKE BOUNDARY
        var boundary = new THREE.Mesh( new THREE.CircleGeometry(300), new THREE.MeshNormalMaterial());
        boundary.position.y = -100;
        boundary.rotation.x = -Math.PI/2;
        treeTrunk.add(boundary);
        notAllowed.push(boundary);

        treeTrunk.position.set(x, -75, z);

        scene.add(treeTrunk);

    }

    makeTree(-750,-1000);
    makeTree(-500,0);
    makeTree(500,0);
    makeTree(750,-1000);

    // ROTATE AND FLIP AVATAR
    function animate () {

        requestAnimationFrame(animate);
        TWEEN.update();
        walk();
        turn();
        acrobatics();
        renderer.render(scene, camera);

    }

    animate();

    var is_wheeling = false;
    var is_flipping = false;

    function acrobatics () {
        if ( is_wheeling ) {
            avatar.rotation.z += 0.05;
        }
        if ( is_flipping ) {
            avatar.rotation.x += 0.05;
            avatar.rotation.y += 0.05;
        }
    }

    function walk () {
        if ( !isWalking() ) return;
        var position = Math.sin(clock.getElapsedTime()*5)*50;
        handRight.position.z = position;
        handLeft.position.z = -position;
        footLeft.position.z = position;
        footRight.position.z = -position;
    }

    function turn () {
        var direction = 0;
        if(isMovingForward) direction = Math.PI;
        if(isMovingBackward) direction = 0;
        if(isMovingRight) direction = Math.PI/2;
        if(isMovingLeft) direction = -Math.PI/2;
        spinAvatar(direction);
    }

    function spinAvatar (direction) {
        new TWEEN.Tween({y:avatar.rotation.y}).to({y:direction},500).
            onUpdate( function () {
                avatar.rotation.y = this.y;
            }).start();
    }

    var isMovingRight, isMovingLeft, isMovingForward, isMovingBackward;
    function isWalking () {
        if( isMovingForward ) return true;
        if( isMovingBackward ) return true;
        if( isMovingLeft ) return true;
        if( isMovingRight ) return true;
        return false;
    }

    document.addEventListener('keydown', function (event) {

        console.log(event.keyCode);

        // MOVE LEFT
        if ( event.keyCode === 37 ) {
            marker.position.x -= 5;
            isMovingLeft = true;
        }

        // MOVE RIGHT
        if ( event.keyCode === 39 ) {
            marker.position.x += 5;
            isMovingRight = true;
        }

        // MOVE FORWARD
        if ( event.keyCode === 38 ) {
            marker.position.z += 5;
            isMovingForward = true;
        }

        // MOVE BACKWARD
        if ( event.keyCode === 40 ) {
            marker.position.z -= 5;
            isMovingBackward = true;
        }

        // KEY C
        if ( event.keyCode === 67 ) {
            is_wheeling = !is_wheeling;
        }

        // KEY F
        if ( event.keyCode === 70 ) {
            is_flipping = !is_flipping;
        }

        // REVERSE POSITIONS
        if ( detectCollisions() ) {
            if ( isMovingLeft ) marker.position.x += 5;
            if ( isMovingRight ) marker.position.x -= 5;
            if ( isMovingForward ) marker.position.z -= 5;
            if ( isMovingBackward ) marker.position.z += 5;
        }

    }, false);

    document.addEventListener('keyup', function (event) {
        var code = event.keyCode;
        if ( code === 37 ) isMovingLeft = false;
        if ( code === 38 ) isMovingForward = false;
        if ( code === 39 ) isMovingRight = false;
        if ( code === 40 ) isMovingBackward = false;
    }, false);

    function detectCollisions() {
        var vector = new THREE.Vector3(0, -1, 0);
        var raycaster = new THREE.Raycaster(marker.position, vector);
        var intersects = raycaster.intersectObjects(notAllowed);
        if ( intersects.length > 0 ) return true;
        return false;
    }

}, false);































