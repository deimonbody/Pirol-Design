const container = document.querySelector(".work-process .wrapper");
const video = `
    <iframe 
    src="https://www.youtube.com/embed/KDJfBN9mu70" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>`

container.addEventListener("click",function(e){
    if(e.target.classList.contains("preloader-btn") ||  e.target.classList.contains("play-btn")){
        const elem = this.querySelector(".photo-preloader")
        elem.remove();
        this.innerHTML+=video;
    }
    
})