var randomNumber;
var code, red, green, blue;

var btn = document.querySelector(".btn");
var copy = document.querySelector(".copy");
var red_slider = document.querySelector("#red");
var green_slider = document.querySelector("#green");
var blue_slider = document.querySelector("#blue");
var col_code = document.querySelector(".code");

copy.addEventListener("click", copyCode);
btn.addEventListener("click", genColor);
red_slider.addEventListener("input", function () {
    red = red_slider.value;
    red = Number(red);
    setOutput(red, green, blue);
});
green_slider.addEventListener("input", function () {
    green = green_slider.value;
    green = Number(green);
    setOutput(red, green, blue);
});
blue_slider.addEventListener("input", function () {
    blue = blue_slider.value;
    blue = Number(blue);
    setOutput(red, green, blue);
});

col_code.addEventListener("click", copyCode);

function setOutput(red, green, blue) {
    // console.log(red,green,blue);
    document.querySelector("label.red").innerHTML = "Red: " + red;
    document.querySelector("label.green").innerHTML = "Green: " + green;
    document.querySelector("label.blue").innerHTML = "Blue: " + blue;

    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);
    if (red.length == 1)
        red = "0" + red;
    if (green.length == 1)
        green = "0" + green;
    if (blue.length == 1)
        blue = "0" + blue;
    code = red + green + blue;
    document.body.style.transition = "0";
    document.body.style.backgroundColor = "#" + code;
    document.querySelector("h2").style.color = "#" + code;
    document.querySelector(".code").innerHTML = "#" + code;
    document.body.style.transition = "0";
}

function genColor() {
    randomNumber = Math.random() * 16777215;
    randomNumber = Math.floor(randomNumber);
    code = randomNumber.toString(16);
    var color = code.match(/.{1,2}/g);
    red = parseInt(color[0], 16);
    green = parseInt(color[1], 16);
    blue = parseInt(color[2], 16);
    // console.log(red,green,blue);
    red_slider.value = red;
    green_slider.value = green;
    blue_slider.vaalue = blue;
    setOutput(red, green, blue);
}

function copyCode() {
    navigator.clipboard.writeText(code);
    copy.innerHTML = "Copied ";
    setTimeout(function () {
        copy.innerHTML = "Copy Color Code";
    }, 2000);


}
genColor();