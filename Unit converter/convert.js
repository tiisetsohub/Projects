
let lengthEl=document.getElementById("lengthel")
let volumeEl=document.getElementById("volumeel")
let massEl=document.getElementById("massel")

function length(){
    let feet = num*3.281
    let meters = num/3.281
    feet=feet.toFixed(3)
    meters = meters.toFixed(3)
    lengthEl.textContent=num + " meters = " + feet + " feet | " + num + " feet = " + meters + " meters"
}

function volume() {
    let gallons = num / 3.785
    let litres = num * 3.785
    gallons = gallons.toFixed(3)
    litres = litres.toFixed(3)
    volumeEl.textContent = num + " litres = " + gallons + " gallons | " + num + " gallons = " + litres + " litres"
}

function mass() {
    let pounds = num * 2.205
    let kilos = num / 2.205
    pounds = pounds.toFixed(3)
    kilos = kilos.toFixed(3)
    massEl.textContent = num + " kilos = " + pounds + " pounds | " + num + " pounds = " + kilos + " kilos"
}

function trigger() {
    num = 20
    length()
    volume()
    mass()
    
}