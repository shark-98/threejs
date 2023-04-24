import * as THREE from 'three';
import { CONTAINER } from '@/shared';

const renderer = new THREE.WebGLRenderer({ canvas: CONTAINER });
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 'skyblue' });

const coordinate = [
	[0, 9, 0],
	[-6, -9, 0],
	[9, 2, 0],
	[-9, 2, 0],
	[6, -9, 0],
	[0, 9, 0]
];
const points = coordinate.map(item => new THREE.Vector3(...item));
const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

const stateLoop = ['x', 'y', 'z'];
let i = 0;
let count = 0;
const getRandomCount = () => {
	return parseInt(Math.random() * 120);
};
let randomCount = getRandomCount();
const minCount = 60;

function render() {
	renderer.render(scene, camera);
	console.log(stateLoop[i]);
	line.rotation[stateLoop[i]] += 0.03;
	count++;
	if (count >= randomCount && count > minCount) {
		randomCount = getRandomCount();
		count = 0;
		i++;
		if (i === stateLoop.length) i = 0;
	}
	requestAnimationFrame(render);
}
render();
