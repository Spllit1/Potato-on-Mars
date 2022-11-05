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
    
    // Adding text           |||| SECRET!!! |||
    const logobtn = add([
      sprite("logo"),
      pos(width()/2, 130),
      area(),
      anchor("center"),
      scale(4, 4)
    ])
    const btnbg = add([
      rect(320, 50, {
        radius: 10,
      }),
      outline(rgb(255, 255, 255)),
      pos(width()/2, height()/2),
      anchor("center"),
      area(),
      color(rgb(4, 122, 0)),
      scale(1.3, 1.3)
    ])
    
    const btntext = add([
      text("How to Play"),
      pos(width()/2, height()/2),
      anchor("center"),
      area(),
      color(rgb(255, 255, 255)),
      scale(1.3, 1.3)
    ])

    const what = add([
      text("?"),
      pos(btnbg.pos.x + 120, height()/2-20),
      anchor("center"),
      color(255, 255, 255),
      rotate(40)
    ])

    const what2 = add([
      text("?"),
      pos(btnbg.pos.x + 120, height()/2-40),
      anchor("center"),
      color(255, 255, 255),
      rotate(20)
    ])

    const what3 = add([
      text("?"),
      pos(btnbg.pos.x + 116, height()/2-50),
      anchor("center"),
      color(255, 255, 255),
      rotate(9)
    ])
    
    let bg2hover = false
    let bg1hover = false
    
    btnbg.onUpdate(() => {
	  	if (btnbg.isHovering()) {
        if(!bg1hover){
          play("hit")
        }
        bg1hover = true
        what.pos.x = btnbg.pos.x + 225
        what2.pos.x = btnbg.pos.x + 205
        what3.pos.x = btnbg.pos.x + 185
	  		btnbg.color = rgb(2, 64, 0)
	  	} else {
        bg1hover = false
	  		btnbg.color = rgb(4, 122, 0)
        what.pos.x = width()+width()
        what2.pos.x = width()+width()
        what3.pos.x = width()+width()
	  	}
	  })

    const btnbg2 = add([
      rect(320, 50, {
        radius: 10,
      }),
      outline(rgb(255, 255, 255)),
      pos(width()/2, height()/2+100),
      anchor("center"),
      area(),
      color(rgb(163, 125, 21)),
      scale(1.3, 1.3)
    ])
    
    const btntext2 = add([
      text("Play!"),
      pos(width()/2, height()/2+100),
      anchor("center"),
      area(),
      color(rgb(255, 255, 255)),
      scale(1.3, 1.3)
    ])
    btnbg2.onUpdate(() => {
	  	if (btnbg2.isHovering()) {
        if(!bg2hover){
          play("hit")
        }
        bg2hover = true
        const t = time() * 5
	  		btnbg2.color = rgb(
			  	wave(0, 255, t),
			  	wave(0, 255, t + 2),
			  	wave(0, 255, t + 4),
			  )
	  	} else {
        bg2hover = false
	  		btnbg2.color = rgb(163, 125, 21)
	  	}
	  })
    const m1 = add([
      sprite("mars"),
      pos(width()-200, height()/2-250),
      scale(3, 3),
      anchor("center"),
      rotate(90)
    ])
    const m = add([
      sprite("moon"),
      pos(200, height()/2+250),
      scale(3, 3),
      anchor("center"),
      rotate(0)
    ])

    onUpdate(()=>{
      m1.angle += 0.5 * dt()
      m.angle += 1 * dt()
    })

    
  })
}

export default LoadMenuScene
