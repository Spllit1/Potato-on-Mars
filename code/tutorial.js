import * as pf from "./pfuncs.js"


function LoadTutorial(){
  scene("tutorial", async ()=>{
    add([])
    const herebgmusic = play("faf", {
      loop: true,
      volume: 0.2
    })
    pf.inspectt()
    
    const lines = [
      "Welcome to the Tutorial! Press C to continue...",
      "Do it again :D",
      "Fun, right?",
      "Hehe...",
      "Do it one more time!",
      "Okay... that's enough.",
      "Stop!",
      "HEY! Stop scrolling!",
      "Okay... that's now enough.",
      "...",
      "Okay, lemme just tell you about the game.",
      "It's about you, the potato.",
      "Your goal is to take over mars!",
      "But... that's not easy.",
      "You have to do lots of task's",
      "The controls are W/Space, A, S, D",
      "Now, have fun playing! :D"
    ]
    
    await pf.displayDialogue(lines, () => {
      herebgmusic.stop()
      go("menu")
    }, 'c')
  })
}
export default LoadTutorial