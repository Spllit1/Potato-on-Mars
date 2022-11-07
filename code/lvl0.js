import * as pf from "./pfuncs.js"


function LoadLvl0(){
  scene("lvl0", async ()=>{
    const pSPEED = 300
    pf.inspectt()
    gravity(1800)


    // For the player some things here...
    const player = add([
      sprite("potato"),
      pos(80, height()-250),
      area(),
      scale(2, 2),
      body(),
      z(100)
    ])
    onKeyDown("d", ()=>{
      player.flipX(true)
      player.move(pSPEED, 0)
    })
    onKeyDown("space", ()=>{
      if(player.isGrounded()){
        player.jump(pSPEED*3)
      }
    })
    onKeyDown("w", ()=>{
      if(player.isGrounded()){
        player.jump(pSPEED*3)
      }
    })
    onKeyDown("a", ()=>{
      player.flipX(false)
      player.move(-pSPEED, 0)
    })
    
    if(isKeyPressed("a")){
      player.play("run", {
        loop: true
      })
    }

    // Background!
    add([
      rect(width()+1000, width()+1000),
      pos(width()/2, height()/2),
      anchor("center"),
      color(rgb(0, 87, 227))
    ])

    // Heres the ground thingy thing
    add([
      rect(width()+1000, 200),
      pos(width()/2, height()-100),
      color(rgb(7, 140, 51)),
      anchor("center"),
      area(),
      outline(4),
      body({isStatic: true}),
      "ground"
    ])

    // For the sun :3
    const sunnysun = add([
      sprite("sun"),
      pos(100, 100),
      anchor("center"),
      scale(3.2, 3.2),
      rotate(-4)
    ])
    sunnysun.onUpdate(()=>{
      sunnysun.angle += 0.0002
    })

    // Here we make the sign...
    add([
      sprite("sign"),
      scale(1.5, 1.5),
      pos(450, height()-250),
      anchor("center"),
      area(),
      "Sign"
    ])
    
    const lines = [
      "For some reason, you want a trip to mars, so here is our rocket!",
      "What do you think about it? C'mon, it looks beutiful!",
      "...",
      "...",
      "...",
      "Im sure you love it! I love it too!",
      "So first we have too... start the rocket!",
      "Wait... where is it?"
    ]

    // TODO: add fire when landing :D
    // so the rocket only spawns once...
    let spawned = false
    // when colliding with sign
    player.onCollide("Sign", async()=>{
      await pf.displayDialogue(lines, () => {
        if(!spawned){
          const falli = add([
            sprite("rocket"),
            pos(width()-300, -height()+300),
            scale(2, 2),
            area()
          ])

          // Making the hitbox to enter the rocket
          const hitboxrect = add([
            rect(40, 80),
            pos(falli.pos.x+190, falli.pos.y),
            anchor("center"),
            color(rgb(2, 255, 255)),
            z(101),
            area(),
            "Hitbox1"
          ])
          hitboxrect.onUpdate(()=>{
            hitboxrect.pos.y = falli.pos.y+270
            hitboxrect.pos.x = falli.pos.x+190
          })

          player.onCollide("Hitbox1", ()=>{
            debug.log("hello!")
          })

          // here we animate the rocket :D
          tween(falli.pos.y, height()-620, 6, (val) => falli.pos.y = val, easings.easeOutSine)
          
          let playing1 = false
          let playing2 = false
          let playing3 = false
          falli.onUpdate(()=>{
            if(falli.pos.y < height()/2-700){
              if(!playing1){
                falli.play("fire2", {
                  loop: true
                })
                playing1 = true
              }
            } else if(falli.pos.y < height()/2+50){
              if(!playing3){
                falli.play("fire1", {
                  loop: true
                })
                wait(4.6, ()=>{
                  falli.play("idle")
                })
                playing3 = true
              }
            }
          })
          spawned = true
        }
      }, 'c')
    }) 
  })
}

export default LoadLvl0