let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".button-side");
let toggleBtn = document.querySelector(".statusbtn");
let statusTxt = document.querySelector(".mode-status");
let modes = document.querySelector(".status")

toggleBtn.addEventListener("click", ()=>{
    modes.classList.toggle("aberto");

    if(modes.classList.contains("aberto")){
        statusTxt.innerText = "Aberto";
    }else{
        statusTxt.innerText = "Fechado";
    }
});



sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});


for(var i=0; i<arrow.length; i++ ){
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
      

    });
}


