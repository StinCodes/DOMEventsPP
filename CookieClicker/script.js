let cookieButton = document.querySelector("#cookie")
let count = 0
cookieButton.addEventListener("click", function(){
    count++
    let counter = document.querySelector("#counter")
    counter.textContent = count
})