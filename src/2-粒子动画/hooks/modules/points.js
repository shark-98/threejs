import * as THREE from 'three';

export const createPoints = (geometry, starMaterial) => {
	const points = new THREE.Points(geometry, starMaterial);
	points.translateY(-100);

	return points;
};
