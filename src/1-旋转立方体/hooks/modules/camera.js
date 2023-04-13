import * as THREE from 'three';
import { COEFFICIENT } from '@/shared';

export const useCamera = (scene, coefficient = COEFFICIENT) => {
	const createCamera = () => {
		const camera = new THREE.PerspectiveCamera(50, coefficient, 0.1, 1000);
		camera.position.z = 5;
		return camera;
	};

	const camera = createCamera();

	const updateCameraPosition = (mouseX, mouseY) => {
		camera.position.x += (mouseX - camera.position.x) * 0.05;
		camera.position.y += (-mouseY - camera.position.y) * 0.05;
		camera.lookAt(scene.position);
	};

	return { camera, updateCameraPosition };
};
