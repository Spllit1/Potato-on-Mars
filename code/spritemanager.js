let lol = []
function loadd(name){
  loadSprite(name, "sprites/"+name+".png")
  lol.push("Loading sprite "+name)
}

function LoadAssets(){
  const Pngs = ["bean", "moon", "mars", "logo", "tlc"]
  for(let i =0; i < Pngs.length; i++){
    loadd(Pngs[i])
  }
  
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
  loadSprite("potatoe", "sprites/potatoe-sheet.png", {
    sliceX: 5,
    anims: {
      run: {
        from: 1,
        to: 2
      },
      idle: {
        from: 0,
        to: 0
      },
      blink: {
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
