const labels = document.querySelectorAll(".quote-inputs label");
const qouteBlock = document.querySelector(".qoutes-block");
console.log("yes!!!!!!")
labels.forEach((label,ind)=>{
    label.addEventListener("click",()=>changeSlider(ind))
})
function changeSlider(num){
    const width = qouteBlock.clientWidth;
    qouteBlock.style.transform = `translateX(-${width*num}px)`;
}


