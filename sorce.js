document.getElementById("demo").innerHTML = "Hello JavaScript";

let btn_on = document.getElementById("btn_on")
let btn_off = document.getElementById("btn_off")
// let img = document.getElementById("myimg")

btn_on.addEventListener("click", img_on)
btn_off.addEventListener("click", img_off)
btn_volume.addEventListener("click", img_volume)

function img_on (){

    myimg.src = "https://www.w3schools.com/js/pic_bulbon.gif"
    // btn_on.style.backgroundColor = "green"

    btn_on.classList.add("btn_on", "gray")
    btn_off.classList.remove("btn_on", "gray")
    
    // myimg.style.border = "2px solid green"

}

function img_off(){

    myimg.src = "https://www.w3schools.com/js/pic_bulboff.gif"
    // btn_on.style.backgroundColor =  "white"
    btn_on.classList.remove("btn_on", "gray")
    btn_off.classList.add("btn_on", "gray")
}

function img_volume(){
    // clone_lamp = lamp.cloneNode(true)
    // clone_lamp.id = "clone_lamp"
    // lampRow.appendChild(clone_lamp)
    // lamp.after(clone_lamp)
    nr = document.getElementById("myRange").value
    for (let i = 0; i < nr; i++){
        clone_lamp = lamp.cloneNode(true)
        clone_lamp.id = "clone_lamp"
        lamp.after(clone_lamp) 
    }

}


