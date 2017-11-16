
let header3 = document.querySelector("h3");
header3.addEventListener("click", function(){
  header3.style.fontSize = "50px";
})


let header2 = document.querySelector("h2");
header2.addEventListener("click", function(e){
  console.log(e);

  if(e.shiftKey){
    header2.style.fontSize = "50px";
  }
})


// When do I use event objects?
// Just like with anything in js you use them when you need them.
// If you don't need any information about the event and you don't
// need to interact with the event object then you don't need to use it!
