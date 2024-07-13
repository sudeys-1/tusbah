// let tasbih = document.querySelector("#tasbih")
// let increment = document.querySelector("#IncrementBtn")
// let reset = document.querySelector("#resetBtn")
// let initialValue =0

// increment.addEventListener("click",function(){
//     initialValue++
//     tasbih.innerHTML = initialValue
// })

// reset.addEventListener("click",function(){
//     initialValue =0
//     tasbih.innerHTML = initialValue

// })
let tasbih = document.querySelector("#tasbih")
let increment = document.querySelector("#IncrementBtn")
let reset = document.querySelector("#resetBtn")
let initialValue =0

// increment.addEventListener("click",function(){
//     initialValue++
//     tasbih.innerHTML = initialValue
//     if(initialValue == 4){
//         document.body.style.backgroundColor ="red"
//     }
//     else{
//         document.body.style.backgroundColor = ""
//     }
// })
// reset.addEventListener("click",function(){
//     initialValue =0
//     tasbih.innerHTML = initialValue
// })


increment.addEventListener("click",function(){
    initialValue++
    tasbih.innerHTML = initialValue
    if(initialValue == 4){
        document.body.style.backgroundColor ="red"
    }
    else if(initialValue == 5){
        document.body.style.backgroundColor ="blue"
    }
    else if(initialValue == 6){
        document.body.style.backgroundColor ="green"
    }
    else if(initialValue == 7){
        document.body.style.backgroundColor ="orange"
    }
    else if(initialValue == 8){
        document.body.style.backgroundColor ="yellow"
    }
    else {
        document.body.style.backgroundColor = ""
    }
})
reset.addEventListener("click",function(){
    initialValue =0
    tasbih.innerHTML = initialValue
})