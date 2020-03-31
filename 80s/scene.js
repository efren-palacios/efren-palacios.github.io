class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.clock = new THREE.Clock();
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 5, 10000);
    this.camera.position.z = 100;
    this.camera.position.y = 5;
    this.camera.position.x = 0;
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);
    this.grid = new THREE.InfiniteGridHelper(50, 50);
    this.grid.position.z = 500;
    this.scene.add(this.grid);
    this.scene.background = new THREE.Color(0x392759);
    this.animate();
    // SUN
    this.sunGeom = new THREE.CircleBufferGeometry(200, 64);
    this.sunMat = new THREE.LineBasicMaterial({color: 0xff8800, fog:false, transparent: true});
    //this.sunMat = new THREE.MeshBasicMaterial({ color: 0xff8800, fog: false, transparent: true });
    this.sunMat.onBeforeCompile = shader => {
      shader.uniforms.time = { value: 0 };
      shader.vertexShader =
        `
    varying vec2 vUv;
  ` + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
      vUv = uv;
    `
      );
      shader.fragmentShader = `
    varying vec2 vUv;
  ` + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        `gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
        `gl_FragColor = vec4( outgoingLight, diffuseColor.a * smoothstep(0.5, 0.75, vUv.y));`
      );
    }
    this.wireSun = new THREE.EdgesGeometry(new THREE.SphereGeometry(Math.PI * 100, Math.PI * 64, Math.PI));
    this.lines = new THREE.LineSegments(this.wireSun, this.sunMat);
    this.lines.rotateZ(Math.PI / 2);
    this.lines.position.set(0,0,-550);
    this.scene.add(this.lines);
    this.sun = new THREE.Mesh(this.sunGeom, this.sunMat);
    this.sun.position.set(0, 0, -550);
    this.scene.add(this.sun);
    

  }
  animate() {
    requestAnimationFrame(() => this.animate());
    this.grid.position.z += .25;
    this.renderer.render(this.scene, this.camera);
  }
}