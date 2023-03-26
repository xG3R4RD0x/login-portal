//static noise





//change channel transition
var nav_options = document.getElementsByClassName("nav_option");
var img_display = document.getElementById("image_display");
var glitch_wrapper=document.getElementsByClassName("glitch_wrapper")[0];

for (let i = 0; i < nav_options.length; i++) {
    nav_options[i].addEventListener("mouseenter", function(){
        img_display.classList.remove("noise");
        glitch_wrapper.style.display="block";
        img_display.classList.add("glitch_layer");
    });
}

for (let i = 0; i < nav_options.length; i++) {
    nav_options[i].addEventListener("mouseout", function(){
        img_display.classList.remove("glitch_layer");
        glitch_wrapper.style.display="none";
        img_display.classList.add("noise");
    });
}


// for (let i = 0; i < nav_options.length; i++) {
//     nav_options[i].addEventListener("mouseout", function(){
//     nav_images[i].style.animation="fadeout .4s linear forwards";
//     });
// }



// IMAGE ON HOVER FADE IN AND OUT

// nav_options = document.getElementsByClassName("nav_option");
// nav_images= document.getElementsByClassName("background_img");
// for (let i = 0; i < nav_options.length; i++) {
//     nav_options[i].addEventListener("mouseover", function(){
//     nav_images[i].style.animation="fadein .2s linear forwards";
//     nav_images[i].style.zIndex="-1";
//     });
// }
// for (let i = 0; i < nav_options.length; i++) {
//     nav_options[i].addEventListener("mouseout", function(){
//     nav_images[i].style.animation="fadeout .4s linear forwards";
//     });
// }

// PAGE TRANSITION

// nav_options = document.getElementsByClassName("nav_option");
// for (let i = 0; i < nav_options.length; i++) {
//     nav_options[i].addEventListener('click', function(){
//         var page= document.getElementById('page_transition');
//         page.style.left= "0%";
//         page.addEventListener('transitionend',function(){
//         var id= nav_options[i].id
//         var redirect_link= "/"+id
//         window.location.href = redirect_link;
//         });
//     });
// }





