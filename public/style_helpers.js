nav_options = document.getElementsByClassName("nav_option");
nav_images= document.getElementsByClassName("background_img");
for (let i = 0; i < nav_options.length; i++) {
    nav_options[i].addEventListener("mouseover", function(){
    nav_images[i].style.animation="fadein .2s linear forwards";
    nav_images[i].style.zIndex="-1";
    });
}
for (let i = 0; i < nav_options.length; i++) {
    nav_options[i].addEventListener("mouseout", function(){
    nav_images[i].style.animation="fadeout .4s linear forwards";
    });
}
