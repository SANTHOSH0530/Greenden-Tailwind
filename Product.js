var sidenavbar=document.getElementById("side-navbar")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenavbar.style.right=0
})

closenav.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
})
var search=document.getElementById("search")
var Productcontainer=document.getElementById("Product-container")
var productlist=Productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var stored=event.target.value.toUpperCase()
    
    for(count=0;count<productlist.length;count++){

        var productname=productlist[count].querySelector("h1").textContent

        if(productname[count].toUpperCase().indexOf(stored)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})