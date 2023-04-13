# [threejs](https://threejs.org/docs/)

---

> 透过摄像机渲染出场景

- 场景(scene)

  - 创建 BoxGeometry（立方体对象）

    - 包含了一个立方体中所有的顶点（vertices）和面（faces）

  - 创建 MeshBasicMaterial（材质）

    - 颜色等

  - 创建 Mesh（网格）

    - 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动

  - 添加到场景中
    - 默认情况下，当我们调用 scene.add()的时候，物体将会被添加到(0,0,0)坐标。但将使得摄像机和立方体彼此在一起。为了防止这种情况的发生，我们只需要将摄像机稍微向外移动一些即可。

- 相机(camera)

  - 创建 PerspectiveCamera（透视摄像机）
    - 第一个参数是视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
    - 第二个参数是长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
    - 接下来的两个参数是近截面（near）和远截面（far）。 当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。

- 渲染器(renderer)

  - 创建一个渲染器的实例

    - 除了我们在这里用到的 WebGLRenderer 渲染器之外，Three.js 同时提供了其他几种渲染器，当用户所使用的浏览器过于老旧，或者由于其他原因不支持 WebGL 时，可以使用这几种渲染器进行降级。

  - 设置一个渲染器的尺寸

    - 使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序。因此，我们可以将渲染器宽高设置为浏览器窗口宽高。对于性能比较敏感的应用程序来说，你可以使用 setSize 传入一个较小的值，例如 window.innerWidth/2 和 window.innerHeight/2，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景。
    - 如果希望保持应用程序的尺寸，但是以较低的分辨率来渲染，你可以在调用 setSize 时，将 updateStyle（第三个参数）设为 false。例如，假设你的 canvas 标签现在已经具有了 100%的宽和高，调用 setSize(window.innerWidth/2, window.innerHeight/2, false)将使得你的应用程序以一半的分辨率来进行渲染。

  - 将 renderer（渲染器）的 dom 元素（renderer.domElement）添加到我们的 HTML 文档中。这就是渲染器用来显示场景给我们看的 canvas 元素。

- 渲染场景

  - renderer.render( scene, camera );

- code

  ```
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

  function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  animate();
  ```
