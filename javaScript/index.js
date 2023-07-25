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

  document.onclick = function moveMenu(event) {
    switch (event.target) {
      case menuLink1:
      case menuLink2:
      case menuLink3:
        navBar.style.left = '100%';
        break;
      default:
    }
  };
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
    technologies: `
    <li>Ruby on Rails</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>HTML</li>`,
    cardSource: `<p class="btn"><a href="#" id="popupbtn">See project</a></p>`
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: `
    <li>Ruby on Rails</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>HTML</li>`,
    cardSource: `<p class="btn"><a href="#" id="popupbtn">See project</a></p>`
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: `
    <li>Ruby on Rails</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>HTML</li>`,
    cardSource: `<p class="btn"><a href="#" id="popupbtn">See project</a></p>`
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: `
    <li>Ruby on Rails</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>HTML</li>`,
    cardSource: `<p class="btn"><a href="#" id="popupbtn">See project</a></p>`
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: `
    <li>Ruby on Rails</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>HTML</li>`,
    cardSource: `<p class="btn"><a href="#" id="popupbtn">See project</a></p>`
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: `
    <li>Ruby on Rails</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>HTML</li>`,
    cardSource: `<p class="btn"><a href="#" id="popupbtn">See project</a></p>`
  }
];

const workSection = document.getElementById('worksection');

for (let i = 0; i < projects.length; i++) {
  let fetch = workSection.innerHTML;
  workSection.innerHTML = `
  <div class="card item1">
    <div class="card-info">
      <h3>${projects[i].cardName}</h3>
      <ul>
        ${projects[i].technologies}
      </ul>
      <div class="btnbar">
        ${projects[i].cardSource}
      </div>
    </div>
  </div> ${fetch}`;
}