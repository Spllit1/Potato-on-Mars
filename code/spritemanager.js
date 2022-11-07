let lol = []
function loadd(name){
  loadSprite(name, "sprites/"+name+".png")
  lol.push("Loading sprite "+name)
}

function LoadAssets(){
  const Pngs = ["bean", "moon", "mars", "logo", "tlc", "sign", "sun"]
  for(let i =0; i < Pngs.length; i++){
    loadd(Pngs[i])
  }

  loadSprite("rocket", "sprites/rocket-Sheet.png", {
    sliceX: 8,
    anims: {
      "idle": {
        from: 0,
        to: 0
      },
      "fire3": {
        from: 1,
        to: 3
      },
      "fire2": {
        from: 4,
        to: 5
      },
      "fire1": {
        from: 6,
        to: 7
      }
    }
  })


  
  loadSound("menubg", "sounds/bgmusic.mp3", {
    loop: true,
    volume: 100
  });
  loadSprite("sbtn", "sprites/stopbtn-Sheet.png", {
    sliceX: 2,
    anims: {
      "stop": {
        from: 0,
        to: 0
      },
      "play": {
        from: 1,
        to: 1
      }
    }
  })
  loadSound("hit", "sounds/hit.mp3");
  loadSound("faf", "sounds/faf.mp3");
  loadSprite("potato", "sprites/potatoe-sheet.png", {
    sliceX: 6,
    anims: {
      "run": {
        from: 1,
        to: 2
      },
      "idle": {
        from: 0,
        to: 0
      },
      "blink": {
        from: 3,
        to: 4
      },
    },
  })

  loadFont("up", "fonts/upheavtt.ttf")
  loadFont("arc", "fonts/arc.TTF")
  loadFont("joy", "fonts/joystix.ttf")
  /*loadSpriteAtlas("sprites/emote-atlas.png", {
    "hero": {
        x: 128,
        y: 68,
        width: 144,
        height: 28,
        sliceX: 9,
    },
  })*/
}

export default LoadAssets
