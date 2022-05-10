const works = document.querySelectorAll(".work-inner");


for(const work of works){
    const parent = work.closest("div"); 
    parent.addEventListener('mouseover',()=>{work.style.opacity = "1";})
 
     work.addEventListener('mouseout',()=>{work.style.opacity = "0";})
}