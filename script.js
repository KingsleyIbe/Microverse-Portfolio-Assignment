window.onload = () => {
  const hamburger = document.querySelector('.menu1');
  const closeBtn = document.querySelector('.closeBtn');
  const projectBtn1 = document.querySelector('.btn-1');
  const projectBtn2 = document.querySelector('.btn-2');
  const projectBtn3 = document.querySelector('.btn-3');
  const projectBtn4 = document.querySelector('.btn-4');
  const projectBtn5 = document.querySelector('.btn-5');
  const projectBtn6 = document.querySelector('.btn-6');
  const projectBtn7 = document.querySelector('.btn-7');
  const innerModal = document.querySelector('.innerModal');
  const modalButton = document.querySelector('.modal-btn-1');

  const projectItems = [
    {
      id: 1,
      title: 'Multi Post Stories',
      displayImage: '',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'See Source',
      linkToLive: 'See Live'
    },
    {
      id: 2,
      title: 'Multi Post Stories',
      displayImage: '',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'See Source',
      linkToLive: 'See Live'
    },
    {
      id: 3,
      title: 'Multi Post Stories',
      displayImage: '',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'See Source',
      linkToLive: 'See Live'
    },
    {
      id: 4,
      title: 'Multi Post Stories',
      displayImage: '',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'See Source',
      linkToLive: 'See Live'
    },
    {
      id: 5,
      title: 'Multi Post Stories',
      displayImage: '',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'See Source',
      linkToLive: 'See Live'
    },
    {
      id: 6,
      title: 'Multi Post Stories',
      displayImage: '',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'See Source',
      linkToLive: 'See Live'
    },
    {
      id: 7,
      title: 'Multi Post Stories',
      displayImage: '',
      tech: ['Html', 'Bootstrap', 'Ruby on rails'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an' + 
      'unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
      'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
      'remaining essent',
      linkToSource: 'See Source',
      linkToLive: 'See Live'
    }
  ];

  hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  close(closeBtn,'.mobile-menu');
  closeBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
    close(menu);
  });

  const backToMainPage = document.querySelector('.menuPopUp');
  close(backToMainPage,'.mobile-menu');
  backToMainPage.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });

   function close(menu, toBeClose){
     menu.addEventListener('click' , () =>{
        const value = document.querySelector(toBeClose);
        value.style.display = 'none';
     });
  }

  const closeBtn1 = document.querySelector('.closeBtn-1');
  close(closeBtn1,'.mobile-project-details');

  projectBtn1.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
    const title = document.querySelector('.title-2').innerHTML=projectItems[0].title;
    const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[0].tech[0];
    const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[0].tech[1];
    const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[0].tech[2];
    const featureImage = document.querySelector('.image').innerHTML=projectItems[0].displayImage;
    const projectDescription = document.querySelector('.description').innerHTML=projectItems[0].description;
    const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[0].linkToLive;
    const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[0].linkToSource;
  });

  projectBtn2.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
    const title = document.querySelector('.title-2').innerHTML=projectItems[1].title;
    const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[1].tech[0];
    const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[1].tech[1];
    const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[1].tech[2];
    const featureImage = document.querySelector('.image').innerHTML=projectItems[1].displayImage;
    const projectDescription = document.querySelector('.description').innerHTML=projectItems[1].description;
    const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[1].linkToLive;
    const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[1].linkToSource;
  });

  projectBtn3.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
    const title = document.querySelector('.title-2').innerHTML=projectItems[2].title;
    const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[2].tech[0];
    const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[2].tech[1];
    const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[2].tech[2];
    const featureImage = document.querySelector('.image').innerHTML=projectItems[2].displayImage;
    const projectDescription = document.querySelector('.description').innerHTML=projectItems[2].description;
    const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[2].linkToLive;
    const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[2].linkToSource;
  });

  projectBtn4.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
    const title = document.querySelector('.title-2').innerHTML=projectItems[3].title;
    const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[3].tech[0];
    const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[3].tech[1];
    const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[3].tech[2];
    const featureImage = document.querySelector('.image').innerHTML=projectItems[3].displayImage;
    const projectDescription = document.querySelector('.description').innerHTML=projectItems[0].description;
    const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[3].linkToLive;
    const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[3].linkToSource;
  });

  projectBtn5.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
    const title = document.querySelector('.title-2').innerHTML=projectItems[4].title;
    const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[4].tech[0];
    const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[4].tech[1];
    const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[4].tech[2];
    const featureImage = document.querySelector('.image').innerHTML=projectItems[4].displayImage;
    const projectDescription = document.querySelector('.description').innerHTML=projectItems[4].description;
    const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[4].linkToLive;
    const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[4].linkToSource;
  });

  projectBtn6.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
    const title = document.querySelector('.title-2').innerHTML=projectItems[5].title;
    const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[5].tech[0];
    const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[5].tech[1];
    const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[5].tech[2];
    const featureImage = document.querySelector('.image').innerHTML=projectItems[5].displayImage;
    const projectDescription = document.querySelector('.description').innerHTML=projectItems[5].description;
    const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[5].linkToLive;
    const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[5].linkToSource;
  });

  projectBtn7.addEventListener('click', () => {
    const projectDetails = document.querySelector('.mobile-project-details');
    projectDetails.style.display = 'block';
    const title = document.querySelector('.title-2').innerHTML=projectItems[6].title;
    const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[6].tech[0];
    const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[6].tech[1];
    const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[6].tech[2];
    const featureImage = document.querySelector('.image').innerHTML=projectItems[6].displayImage;
    const projectDescription = document.querySelector('.description').innerHTML=projectItems[6].description;
    const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[6].linkToLive;
    const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[6].linkToSource;
  });
};
