const icone = document.querySelector('.mobile i');

icone.addEventListener('click', ()=>{
    if(icone.style.color == "black"){
        icone.style.color = "white";
        icone.className = "fa-solid fa-bars";
    }else{
        icone.style.color = "black";
        icone.className = "fa-solid fa-xmark";
    }   
})

