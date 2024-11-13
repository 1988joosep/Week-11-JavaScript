const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["Image1.jpg", "Image2.jpg", "Image3.jpg", "Image4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}
