import * as THREE from 'three';
import { COEFFICIENT } from '@/shared';

export const useCamera = scene => {
	// 创建透视相机(可以看到的视野角度（45）、宽高比（width/height）、远近范围（0.1 到 1000）这 3 种参数。)
	const camera = new THREE.PerspectiveCamera(45, COEFFICIENT, 0.1, 1000);

	// 调整下相机的位置和观察方向：
	camera.position.set(100, 0, 400);
	camera.lookAt(scene.position);

	return {
		camera
	};
};
