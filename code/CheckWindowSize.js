function LoadCheck(){
  scene("Check", ()=>{
    if (window.innerWidth < 850) {
      const text12 = add([
        text("Stop right there!\nYou need to play this game\nin a new tab!"),
        pos(width()/2, height()/2),
        anchor("center"),
      ])
    } else{
      go("EnableAudio")
    }
  })
}

export default LoadCheck