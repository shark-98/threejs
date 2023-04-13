import * as THREE from 'three';

export const useScene = cube => {
	const createScene = cube => {
		const scene = new THREE.Scene();
		scene.add(cube);
		return scene;
	};

	const scene = createScene(cube);

	return { scene };
};
