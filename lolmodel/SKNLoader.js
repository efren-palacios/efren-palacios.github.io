THREE.SKNLoader = function (manager) {

  this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;

};

THREE.SKNLoader.prototype = {

  constructor: THREE.SKNLoader,

  load: function (url, onLoad, onProgress, onError) {

    var self = this;

    var loader = new THREE.XHRLoader(self.manager);
    loader.setResponseType('arraybuffer');
    loader.load(url, function (buffer) {
      onLoad(self.parse(buffer));
    }, onProgress, onError);

  },

  setCrossOrigin: function (value) {
    this.crossOrigin = value;
  },

  parse: function (buffer) {
    console.time('SKNLoader');

    this.parser = new THREE.FileParser(buffer)

    var self = this,
      skn = {
        header: {},
        vertices: [],
        materials: []
      },
      geometry = new THREE.Geometry(),
      i1, i2, i3,
      v1, v2, v3,
      materials,
      face,
      i;

    // PARSING
    skn.header.magic = this.parser.int32();
    skn.header.version = this.parser.uint16();
    skn.header.numObject = this.parser.uint16();

    if (skn.header.version < 0 || skn.header.version > 4) {
      return console.error('SKN version unsupported.');
    }

    this['_parseV' + skn.header.version](skn);

    // COMPOSING
    geometry.faceVertexUvs[0] = [];

    skn.vertices.forEach(function (vertex) {
      geometry.vertices.push(
        new THREE.Vector3(
          vertex.position.x,
          vertex.position.y,
          vertex.position.z
        )
      );
      geometry.skinIndices.push(
        new THREE.Vector4(
          vertex.boneIndices.x,
          vertex.boneIndices.y,
          vertex.boneIndices.z,
          vertex.boneIndices.w
        )
      );
      geometry.skinWeights.push(
        new THREE.Vector4(
          vertex.weight.x,
          vertex.weight.y,
          vertex.weight.z,
          vertex.weight.w
        )
      );
    });

    for (i = 0; i < skn.indices.length; i += 3) {

      i1 = skn.indices[i];
      i2 = skn.indices[i + 1];
      i3 = skn.indices[i + 2];

      v1 = skn.vertices[i1];
      v2 = skn.vertices[i2];
      v3 = skn.vertices[i3];

      face = new THREE.Face3(i1, i2, i3, [v1.normals, v2.normals, v3.normals]);

      if (skn.materials.length) {
        face.materialIndex = self._findMaterialIndex(i, skn.materials) || 0;
      }

      geometry.faceVertexUvs[0].push([
        new THREE.Vector2(v1.uv.u, v1.uv.v),
        new THREE.Vector2(v2.uv.u, v2.uv.v),
        new THREE.Vector2(v3.uv.u, v3.uv.v)
      ]);

      geometry.faces.push(face);
    }

    // geometry.computeVertexNormals();
    geometry.computeFaceNormals();
    geometry.computeBoundingBox();

    // MATERIALS
    materials = skn.materials.map(function (material) {
      return new THREE.MeshLambertMaterial({
        name: material.name,
        side: THREE.DoubleSide,
        transparent: true,
        alphaTest: 0.99
      });
    });

    materials = new THREE.MeshFaceMaterial(materials);
    materials.minFilter = THREE.LinearMipMapLinearFilter;
    materials.magFilter = THREE.LinearFilter;

    console.timeEnd('SKNLoader');

    return { geometry, materials, skn };
  },

  _parseV0: function (skn) {
    var parser = this.parser,
      i;

    skn.indicesCount = parser.int32();
    skn.verticesCount = parser.int32();

    skn.indices = parser.int16(skn.indicesCount);

    for (i = 0; i < skn.verticesCount; i += 1) {
      skn.vertices.push(this._parseVertex());
    }

    return skn;
  },

  _parseV1: function (skn) {
    var parser = this.parser,
      i;

    skn.materialsCount = parser.int32();

    for (i = 0; i < skn.materialsCount; i += 1) {
      skn.materials.push(this._parseMaterial());
    }

    skn.indicesCount = parser.int32();
    skn.verticesCount = parser.int32();

    skn.indices = parser.int16(skn.indicesCount);

    for (i = 0; i < skn.verticesCount; i += 1) {
      skn.vertices.push(this._parseVertex());
    }

    return skn;
  },

  _parseV2: function (skn) {
    return this._parseV1(skn);
  },

  _parseV3: function (skn) {
    return this._parseV1(skn);
  },

  _parseV4: function (skn) {
    var parser = this.parser,
      i;

    skn.materialsCount = parser.int32();

    for (i = 0; i < skn.materialsCount; i += 1) {
      skn.materials.push(this._parseMaterial());
    }

    skn.unks = {};
    skn.unks[parser.tell()] = parser.int32();

    skn.indicesCount = parser.int32();
    skn.verticesCount = parser.int32();

    skn.unks[parser.tell()] = parser.uint16(24);

    skn.indices = parser.int16(skn.indicesCount);

    for (i = 0; i < skn.verticesCount; i += 1) {

      skn.vertices.push(this._parseVertex());
    }
  },

  _parseMaterial: function () {
    var name = this.parser.string(64);

    return {
      name: name.slice(0, name.indexOf('\u0000')),
      startVertex: this.parser.int32(),
      numVertices: this.parser.int32(),
      startIndex: this.parser.int32(),
      numIndices: this.parser.int32()
    };
  },

  _parseVertex: function () {
    return {
      position: {
        x: this.parser.float(),
        y: this.parser.float(),
        z: this.parser.float()
      },
      boneIndices: {
        x: this.parser.uint8(),
        y: this.parser.uint8(),
        z: this.parser.uint8(),
        w: this.parser.uint8()
      },
      weight: {
        x: this.parser.float(),
        y: this.parser.float(),
        z: this.parser.float(),
        w: this.parser.float()
      },
      normals: {
        x: this.parser.float(),
        y: this.parser.float(),
        z: this.parser.float()
      },
      uv: {
        u: this.parser.float(),
        v: this.parser.float()
      }
    }
  },

  _findMaterialIndex: function (i, materials) {
    var ind;

    materials.some(function (material, index) {
      let min = material.startIndex;
      let max = material.startIndex + material.numIndices - 1;

      if (i >= min && i <= max) {
        ind = index;
        return true;
      }
    });

    return ind;
  }

};