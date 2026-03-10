const images = [
    "https://picsum.photos/id/10/800/500",
    "https://picsum.photos/id/11/800/500",
    "https://picsum.photos/id/12/800/500",
    "https://picsum.photos/id/13/800/500",
    "https://picsum.photos/id/14/800/500"
];


let currentIndex = 0;
function changeImage(direction) {
    currentIndex+=direction;
    if (currentIndex >= images.length){
        currentIndex=0;
    }
    if (currentIndex <0){
        currentIndex=images.length-1;
    }
    document.getElementById("mainImage").src = images[currentIndex];
}
function init(){
    document.getElementById("mainImage").src=images[0];

}
init();

function createThumbnails() {
    const container = document.getElementById('thumbnails');
    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.onclick = () => {
            currentIndex = index;
            document.getElementById('mainImage').src = images[currentIndex];
        };
        container.appendChild(thumb);
    });
}
createThumbnails();