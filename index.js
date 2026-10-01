let button = document.querySelectorAll(".btn_num");

button.forEach(btn => {
    let input = document.querySelector(".input");
    let rovno = document.querySelector(".btn_num-rovno");
    btn.addEventListener("click",()=>{
        if(btn.textContent == "C"){ 
        input.value = ""
    }else{
     input.value += btn.textContent;
    }
    rovno.addEventListener("click", ()=>{
        input.value = "hello World!";
    })
})
});