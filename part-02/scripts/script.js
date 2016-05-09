/**
 * Created by zencoder on 5/4/16.
 */

window.addEventListener('DOMContentLoaded', function () {

    var canvas = document.querySelector('#canvas');
    //var gl = canvas.getContext('webgl');

    if ( canvas ) {

        var width = window.innerWidth;
        var height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        var renderer = new THREE.WebGLRenderer({canvas: canvas});
        renderer.setClearColor(0x000000);

        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
        camera.position.set(0,0,1000);

        var light = new THREE.AmbientLight(0xffffff);

        scene.add(light);

        var geometry = new THREE.SphereGeometry(200,12,12);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        var mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        renderer.render(scene, camera);

    }


}, false);