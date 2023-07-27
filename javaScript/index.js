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
    cardId: 'popupbtn1',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn2',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn3',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn4',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn5',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn6',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
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
        <p class="btn"><a href="#" id=${projects[i].cardId}>See Project</a></p>
      </div>
    </div>
  </div> ${fetch}`;
}

const modalContainer = document.getElementById('popup');
    
for (let i = 0; i < projects.length; i += 1) {
  let fetch = modalContainer.innerHTML;

  modalContainer.innerHTML = `
  <div id="modal">
      <div class="topsection">
        <div class="offBTN" id="popup-offbtn">&times;</div>
        <div class="bgPhoto"></div>
      </div>
      <div class="bottomsection">
        <div class="components">
          <div class="compo-title">
              <h3 class="co-title">
                  ${projects[i].popupTitle}
              </h3>
          </div>
          <div class="compo-links">
            <div class="moblink">
              <a href="#">${projects[i].technologies[0]}</a>
              <a href="#">${projects[i].technologies[1]}</a>
              <a href="#">${projects[i].technologies[2]}</a>
            </div>
            <div class="desklink">
              <a href="#">${projects[i].popupTech[0]}</a>
              <a href="#">${projects[i].popupTech[1]}</a>
              <a href="#">${projects[i].technologies[2]}</a>
              <a href="#">${projects[i].popupTech[2]}</a>
              <a href="#">${projects[i].popupTech[3]}</a>
              <a href="#">${projects[i].popupTech[4]}</a>
            </div>
          </div>
        </div>
        <div class="pragraph">
          <p>${projects[i].popupDes}</p>
          <p>${projects[i].popupDes}</p>
        </div>
        <div class="modalbtn">
          <a href="#">See live <i class="fa fa-external-link"> </i></a>
          <a href="#">See source <i class="fa fa-github"></i> </a>
        </div>
      </div>
    </div>`
}

const popupOn1 = document.getElementById('popupbtn1');
const popupOn2 = document.getElementById('popupbtn2');
const popupOn3 = document.getElementById('popupbtn3');
const popupOn4 = document.getElementById('popupbtn4');
const popupOn5 = document.getElementById('popupbtn5');
const popupOn6 = document.getElementById('popupbtn6');
const popupOff = document.getElementById('popup-offbtn');
const popUp = document.getElementById('popup-wrapper');

function openModal() {
  popUp.style.display = 'block';
}

function closeModal() {
  popUp.style.display = 'none';
}

function showWebsite(event) {
  if (event.target === modalContainer) {
    popUp.style.display = 'none';
  }
}

document.addEventListener('click', showWebsite);
popupOff.onclick = closeModal;
modalContainer.onclick = showWebsite;
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