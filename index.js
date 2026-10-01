let button = document.querySelectorAll(".btn_num");
let input = document.querySelector(".input");
let rovno = document.querySelector(".btn_num-rovno");

button.forEach(btn => {
    btn.addEventListener("click",()=>{
        if(btn.textContent == "C"){ 
        input.value = "";
    }else{
     input.value += btn.textContent;
    }

});
});
    rovno.addEventListener("click", ()=>{
        console.log(input.value);
        if(input.value == "6+7")
        {
          input.value = "СИКСЕВЕЕЕЕН";
        }
        else{
          input.value = "hello World!";

        }
    });
