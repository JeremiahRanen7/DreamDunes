var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var deletepopup = document.getElementById("delete-place")
deletepopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var addplace = document.getElementById("add-place")
var placetitleinput = document.getElementById("place-title-input")
var placecountryinput = document.getElementById("place-country-input")
var placedescinput = document.getElementById("place-description-input")

addplace.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","travel-container")
    div.innerHTML=`<h2>${placetitleinput.value}</h2>
    <h5>${placecountryinput.value}</h5>
    <p>${placedescinput.value}</p>
    <button onclick="deleteplace(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deleteplace(event)
{
    event.target.parentElement.remove()
}