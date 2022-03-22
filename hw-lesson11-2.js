const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
    let increase = btn.innerHTML;
    increase ++;
    btn.innerHTML = increase;
    console.log(increase);
})
