/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 900
        }
      },
      "color": {
        "value": ["#8bf1ff", "#d8b4ff", "#fff8a3", "#ff7dd3"]
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.75,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1.5,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 2.8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0.4,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.15,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.8,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 8,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 180
        },
        "push": {
          "particles_nb": 5
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#02031b",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);