/*--------------------------------------------------------------
Toggle Nav Bar
--------------------------------------------------------------*/
const navToggle = document.querySelector(".nav-toggler");
navToggle.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolliing");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
/*--------------------------------------------------------------
Active Section
--------------------------------------------------------------*/

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        document.querySelector(".overlay").classList.add("active");
        navToggle.classList.add("hide");
        if(e.target.classList.contains("nav-item"))
        {
            toggleNavbar();
        }
        else{
            hideSection();

        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggle.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});
/*--------------------------------------------------------------
About Section Tabs
--------------------------------------------------------------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click",(e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active"))
    {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");        
    }
});

/*--------------------------------------------------------------
PopUp Section
--------------------------------------------------------------*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("view-project-btn")){
        toggleProjectPopup();
        document.querySelector(".project-popup").scrollTo(0,0);
        projectItemDetails(e.target.parentElement);
    }
});
function toggleProjectPopup(){
    document.querySelector(".project-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",toggleProjectPopup);

//Hide PopUp When clicking outside of it
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        toggleProjectPopup();
    }
});

function projectItemDetails(projectItem){
    document.querySelector(".pp-thumbnail img").src = 
    projectItem.querySelector(".project-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    projectItem.querySelector(".project-item-title").innerHTML;
    
    document.querySelector(".pp-body").innerHTML = 
    projectItem.querySelector(".project-item-details").innerHTML;
}