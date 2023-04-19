import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import TWEEN from 'three/examples/jsm/libs/tween.module';

export const runTransform = geometry => {
	// 创建福字
	const loader = new FBXLoader();
	loader.load('/src/2-粒子动画/img/fu.fbx', function (object) {
		// 让群星运动到运动到福字的顶点
		const startPositions = geometry.getAttribute('position');
		const destPosition = object.children[0].geometry.getAttribute('position');
		for (let i = 0; i < startPositions.count; i++) {
			const tween = new TWEEN.Tween(startPositions.array);
			const cur = i % destPosition.count;
			tween.to(
				{
					[i * 3]: destPosition.array[cur * 3],
					[i * 3 + 1]: destPosition.array[cur * 3 + 1],
					[i * 3 + 2]: destPosition.array[cur * 3 + 2]
				},
				3000 * Math.random()
			);
			tween.easing(TWEEN.Easing.Exponential.In);
			tween.delay(3000);

			tween.start();

			tween.onUpdate(() => {
				startPositions.needsUpdate = true;
			});
		}
	});
};
