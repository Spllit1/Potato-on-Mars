import * as pf from "./pfuncs.js"

function Loadlvl1(){

  // This is just the intro to lvl1 -------------------------------------------------------------------------
  
  scene("lvl1intro", async()=>{
    pf.inspectt()
    const musik = play("lvl1bg", {
      loop: true,
      volume: 0.3
    })
    // adding some stars you know...
    for (let c = 0; c < 300; c++) {
      let sizeofstar = pf.RandNum(2, 8)
      const e = add([
        rect(sizeofstar, sizeofstar),
        pos(pf.RandNum(0, width()), pf.RandNum(0, height())),
        color(rgb(255, 255, 255))
      ])
      e.onUpdate(()=>{
        e.pos.y += 0.2
        if(e.pos.y > height()){
          e.pos.y = -30
          e.pos.x = pf.RandNum(0, width())
        }
      })
    }

    

    const wigrock = add([
      sprite("rocket"),
      pos(width()/2, height()/2-100),
      anchor("center"),
      scale(1.4, 1.4)
    ])
    wigrock.onUpdate(()=>{
      wigrock.pos.x += pf.RandNum(-10, 10)
      wigrock.pos.y += pf.RandNum(-10, 10)
      wait(1, ()=>{
        wigrock.pos.x = width()/2
        wigrock.pos.y = height()/2-100
      })
    })
    wigrock.play("fire3", {
      loop: true
    })
    const lines = [
      "Hello..?",
      "Are you awake?! I waited 2 hours for you to wake up!",
      "As you jumped into the rocket, you suddendly got unconscious and fell to the ground!",
      "Then you accidently clicked a big red button and then... we started! D:",
      "And now, we are... in the middle of nowhere."
    ]
    await pf.displayDialogue(lines, () => {
      // making the "take a look" button
      const gotobtnrect = add([
        rect(450, 100, {
          radius: 10
        }),
        pos(width()/2, height()-100),
        area(),
        anchor("center"),
        color(rgb(43, 43, 43))
      ])
      const gotobtntext = add([
        text("Take a look"),
        pos(width()/2, height()-100),
        anchor("center"),
        color(rgb(255, 255, 255))
      ])

      let smt = false

      gotobtnrect.onUpdate(()=>{
        if(gotobtnrect.isHovering()){
          if(!smt){
            play("hit")
            smt=true
          }
          gotobtnrect.color = rgb(43, 43, 43)
        }else{
          gotobtnrect.color = rgb(64, 64, 64)
          smt=false
        }
      })
    },'c')
  })

  // And this is the real lvl1! -----------------------------------------------------------------------------


  
}
export default Loadlvl1