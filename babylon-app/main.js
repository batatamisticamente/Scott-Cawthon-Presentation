const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas);

const scene = new BABYLON.Scene(engine);

// câmera
const camera = new BABYLON.ArcRotateCamera(
  "cam",
  Math.PI / 2,
  Math.PI / 2,
  10,
  BABYLON.Vector3.Zero(),
  scene
);
camera.attachControl(canvas, true);

// luz
new BABYLON.HemisphericLight(
  "light",
  new BABYLON.Vector3(0, 1, 0),
  scene
);

// modelo 3D (TESTE GARANTIDO)
BABYLON.SceneLoader.ImportMesh(
  "",
  "https://models.babylonjs.com/",
  "PotatoScottChest2.glb",
  scene,
  function (meshes, particleSystems, skeletons, animationGroups) {

    console.log("quantidade:", animationGroups.length); // 👈 aqui
    console.log(animationGroups);

    if (animationGroups.length > 0) {
      animationGroups[0].start(true);
    }

  }
);

engine.runRenderLoop(() => {
  scene.render();
});