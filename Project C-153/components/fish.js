AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 20; i++) {

        var id = `fish${i}`;
  
    
        var posX = Math.random() * 100 + -50;
        var posY = Math.random() * 5 + -5;
        var posZ = Math.random() * 60 + -40;
  
        var position = { x: posX, y: posY, z: posZ };
  
        
        this.fish(id, position);
      }
    },
    fish: (id, position) => {
      
    const treasureEntity = document.querySelector("#fish");

      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id", id);
  
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 250, y: 250, z: 250 });
  
      
      fishEl.setAttribute("gltf-model", "./shiny_fish/scene.gltf");
  
      
      fishEl.setAttribute("animation-mixer", {});
  
      
      fishEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });

      fishEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });
      fishEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });

      treasureEntity.appendChild(fishEl)
    },
  });
  