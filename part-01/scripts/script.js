window.addEventListener('DOMContentLoaded', function () {

    // THIS IS WHERE STUFF IN OUR GAME WILL HAPPEN:
    var scene = new THREE.Scene();

// THIS IS WHAT SEES THE STUFF:
    var aspect_ratio = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera( 75, aspect_ratio, 1, 10000 );
    camera.position.z = 500;
    scene.add( camera );

// THIS WILL DRAW WHAT THE CAMERA SEES ONTO THE SCREEN:
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xffffff );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

// ******** START CODING ON THE NEXT LINE ********

    var shape = new THREE.SphereGeometry( 100, 20, 6 );
    var cover = new THREE.MeshNormalMaterial({ wireframe: true });
    var ball = new THREE.Mesh( shape, cover );
    scene.add( ball );


// NOW, SHOW WHAT THE CAMERA SEES ON THE SCREEN:
    renderer.render( scene, camera );

}, false);