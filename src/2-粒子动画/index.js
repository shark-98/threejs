import * as THREE from 'three';
import { useCamera, useRenderer, createVertices, createGeometry, createStarMaterial, createPoints, runTransform } from './hooks';

// 创建场景
const scene = new THREE.Scene();

// 创建透视相机
const { camera } = useCamera(scene);

// 渲染器
const { render } = useRenderer(scene, camera);

// 创建 30000 个随机顶点
const vertices = createVertices(30000);

// 用这些顶点创建 BufferGeometry
const geometry = createGeometry(vertices);

// 创建这些顶点上的材质（Material），也就是星星的贴图
const starMaterial = createStarMaterial();

// 创建 3D 物体
const points = createPoints(geometry, starMaterial);

scene.add(points);

const init = () => {
	window.onload = () => {
		render();
		runTransform(geometry);
	};
};

init();
