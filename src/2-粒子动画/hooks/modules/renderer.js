import * as THREE from 'three';
import { CONTAINER, WIDTH, HEIGHT } from '@/shared';
import TWEEN from 'three/examples/jsm/libs/tween.module';

export const useRenderer = (scene, camera) => {
	const renderer = new THREE.WebGLRenderer({ canvas: CONTAINER });
	renderer.setSize(WIDTH, HEIGHT);

	// 通过 requestAnimationFrame 来一帧帧的渲染
	function render() {
		TWEEN.update();
		renderer.render(scene, camera);
		scene.rotation.y += 0.001;
		requestAnimationFrame(render);
	}

	return {
		render
	};
};
