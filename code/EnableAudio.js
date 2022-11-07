import * as pf from "./pfuncs.js"

function LoadEnableAudio(){
  scene("EnableAudio", ()=>{
    pf.inspectt()
    add([
      text("This game sadly does NOT support Firefox."),
      pos(width()/2, 30),
      anchor("center")
    ])
    // Making this super cool Console effect....
    const __menut = add([
      text("Click anywhere ", {
        size: 20
      }),
      scale(3),
      pos(width()/2, height()/2),
      anchor("center"),
      area()
    ])
    let under = false
    function doUnderScore() {
      if(under){
        __menut.text = "Click anywhere_"
        wait(1, ()=>{
          doUnderScore()
        })      
        under = false
      } else{
        __menut.text = "Click anywhere "
        wait(1, ()=>{
          doUnderScore()
        })
        under = true
      }
    }
    doUnderScore()
    onClick(() => {
      go("menu")
    })
  })
}

export default LoadEnableAudio