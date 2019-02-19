// Play drum by keyboard press
const clap = document.getElementById("clap");
const clapButton = document.getElementById("clapButton");
const hihat = document.getElementById("hihat");
const hihatButton = document.getElementById("hihatButton");
const boom = document.getElementById("boom");
const boomButton = document.getElementById("boomButton");
const kick = document.getElementById("kick");
const kickButton = document.getElementById("kickButton");
const openhat = document.getElementById("openhat");
const openhatButton = document.getElementById("openhatButton");
const ride = document.getElementById("ride");
const rideButton = document.getElementById("rideButton");
const snare = document.getElementById("snare");
const snareButton = document.getElementById("snareButton");
const tink = document.getElementById("tink");
const tinkButton = document.getElementById("tinkButton");
const tom = document.getElementById("tom");
const tomButton = document.getElementById("tomButton");
const key = document.getElementsByClassName("key")

document.addEventListener('keypress', keySound);
document.addEventListener('click', clickSound)

function clickSound(event) {
    if(event.target.id == "openhatButton" || event.target.textContent == "F" || event.target.textContent == "Openhat"){
        openhat.play();
    } else if(event.target.id == "clapButton" || event.target.textContent == "A" || event.target.textContent == "Clap"){
        clap.play();
    } else if(event.target.id == "rideButton" || event.target.textContent == "H" || event.target.textContent == "Ride"){
        ride.play();
    } else if(event.target.id == "snareButton" || event.target.textContent == "J" || event.target.textContent == "Snare"){
        snare.play();
    } else if(event.target.id == "boomButton" || event.target.textContent == "G" || event.target.textContent == "Boom"){
        boom.play();
    } else if(event.target.id == "hihatButton" || event.target.textContent == "S" || event.target.textContent == "Hihat"){
        hihat.play();
    } else if(event.target.id == "kickButton" || event.target.textContent == "D" || event.target.textContent == "Kick"){
        kick.play();
    } else if(event.target.id == "tomButton" || event.target.textContent == "K" || event.target.textContent == "Tom"){
        tom.play();
    } else if(event.target.id == "tinkButton" || event.target.textContent == "L" || event.target.textContent == "Tink"){
        tink.play();
    } 
};

function keySound() {
    if (event.key == "a"){
        clap.play();
    } else if (event.key == "s"){
        hihat.play();
    } else if (event.key == "d"){
        kick.play();
    } else if (event.key == "f"){
        openhat.play();
    } else if (event.key == "g"){
        boom.play();
    } else if (event.key == "h"){
        ride.play();
    } else if (event.key == "j"){
        snare.play();
    } else if (event.key == "k"){
        tom.play();
    } else if (event.key == "l"){
        tink.play();
    }
}

