import * as THREE from 'three';

export const createStarMaterial = () => {
	const star = new THREE.TextureLoader().load('/src/2-粒子动画/img/star.png');
	const material = new THREE.PointsMaterial({ size: 10, map: star });

	return material;
};
