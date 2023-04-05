//Variables for controlling Slideshow
const slideShowImages = document.querySelectorAll(".slider .imgs");
const nextImageDelay = 3400 /* 3.4 secs */
let currentImageCounter = 0;

/*Display First Image*/
slideShowImages[currentImageCounter].style.display ="block";

setInterval(nextImage, nextImageDelay);

function nextImage()
{
    slideShowImages[currentImageCounter].style.display ="none";
    currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
    slideShowImages[currentImageCounter].style.display ="block";

    var movieButton = document.getElementById("movie_Style");
    var tv_ShowButton = document.getElementById("tv_Show_Style");
    var video_GameButton = document.getElementById("Video_Games");

    console.log(slideShowImages);
   
    if (slideShowImages.item == "Movies") 
    {
        document.getElementById('movie_Style').style.visibility= 'none';
        document.getElementById('tv_Show_Style').style.visibility= 'hidden';
        document.getElementById('video_Game_Style').style.visibility= 'hidden';
    } 
    else if (slideShowImages.item == "Tv_shows")
    {
        document.getElementById('movie_Style').style.visibility= 'hidden';
        document.getElementById('tv_Show_Style').style.visibility= 'none';
        document.getElementById('video_Game_Style').style.visibility= 'hidden';
    }
    else if (slideShowImages.item == "Video_Games")
    {
        document.getElementById('movie_Style').style.visibility= 'hidden';
        document.getElementById('tv_Show_Style').style.visibility= 'hidden';
        document.getElementById('video_Game_Style').style.visibility= 'none';
    }
}

    //Button inside this function? display when current matching slide is present?