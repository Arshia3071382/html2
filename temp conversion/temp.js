
let firstTemp = document.querySelector(".C")
let secoundTemp = document.querySelector(".F")
let converter = document.querySelector("#converter")
let pResult = document.querySelector(".result")
let convertButton = document.querySelector(".convertButton")
let resetButton = document.querySelector(".resetButton")
let changeButton = document.querySelector(".changeButton")


function convert(){
    
    if(converter.value ==='' || isNaN(converter.value)){
        
        pResult.innerHTML = "Insert correct Value"
        pResult.style.color ="red"

    } else{
        if(firstTemp.innerHTML === "°C"){
          let convertResult = (converter.value * 1.8 ) + 32
           pResult.innerHTML =converter.value + '°C To ' + convertResult + '°F'
           pResult.style.color = "yellow"
        }
        else{
           let convertResult = (converter.value - 32) / 1.8
            pResult.innerHTML = converter.value + '°F To ' + convertResult.toFixed(2) + '°C'
            pResult.style.color = "yellow"
        }

    }

}

function reset(){
    
    converter.value = ""
    pResult.innerHTML = ""

}

function change(){
    
    if(firstTemp.innerHTML === "°C"){
        
        firstTemp.innerHTML = "°F"
        secoundTemp.innerHTML= "°C"
        document.title = "SalzLearn| Js | °F to °C"
        converter.setAttribute("placeholder" , "°F")
    }else{
        
        firstTemp.innerHTML = "°C"
        secoundTemp.innerHTML = "°F"
        converter.setAttribute("placeholder" , "°C")
        document.title = "SalzLearn| Js | °C to °F"

    }

}


resetButton.addEventListener('click' , reset)
changeButton.addEventListener('click' , change)
convertButton.addEventListener('click' , convert)
