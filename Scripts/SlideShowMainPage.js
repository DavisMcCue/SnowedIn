//Variables for controlling Slideshow
const slideShowImages = document.querySelectorAll(".slider .imgs");
const nextImageDelay = 3400 /* 3.4 secs */
let currentImageCounter = 0;

//Display First Image
slideShowImages[currentImageCounter].style.display ="block";
movie_Style.style.display = "block";
setInterval(nextImage, nextImageDelay);

//Slide Show Controls
function nextImage()
{
    slideShowImages[currentImageCounter].style.display ="none";
    currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
    slideShowImages[currentImageCounter].style.display ="block";

    console.log(currentImageCounter);
    if(currentImageCounter == "0")
    {
        movie_Style.style.display = "block";
        tv_Show_Style.style.display = "none";
        video_Game_Style.style.display = "none";
    }
    else if(currentImageCounter == "1")
    {
        movie_Style.style.display = "none";
        tv_Show_Style.style.display = "block";
        video_Game_Style.style.display = "none";
    }
    else if(currentImageCounter == "2")
    {
        movie_Style.style.display = "none";
        tv_Show_Style.style.display = "none";
        video_Game_Style.style.display = "block";
    }
}