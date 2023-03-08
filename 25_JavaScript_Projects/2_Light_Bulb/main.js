var lightbulb = document.getElementById("lightbulb");
var button = document.getElementById("switch");
var currentColor;
currentColor = "#FFE900";

var lightsOn = true;

const colorPicker = document.getElementById("light-color");
colorPicker.addEventListener("change", (event) => {
    if (lightsOn === true) {
        currentColor = colorPicker.value;
        console.log(currentColor);
        lightbulb.style.backgroundColor = currentColor;
        lightbulb.style.boxShadow = `0px 0px 100px ${currentColor}`;
    } else {
        currentColor = colorPicker.value;
        console.log(currentColor);
    }

});

function activateSwitch() {
    lightsOn = !lightsOn;
    console.log(lightsOn)
    if (lightsOn === true) {
        lightbulb.style.backgroundColor = currentColor;
        lightbulb.style.boxShadow = `0px 0px 100px ${currentColor}`;
        lightbulb.style.borderColor = "#FFFFFF";
        button.innerText = "Switch Off"
        
    } else {
        lightbulb.style.backgroundColor = '#000000';
        lightbulb.style.boxShadow = `0px 0px 100px #000000`;
        lightbulb.style.borderColor = "#808080";
        button.innerText = "Switch On"
    }
}