var rocket =  document.querySelector("i");

rocket.addEventListener("mouseenter",()=>{
    rocket.classList.toggle("fa-rotate");
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    var chgLeft = Math.floor(Math.random() * (vw/2));
    var chgTop = Math.floor(Math.random() * (vh/2));
    vw = vw- chgLeft - 500;
    vh = vh - chgTop - 400;
    
    rocket.style.top = `${vh}px`;
    rocket.style.left = `${vw}px`;
})
