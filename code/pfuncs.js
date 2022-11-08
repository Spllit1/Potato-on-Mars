// Puplic Function Management



// Before you think i maded this awesome scrolling dialoge, i didnt.
// i just added some styling. its from NassimSoftware
// (https://replit.com/@NassimSoftware/Dialogue-scrolling-in-Kaboom?v=1) Thanks Nassim!

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function displayDialogue(lines, onDialogueEnd = () => {}, controlKey) {
  const dialogueBoxContainer = add([])
  dialogueBoxContainer.add([
    rect(width()-700,130, {
      radius: 10
    }),
    area(),
    color(rgb(219, 219, 219)),
    outline(2),
    anchor("center"),
    pos(center().x, height()-100)
  ])
  dialogueBoxContainer.add([
    text("", {
      size: 20,
      lineSpacing: 4,
      font: "joy",
      width: width()-900
    }),
    pos(width()/2, height()-100),
    color(0,0,0),
    anchor("center")
  ])
  let currentLineIndex = 0
  let lineIsFullyDisplayed = false
  const lineAsCharArray = (lines[currentLineIndex]).split("")
  for (const [i, char] of lineAsCharArray.entries()) {
    await delay(isKeyDown(controlKey) || isMouseDown() ? 0 : 50)
    dialogueBoxContainer.children[1].text += char
    if (i >= lineAsCharArray.length - 1) {
      lineIsFullyDisplayed = true
    }
  }
  async function handleDialogue() {
    await delay(100)
    if (lineIsFullyDisplayed) {
      dialogueBoxContainer.children[1].text = ""
      lineIsFullyDisplayed = false
      currentLineIndex++
      if (currentLineIndex >= lines.length) {
        dialogueBoxContainer.destroy()
        await onDialogueEnd()
        return
      }
      const lineAsCharArray = (lines[currentLineIndex]).split("")
      for (const [i, char] of lineAsCharArray.entries()) {
        await delay(isKeyDown(controlKey) || isMouseDown() ? 0 : 50)
        play("score", {
          volume: RandNum(0.2, 0.3)
        })
        dialogueBoxContainer.children[1].text += char
        if (i >= lineAsCharArray.length - 1) {
          lineIsFullyDisplayed = true
        }
      }
    } 
  }
  onKeyDown(controlKey, async () => {
    await handleDialogue()
  })
}



export function inspectt(){
  onKeyPress("#", ()=>{
    debug.inspect=!debug.inspect
  })
}

export function RandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}