let fisrtRandomNumb = Math.trunc(Math.random()*15);
let secondRandomNumb = Math.trunc(Math.random()*15);
let firstNumb = document.querySelector(".firstNumber").value = fisrtRandomNumb;
let secondNumb = document.querySelector(".secondNumber").value = secondRandomNumb;

 

document.querySelector("button").addEventListener("click", ()=>{
    answer = document.querySelector(".answer").value*1;
    additional = fisrtRandomNumb+secondRandomNumb
    if(additional==answer){
        document.querySelector(".answer").setAttribute("class" , "correct")
        setTimeout(() => {
            location.href = "index2.html"
        }, 1500);
    }else{
        document.querySelector(".answer").setAttribute("class" , "error")
        setTimeout(()=>{
            location.reload()
        }, 1500)
    }


})