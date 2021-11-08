window.onload = () => {
    const hamburger = document.querySelector(".menu1");
    hamburger.addEventListener('click',()=>{
        const menu=document.querySelector('.mobile-menu');
        menu.style.display="block";
    });

    const closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener('click', ()=>{
        const menu=document.querySelector('.mobile-menu');
        menu.style.display="none";
    });

    const backToMainPage = document.querySelector(".menuPopUp");
    backToMainPage.addEventListener('click', ()=>{
        const menu=document.querySelector('.mobile-menu');
        menu.style.display="none";
    });
}
