//static noise





//change channel transition
nav_options = document.getElementsByClassName("nav_option");
img_showcase = document.getElementsByClassName("img_showcase")[0];
noise= document.getElementsByClassName("noise")[0];

for (let i = 0; i < nav_options.length; i++) {
    nav_options[i].addEventListener("mouseover", function(){
    noise.style.display ="none";
    img_showcase.style.display= "block";
    img_showcase.style.background = "url(img/fondo.jpg)";

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





