import * as THREE from 'three';
import { CONTAINER } from '@/shared';

// 渲染器
const renderer = new THREE.WebGLRenderer({ canvas: CONTAINER });
renderer.setSize(window.innerWidth, window.innerHeight);

// 相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// 场景
const scene = new THREE.Scene();

// 材质
const material = new THREE.LineBasicMaterial({ color: 'skyblue' });

// 几何体
const coordinate = [
	[-10, 0, 0],
	[0, 10, 0],
	[10, 0, 0],
	[-10, 0, 0]
];
const points = coordinate.map(item => new THREE.Vector3(...item));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
// 注意，线是画在每一对连续的顶点之间的，而不是在第一个顶点和最后一个顶点之间绘制线条（线条并未闭合）

// 有了能够画两条线的点和一个材质，可以将他们组合在一起，形成一条线。
const line = new THREE.Line(geometry, material);

// 把它添加到场景中，并调用render（渲染）函数
scene.add(line);
renderer.render(scene, camera);
