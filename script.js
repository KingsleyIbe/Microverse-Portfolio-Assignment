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

  const closeBtn1 = document.querySelector('.closeBtn-1');
  close(closeBtn1,'.mobile-project-details');

  const projectItems = [
    {
      id: 1,
      title: 'Multi Post Stories',
      displayImage: './images/snapshoot-portfolio.png',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'https://github.com/KingsleyIbe/Microverse-Portfolio-Assignment/tree/DOM-manipulation',
      linkToLive: 'https://kingsleyibe.github.io/Microverse-Portfolio-Assignment/'
    },
    {
      id: 2,
      title: 'Multi Post Stories',
      displayImage: './images/snapshoot-portfolio.png',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'https://github.com/KingsleyIbe/Microverse-Portfolio-Assignment/tree/DOM-manipulation',
      linkToLive: 'https://kingsleyibe.github.io/Microverse-Portfolio-Assignment/'
    },
    {
      id: 3,
      title: 'Multi Post Stories',
      displayImage: './images/snapshoot-portfolio.png',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'https://github.com/KingsleyIbe/Microverse-Portfolio-Assignment/tree/DOM-manipulation',
      linkToLive: 'https://kingsleyibe.github.io/Microverse-Portfolio-Assignment/'
    },
    {
      id: 4,
      title: 'Multi Post Stories',
      displayImage: './images/snapshoot-portfolio.png',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'https://github.com/KingsleyIbe/Microverse-Portfolio-Assignment/tree/DOM-manipulation',
      linkToLive: 'https://kingsleyibe.github.io/Microverse-Portfolio-Assignment/'
    },
    {
      id: 5,
      title: 'Multi Post Stories',
      displayImage: './images/snapshoot-portfolio.png',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'https://github.com/KingsleyIbe/Microverse-Portfolio-Assignment/tree/DOM-manipulation',
      linkToLive: 'https://kingsleyibe.github.io/Microverse-Portfolio-Assignment/'
    },
    {
      id: 6,
      title: 'Multi Post Stories',
      displayImage: './images/snapshoot-portfolio.png',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'https://github.com/KingsleyIbe/Microverse-Portfolio-Assignment/tree/DOM-manipulation',
      linkToLive: 'https://kingsleyibe.github.io/Microverse-Portfolio-Assignment/'
    },
    {
      id: 7,
      title: 'Multi Post Stories',
      displayImage: './images/snapshoot-portfolio.png',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'https://github.com/KingsleyIbe/Microverse-Portfolio-Assignment/tree/DOM-manipulation',
      linkToLive: 'https://kingsleyibe.github.io/Microverse-Portfolio-Assignment/'
    }
  ];
};
