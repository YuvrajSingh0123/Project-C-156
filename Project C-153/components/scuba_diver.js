AFRAME.registerComponent("island-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});


AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      

      this.data.speedOfRotation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var scubaDiverRotation = this.data.speedOfRotation;
      var scubaDiverPosition = this.data.speedOfAscent;

      

      if (e.key === "ArrowRight") {
        if (scubaDiverRotation.x < 50) {
          scubaDiverRotation.x += 5;
          this.el.setAttribute("rotation", scubaDiverRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (scubaDiverRotation.x > -50) {
          scubaDiverRotation.x -= 5;
          this.el.setAttribute("rotation",  scubaDiverRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (scubaDiverRotation.z < 50) {
          scubaDiverRotation.z += 5;
          this.el.setAttribute("rotation",  scubaDiverRotation);
        }
        if (scubaDiverPosition.y < 5) {
          scubaDiverPosition.y += 0.5;
          this.el.setAttribute("position",  scubaDiverPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (scubaDiverRotation.z > -50) {
          scubaDiverRotation.z -= 5;
          this.el.setAttribute("rotation",  scubaDiverRotation);
        }
        if (scubaDiverPosition.y > -5) {
          scubaDiverPosition.y -= 0.5;
          this.el.setAttribute("position",  scubaDiverPosition);
        }
      }
    });
  },
});
