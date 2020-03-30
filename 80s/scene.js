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
    this.scene.add(this.grid);
    this.scene.background = new THREE.Color(0x392759);
    this.animate();
  }
  animate() {
    requestAnimationFrame(() => this.animate());
    this.camera.position.z += -.25;
    this.renderer.render(this.scene, this.camera);
  }
}