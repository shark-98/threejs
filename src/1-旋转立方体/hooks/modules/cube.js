import * as THREE from 'three';

export const useCube = () => {
	const createCube = () => {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 'skyblue' });
		return new THREE.Mesh(geometry, material);
	};

	const cube = createCube();

	const updateCubeRotationAngle = () => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	};

	return { cube, updateCubeRotationAngle };
};
