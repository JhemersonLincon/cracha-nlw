const main = document.querySelector("main");
function clear(){
  const classes = ["top","bottom","left","right"]
  classes.forEach(el =>{
    if(main.classList.contains){
      main.classList.remove(el)
    }
  })
}
main.onmousemove = e =>{
  
  clear()
  console.log(e.x,e.y)
  if(e.y > 672){

    main.classList.add("bottom")
  }
  else if(e.y < 130){
    main.classList.add("top")
  }
  else if(e.x > 1000 && e.y < 672 && e.y > 130){
    main.classList.add("right")
  } 
  else if(e.x < 900 && e.y < 672 && e.y > 130){
    //clear()
    main.classList.add("left")
  }
}
main.addEventListener("mouseout", clear)