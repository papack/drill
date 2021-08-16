"use strict";

const init = () => {
  const screenWidth = 800;
  const screenHeight = 600;

  const scene = new THREE.Scene();
  const box = generateBox(1, 1, 1);
  box.name = "myBox";

  scene.add(box);

  const camera = new THREE.PerspectiveCamera(
    60,
    screenWidth / screenHeight,
    1,
    1000
  );

  camera.position.x = 10;
  camera.position.y = 10;
  camera.position.z = 10;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(screenWidth, screenHeight);
  document.getElementById("canvas").appendChild(renderer.domElement);

  mainLoop(renderer, scene, camera);
};

const generateBox = (w, h, d) => {
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = new THREE.MeshBasicMaterial({
    color: "green",
  });
  return new THREE.Mesh(geo, mat);
};

const mainLoop = (renderer, scene, camera) => {
  const box = scene.getObjectByName("myBox");
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    mainLoop(renderer, scene, camera);
  });
};

init();
