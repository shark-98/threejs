import * as THREE from 'three';
import { WIDTH, HEIGHT } from '@/shared';

export const useRenderer = (root, scene, camera, width = WIDTH, height = HEIGHT) => {
	const createRenderer = () => {
		const renderer = new THREE.WebGLRenderer(root);
		renderer.setSize(width, height);
		return renderer;
	};

	const renderer = createRenderer();

	function render() {
		renderer.render(scene, camera);
	}

	return { renderer, render };
};
