import * as pf from "./pfuncs.js"




function LoadMenuScene() {
  scene("menu", ()=>{
    pf.inspectt()
    const music = play("menubg", {
      volume: 0.02,
      loop: true
    })


    // Play the bg music
    play("menubg")
    
    // Adding the Stars in menu
    for (let c = 0; c < 300; c++) {
      let sizeofstar = pf.RandNum(2, 8)
      add([
        rect(sizeofstar, sizeofstar),
        pos(pf.RandNum(0, width()), pf.RandNum(0, height())),
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
