//
//                      ~ POTATOE ON MARS ~
//           a game made by @Spllit. This a free software,
//              but pls dont say you maded it. Anyways,
//                    what are you doing here?
//
//
//              P.S.: This game has lots if secrets!


// Importing modules ---------------------------------------------------------------------
import kaboom from "kaboom"
import LoadMenuScene from "./menu.js"
import LoadAssets from "./spritemanager.js"
import LoadTutorial from "./tutorial.js"
import LoadCheck from "./CheckWindowSize.js"
import LoadEnableAudio from "./EnableAudio.js"

// initialize context --------------------------------------------------------------------
kaboom({
  background: [0, 0, 0]
})


// Defining scene content ----------------------------------------------------------------
LoadCheck()
LoadAssets()
LoadTutorial()
LoadMenuScene()
LoadEnableAudio()



// Starting the game ---------------------------------------------------------------------
go("Check")