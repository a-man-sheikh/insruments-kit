btn = document.querySelectorAll("button");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let userkey= this.innerHTML;

    makeSound(userkey)
    activeBtn(userkey);
  })
   

  btn[i].addEventListener("keypress",function (event){
    makeSound(event.key)
    activeBtn(event.key)
})
    function makeSound(key){
    switch (key) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        default:
            console.log("Please press valid key !");
            break;
    }
}
  

}
const activeBtn= (keyInput)=>{
  document.querySelector("."+keyInput).classList.add("pressed");
  setInterval(function (){
    document.querySelector("."+keyInput).classList.remove("pressed");
  },200)

}






// btn = document.querySelectorAll("button");
// var sounds = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"]
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     let clickValue=this;
//     for(let j=0; j<sounds.length; j++){
//         if(clickValue==btn[j]){
//             var audio = new Audio(sounds[j]);
//             audio.play();
//         }
//     }
//   });
//   btn[i].addEventListener("keypress",function (event){
//     switch (event.key) {
//       case "w":
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//         break;
//       case "a":
//         var audio = new Audio("sounds/tom-2.mp3");
//         audio.play();
//         break;
//       case "s":
//         var audio = new Audio("sounds/tom-3.mp3");
//         audio.play();
//         break;
//       case "d":
//         var audio = new Audio("sounds/tom-4.mp3");
//         audio.play();
//         break;
//       case "j":
//         var audio = new Audio("sounds/snare.mp3");
//         audio.play();
//         break;
//       case "k":
//         var audio = new Audio("sounds/crash.mp3");
//         audio.play();
//         break;
//       case "l":
//         var audio = new Audio("sound/kick-bass.mp3");
//         audio.play();
//         break;
//         default:
//             console.log("Please press valid key !");
//             break;
//     }
//   })

// }

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
