import * as THREE from 'three';

export const createVertices = n => {
	const vertices = [];
	for (let i = 0; i < n; i++) {
		const x = THREE.MathUtils.randFloatSpread(2000);
		const y = THREE.MathUtils.randFloatSpread(2000);
		const z = THREE.MathUtils.randFloatSpread(2000);
		vertices.push(x, y, z);
	}

	return vertices;
};
