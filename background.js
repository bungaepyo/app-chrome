
const body = document.querySelector("body");
const image_number = 10;


function getRandomNumber(){
    //generate random number
    const random = Math.floor(Math.random()*image_number+1);
    return random;
}

function getImage(number){
    //get the random image via random number
    const img = new Image();
    img.src = `images/${number}.jpg`;
    img.classList.add("background_img");
    body.prepend(img);
}

function init(){
    const randomNumber = getRandomNumber();
    //get the image
    getImage(randomNumber);
}

init();