var indicator_btn = document.getElementsByClassName("indicator-btn")
var slide = document.getElementById("slide")

indicator_btn[0].onclick = function(){
    slide.style.transform = "translateX(0%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[1].onclick = function(){
    slide.style.transform = "translateX(-10%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[2].onclick = function(){
    slide.style.transform = "translateX(-20%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[3].onclick = function(){
    slide.style.transform = "translateX(-30%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[4].onclick = function(){
    slide.style.transform = "translateX(-40%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[5].onclick = function(){
    slide.style.transform = "translateX(-50%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[6].onclick = function(){
    slide.style.transform = "translateX(-60%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[7].onclick = function(){
    slide.style.transform = "translateX(-70%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[8].onclick = function(){
    slide.style.transform = "translateX(-80%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

indicator_btn[9].onclick = function(){
    slide.style.transform = "translateX(-90%)"
    for(i = 0; i < 10; i++){
        indicator_btn[i].classList.remove("active")
    }
    this.classList.add("active")
}