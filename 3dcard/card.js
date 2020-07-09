class Card {
  constructor() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.renderer.setClearColor(0x1c1c1c, 1);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.clock = new THREE.Clock();
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 10000);
    this.camera.position.z = 300;
    this.camera.lookAt(this.scene.position);

    this.light1 = new THREE.DirectionalLight(0xff0040, .5);
    this.light1.position.set(250,250,1);
    this.camera.add(this.light1);
    
    this.light2 = new THREE.DirectionalLight(0x0040ff, .5);
    this.light2.position.set(500,500,1);
    this.camera.add(this.light2);

    this.light3 = new THREE.DirectionalLight(0x80ff80, .5);
    this.light3.position.set(-500,-500,1);
    this.camera.add(this.light3);

    this.light4 = new THREE.DirectionalLight(0xffaa00, .5);
    this.light4.position.set(-250,250, 1);
    this.camera.add(this.light4); 

    this.geometry1 = new THREE.PlaneGeometry(100,140,1,1);
    this.geometry2 = new THREE.PlaneGeometry(100,140,1,1);
    this.geometry2.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

    this.loader = new THREE.TextureLoader();

    this.textureFront = this.loader.load("./Locke_Dungeon_Heiress.png");
    this.textureBack = this.loader.load('./CardBack3.jpg')
    this.foil = new this.loader.load('./foil.jpg');

    this.material1 = new THREE.MeshPhongMaterial({map: this.textureFront});
    this.material2 = new THREE.MeshBasicMaterial({map: this.textureBack});

    this.card = new THREE.Object3D();
    this.scene.add(this.card);

    this.directionalLight = new THREE.DirectionalLight(0xffffff);
    this.directionalLight.target = this.card;
    this.directionalLight.position.x = 1;
    this.directionalLight.position.y = 1;
    this.directionalLight.position.z = 1;
    this.scene.add(this.directionalLight);

    this.mesh1 = new THREE.Mesh(this.geometry1, this.material1)
    this.card.add(this.mesh1);
    this.mesh2 = new THREE.Mesh(this.geometry2, this.material2)
    this.card.add(this.mesh2);
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

    this.scene.add(this.camera);

 
    this.animate();

  }
  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}