import * as THREE from 'three';

// 给 BufferGeometry 对象设置顶点位置，指定 3 个数值（x、y、z）为一个坐标。
export const createGeometry = vertices => {
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

	return geometry;
};
