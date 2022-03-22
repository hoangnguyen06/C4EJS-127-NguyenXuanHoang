const btn=document.getElementById("btn")
 function getrandomColor(){
     let r = parseInt(Math.random() * 254);
     let g = parseInt(Math.random() * 254);
     let b = parseInt(Math.random() * 254);
    return `rgb(${r},${g},${b} )`;
 }
 btn.addEventListener("click",()=>{
    let randomColor = getrandomColor()
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
 })