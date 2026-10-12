var sidenavbar=document.getElementById("side-navbar")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenavbar.style.right=0
})

closenav.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
})