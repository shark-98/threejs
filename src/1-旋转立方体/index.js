import { useCube, useScene, useCamera, useRenderer } from './hooks';
import { CONTAINER, WIDTH, HEIGHT } from '@/shared';

const { cube, updateCubeRotationAngle } = useCube();

const { scene } = useScene(cube);

const { camera, updateCameraPosition } = useCamera(scene);

const { render } = useRenderer({ canvas: CONTAINER }, scene, camera);

const bindMousemoveFn = () => {
	const mousemoveFn = event => {
		const mouseX = (event.clientX / WIDTH) * 2 - 1;
		const mouseY = -(event.clientY / HEIGHT) * 2 + 1;
		updateCameraPosition(mouseX, mouseY);

		updateCubeRotationAngle();

		render(mouseX, mouseY);
	};

	CONTAINER.addEventListener('mousemove', mousemoveFn);
};

const init = () => {
	window.onload = () => {
		bindMousemoveFn();
		render();
	};
};

init();
