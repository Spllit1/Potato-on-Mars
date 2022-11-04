// Puplic Function Management

export function inspectt(){
  onKeyPress("#", ()=>{
    if(debug.inspect){
      debug.inspect = false
    }else{
      debug.inspect = true
    }
  })
}

export function RandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}