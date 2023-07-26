function applyMobileBehavior() {
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const menuLink1 = document.getElementById('menu-link1');
  const menuLink2 = document.getElementById('menu-link2');
  const menuLink3 = document.getElementById('menu-link3');
  const navBar = document.getElementById('navbar');

  function revealMenu() {
    navBar.style.left = '0';
  }

  function removeMenu() {
    navBar.style.left = '100%';
  }

  openMenu.onclick = revealMenu;
  closeMenu.onclick = removeMenu;

  document.addEventListener('click', (event) => {
    switch (event.target) {
      case menuLink1:
      case menuLink2:
      case menuLink3:
        navBar.style.left = '100%';
        break;
      default:
    }
  });
}

const mobileQuery = window.matchMedia('(max-width: 768px)');

function handleScreenChange(event) {
  if (event.matches) {
    applyMobileBehavior();
  } else {
    document.getElementById('navbar').style.left = '0';
  }
}

handleScreenChange(mobileQuery);

mobileQuery.addEventListener('change', handleScreenChange);

const projects = [
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardSource: '<a href="#" id="popupbtn1">See project</a>',
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardSource: '<a href="#" id="popupbtn2">See project</a>',
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardSource: '<a href="#" id="popupbtn3">See project</a>',
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardSource: '<a href="#" id="popupbtn4">See project</a>',
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardSource: '<a href="#" id="popupbtn5">See project</a>',
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardSource: '<a href="#" id="popupbtn6">See project</a>',
  },
];

const workSection = document.getElementById('worksection');

for (let i = 0; i < projects.length; i += 1) {
  const fetch = workSection.innerHTML;
  workSection.innerHTML = `
  <div class="card item1">
    <div class="card-info">
      <h3>${projects[i].cardName}</h3>
      <ul>
        <li>${projects[i].technologies[0]}</li>
        <li>${projects[i].technologies[1]}</li>
        <li>${projects[i].technologies[2]}</li>
        <li>${projects[i].technologies[3]}</li>
      </ul>
      <div class="btnbar">
        <p class="btn">${projects[i].cardSource}</p>
      </div>
    </div>
  </div> ${fetch}`;
}

const popupOn1 = document.getElementById('popupbtn1');
const popupOn2 = document.getElementById('popupbtn2');
const popupOn3 = document.getElementById('popupbtn3');
const popupOn4 = document.getElementById('popupbtn4');
const popupOn5 = document.getElementById('popupbtn5');
const popupOn6 = document.getElementById('popupbtn6');
const popupOff = document.getElementById('popup-offbtn');
const modalOff = document.getElementById('popup');
const popUp = document.getElementById('popup-wrapper');

function openModal() {
  popUp.style.display = 'block';
}

function closeModal() {
  popUp.style.display = 'none';
}

function showWebsite(event) {
  if (event.target === modalOff) {
    popUp.style.display = 'none';
  }
}

document.addEventListener('click', showWebsite);
popupOff.onclick = closeModal;
modalOff.onclick = showWebsite;
document.addEventListener('click', (event) => {
  switch (event.target) {
    case popupOn1:
    case popupOn2:
    case popupOn3:
    case popupOn4:
    case popupOn5:
    case popupOn6:
      openModal();
      break;
    default:
  }
});