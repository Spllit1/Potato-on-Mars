function LoadEnableAudio(){
  scene("EnableAudio", ()=>{
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