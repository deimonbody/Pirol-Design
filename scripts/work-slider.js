const container = document.querySelector(".slider-container");
const buttons = document.querySelector(".slider-controls");
const itemsCount = document.querySelectorAll(".slider-item").length-1;
const blockContols = document.querySelectorAll(".block-control");

let count = 0;

buttons.addEventListener("click",(e)=>{
    const elemParent = e.target.closest("div");
    if(elemParent.classList.contains("block-control")){
        const side = elemParent.querySelector(".slider-btn").dataset.side;
        changeSlide(side,elemParent);
    }
})



function changeSlide(side,elem){
    removeClass();
    const currWidth = container.clientWidth;
    if(side == "next") count++;
    if(side == "prev") count --;
    
    if(count >= itemsCount){
        count = itemsCount;
        elem.classList.add('disabled-block')
    }else if(count <= 0){
        count = 0;
        elem.classList.add('disabled-block')
    }
    container.style.transform = `translateX(-${currWidth*count}px)`;
}

function removeClass(){
    blockContols.forEach((elem)=>elem.classList.remove("disabled-block"))
}