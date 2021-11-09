window.onload = () => {
  const hamburger = document.querySelector('.menu1');
  hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  const closeBtn = document.querySelector('.closeBtn');
  close(closeBtn,'.mobile-menu');
 /* closeBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
    close(menu);
  });*/

  const backToMainPage = document.querySelector('.menuPopUp');
  close(backToMainPage,'.mobile-menu');
  /*backToMainPage.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });*/

   function close(menu, toBeClose){
     menu.addEventListener('click' , () =>{
        const value = document.querySelector(toBeClose);
        value.style.display = 'none';
     });
  }
/*}*/

//Function for mobile project details.
const projectBtn = document.querySelector('.btn');
  projectBtn.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
  });
}