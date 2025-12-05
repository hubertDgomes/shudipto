let formId = document.querySelector("#formId")
let email = document.querySelector(".email")
let name = document.querySelector(".name")
let id = document.querySelector(".id")
let date = document.querySelector(".date")
let textarea = document.querySelector(".textarea")

let emailError = document.querySelector(".emailError")
let nameError = document.querySelector(".nameError")
let idError = document.querySelector(".idError")
let dateError = document.querySelector(".dateError")
let areaError = document.querySelector(".areaError")




formId.addEventListener("submit", (e) => {
    e.preventDefault()
    if(email.value == ""){
        emailError.innerHTML = "Email is missing"
    }
    else{
        emailError.innerHTML =""
    }


    if(name.value == ""){
        nameError.innerHTML = "Name is missing"
    }
    else{
        nameError.innerHTML =""
    }


    if(id.value == ""){
        idError.innerHTML = "ID is missing"
    }
    else{
        idError.innerHTML =""
    }


    if(date.value == ""){
        dateError.innerHTML = "Date is missing"
    }
    else{
        dateError.innerHTML =""
    }




    if(textarea.value == ""){
        areaError.innerHTML = "Kinldy write something"
    }
    else{
        areaError.innerHTML =""
    }


    if(email.value && name.value && id.value && date.value && textarea.value){
        window.location.href = "signup.html"
    }


    
})