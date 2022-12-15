var btn=document.querySelector(".btn");
var copy=document.querySelector(".copy");
copy.addEventListener("click",copyCode);
btn.addEventListener("click",genColor);

var randomNumber;
var code;

function genColor()
{
    randomNumber=Math.random()*16777215;
    randomNumber=Math.floor(randomNumber);
    code="#"+randomNumber.toString(16);
    document.body.style.backgroundColor=code;
    document.querySelector("h2").style.color=code;
    document.querySelector(".code").innerHTML=code;
}

function copyCode()
{
    navigator.clipboard.writeText(code);
    copy.innerText="Copied";
    setTimeout(function(){
        copy.innerText="Copy Code";
    },2000);


}
genColor();