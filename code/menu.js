import * as pf from "./pfuncs.js"




function LoadMenuScene() {
  scene("menu", ()=>{
    pf.inspectt()
    const music = play("menubg", {
      volume: 0.02,
      loop: true
    })


    // Play the bg music
    play("menubg", {
      loop: true
    })
    
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
      sprite("logo"),
      pos(width()/2, 130),
      area(),
      anchor("center"),
      scale(4, 4)
    ])
  })
}

export default LoadMenuScene
