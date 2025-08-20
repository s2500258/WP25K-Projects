import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

const container = document.getElementById('viewer');
const shapePicker = document.getElementById('shapePicker');
const colorPicker = document.getElementById('colorPicker');
const width = container.clientWidth;
const height = container.clientHeight;

let scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  width / height,
  0.1,
  1000
);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);
camera.position.z = 5;
let currentColor = colorPicker.value;
let material = new THREE.MeshPhongMaterial({ color: currentColor});

let geometry = new THREE.CylinderGeometry(1);
let currentShape = new THREE.Mesh(geometry, material);

function changeColor(newColor){
  material.color.set(newColor);
};

function shaping(geometry){
currentShape = new THREE.Mesh(geometry, material);
scene = new THREE.Scene();
scene.add(light);
scene.add(currentShape);
};

shaping(geometry);

// Resize 
window.addEventListener('resize', () => {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

let isDragging = false;
let previousPosition = { x: 0, y: 0 };

const toRadians = (angle) => angle * (Math.PI / 180);

// Mouse 
renderer.domElement.addEventListener('mousedown', (event) => {
  isDragging = true;
  previousPosition.x = event.clientX;
  previousPosition.y = event.clientY;
});

renderer.domElement.addEventListener('mouseup', () => {
  isDragging = false;
});

renderer.domElement.addEventListener('mouseleave', () => {
  isDragging = false;
});

renderer.domElement.addEventListener('mousemove', (event) => {
  if (!isDragging) return;

  const deltaMove = {
    x: event.clientX - previousPosition.x,
    y: event.clientY - previousPosition.y
  };

  currentShape.rotation.y += toRadians(deltaMove.x * 0.5);
  currentShape.rotation.x += toRadians(deltaMove.y * 0.5);

  previousPosition.x = event.clientX;
  previousPosition.y = event.clientY;
});

// Touch 
renderer.domElement.addEventListener('touchstart', (event) => {
  if (event.touches.length === 1) {
    isDragging = true;
    previousPosition.x = event.touches[0].clientX;
    previousPosition.y = event.touches[0].clientY;
  }
});

renderer.domElement.addEventListener('touchend', () => {
  isDragging = false;
});

renderer.domElement.addEventListener('touchmove', (event) => {
  if (!isDragging || event.touches.length !== 1) return;

  const touch = event.touches[0];

  const deltaMove = {
    x: touch.clientX - previousPosition.x,
    y: touch.clientY - previousPosition.y
  };

  currentShape.rotation.y += toRadians(deltaMove.x * 0.5);
  currentShape.rotation.x += toRadians(deltaMove.y * 0.5);

  previousPosition.x = touch.clientX;
  previousPosition.y = touch.clientY;
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

shapePicker.addEventListener("change", function(event){
const selectedShape = shapePicker.options[shapePicker.selectedIndex];
if (selectedShape.getAttribute('name') == 'cone'){
  geometry = new THREE.ConeGeometry(1, 2, 32);
}
if (selectedShape.getAttribute('name') == 'cylinder'){
  geometry = new THREE.CylinderGeometry(2, 2, 2);
}
if (selectedShape.getAttribute('name') == 'torus'){
  geometry = new THREE.TorusGeometry(2);
}
if (selectedShape.getAttribute('name') == 'cube'){
    geometry = new THREE.BoxGeometry(2,2,2);
  }
shaping(geometry);
});

colorPicker.addEventListener("input", function(event){
changeColor(colorPicker.value);
});