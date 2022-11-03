import inspectt from "./main.js"

function RandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function LoadMenuScene() {
  scene("menu", ()=>{
    inspectt()
    play("menubg")
    // Adding the Stars in menu
    for (let c = 0; c < 300; c++) {
      let sizeofstar = RandNum(2, 8)
      add([
        rect(sizeofstar, sizeofstar),
        pos(RandNum(0, width()), RandNum(0, height())),
        color(rgb(255, 255, 255))
      ])
    }
    // Adding text
    add([
      text("Hellow!", {
        size: 40
      }),
      pos(width()/2, 20),
      area(),
      anchor("center")
    ])
  })
}

export default LoadMenuScene
