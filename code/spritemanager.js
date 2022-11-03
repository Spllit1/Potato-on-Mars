function loadd(name){
  loadSprite(name, "sprites/"+name+".png")
}

function LoadAssets(){
  const Pngs = ["bean", "moon", "mars"]
  for(let i =0; i < Pngs.length; i++){
    loadd(Pngs[i])
  }
  
  loadSound("menubg", "sounds/menubg.mp3");

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
}

export default LoadAssets