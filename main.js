import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ObjectControls } from './ObjectControls.js';


const renderer = new THREE.WebGLRenderer({ antialias: true });
var mesh2 = new THREE.Object3D();
var mesh3 = new THREE.Object3D();
var mesh4 = new THREE.Object3D();

renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);//0x000000
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);//
camera.position.set(0, 0.4, 1);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 2.7;
controls.maxDistance = 3.5;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.1;
controls.autoRotate = true;
controls.target = new THREE.Vector3(0, 0.5, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(1000, 1000, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff, //0x555555
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
groundMesh.color = 0xffffff;
groundMesh.position.set(0,0,0);
scene.add(groundMesh);

const groundGeometry2 = new THREE.PlaneGeometry(10000, 10000, 32, 32);
groundGeometry2.rotateY(-Math.PI / 2);
const groundMaterial2 = new THREE.MeshStandardMaterial({
  color: 0xffffff, //0x555555
  side: THREE.DoubleSide
});

const spotLight = new THREE.SpotLight(0xffffff, 100, 100, 0.22, 0.2);
spotLight.position.set(7, 5, -6);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
//spotLight.rotateY(-1)
scene.add(spotLight);

const spotLight3 = new THREE.SpotLight(0xffffff, 100, 100, 0.22, 0.2);
spotLight3.position.set(-7, 5, 6);
spotLight3.castShadow = true;
spotLight3.shadow.bias = -0.0001;
//spotLight.rotateY(-1)
scene.add(spotLight3);

const spotLight2 = new THREE.SpotLight(0xffffff, 3000000, 100000, 1, 0);
spotLight2.position.set(0, 1500, 0);
spotLight2.castShadow = false;
scene.add(spotLight2);

const loader = new GLTFLoader().setPath('public/renders/bases/CrossBaseSmall/');
loader.load('table1.gltf', (gltf) => {
  console.log('loading model');
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

const loader2 = new GLTFLoader().setPath('public/renders/worktops/TwilightWorktop/');
loader2.load('table1.gltf', (gltf) => {
  console.log('loading model');
  mesh2 = gltf.scene;

  mesh2.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  mesh2.name = "mesh2";
  mesh2.position.set(0, 0, 0);
  scene.add(mesh2);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

const loader3 = new GLTFLoader().setPath('public/renders/worktops/AutumnWorktop/');
loader3.load('table1.gltf', (gltf) => {
  console.log('loading model');
  mesh3 = gltf.scene;

  mesh3.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  mesh3.name = "mesh3";
  mesh3.position.set(0, 0, 0);
  scene.add(mesh3);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

const loader4 = new GLTFLoader().setPath('public/renders/worktops/KenyaWorktop/');
loader4.load('table1.gltf', (gltf) => {
  console.log('loading model');
  mesh4 = gltf.scene;

  mesh4.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  mesh4.name = "mesh4";
  mesh4.position.set(0, 0, 0);
  scene.add(mesh4);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}




function ABSelected(){
  mesh3.visible = true;
  mesh2.visible = false;
  mesh4.visible = false;
}

function TwiSelected(){
  mesh3.visible = false;
  mesh2.visible = true;
  mesh4.visible = false;
}

function KenyaSelected(){
  window.alert("here");
  mesh3.visible = false;
  mesh2.visible = false;
  mesh4.visible = true;
}



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  mesh2.scale.set(slider.value/2200,1,slider2.value/1000);
  mesh3.scale.set(slider.value/2200,1,slider2.value/1000);
  mesh4.scale.set(slider.value/2200,1,slider2.value/1000);
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
  mesh2.scale.set(slider.value/2200,1,slider2.value/1000);
  mesh3.scale.set(slider.value/2200,1,slider2.value/1000);
  mesh4.scale.set(slider.value/2200,1,slider2.value/1000);
}

animate();