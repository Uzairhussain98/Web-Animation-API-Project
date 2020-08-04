var paraFrames =   [
    { transform: 'translateY(0%)' },
    { transform: 'translateY(200%)' }
  ];
  
var paraTiming = {
    duration: 5000,
    iterations: Infinity,
    playbackRate: -2,
    easing: 'ease-in',

  };


  var para = document.getElementById("para");


  var paraMovement = para.animate(paraFrames, paraTiming);

// -----------------------------------------------------

  var copterFrames =   [
    { transform: 'translateX(0%)'  },
    { transform: 'translateX(100%)'  }
  ];
  
var copterTiming = {
    duration: 5000,
    iterations: Infinity,
    playbackRate: -2,
    easing: 'ease-in-out',
    direction:  "alternate",

  };


  var copter = document.getElementById("copter");


  var copterMovement = copter.animate(copterFrames, copterTiming);

//--------------------------------------------


  var planeFrames =   [
    { transform: 'translateX(0%)'  },
    { transform: 'translateX(600%)'  }
  ];
  
var planeTiming = {
    duration: 2000,
    iterations: Infinity,
    playbackRate: -2,
    easing: 'ease-in',
    

  };


  var plane = document.getElementById("plane");


  var planeMovement = plane.animate(planeFrames, planeTiming);