let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".button-side");



sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});


for(var i=0; i<arrow.length; i++ ){
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
      

    });
}

