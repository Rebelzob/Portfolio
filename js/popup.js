const openBtn = document.querySelector('[open-modal]');
const modal = document.getElementById('modal-container');
const myWorksBtn = document.getElementById('works-btn');

const projects = [

  {
    id: 1,
    title: 'Tropical Getaways',
    subtitle: 'Where to plan your next vacations',
    description: 'A travel agency webpage to plan your next trip to the caribbean',
    technologies: ['HTML', 'Node.js', 'CSS'],
    imagePath: './img/Capstone-project-module-surfacepro-1-transformed.png',
    modalImagePath: './img/Capstone-project-module-1.png',
    liveLink: 'https://rebelzob.github.io/Travel-agency/',
    sourceCodeLink: 'https://github.com/Rebelzob/Travel-agency',
    modalDescription: "Explore the beauty of the Caribbean with Tropical Getaways, your ultimate travel agency for planning your next vacation. With a user-friendly website, we offer a seamless experience to discover stunning destinations and create unforgettable memories. Powered by HTML, Node.js, and CSS, our website combines functionality with visual appeal. Check out the live website to start planning your dream trip to the Caribbean! Visit the source code on GitHub for a closer look at the technologies used.",
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    subtitle: 'Create and share captivating stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    imagePath: './img/card-background.png',
    modalImagePath: './img/Snapshoot Portfolio.svg',
    liveLink: 'https://rebelzob.github.io/Portfolio/',
    sourceCodeLink: 'https://github.com/Rebelzob/Portfolio',
    modalDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus iaculis elit, sed interdum urna pellentesque a. Nulla vel maximus magna. Curabitur id malesuada nisl. Suspendisse potenti. Vestibulum pharetra commodo neque, vitae hendrerit nunc varius ac. Nam sodales efficitur libero, eu pulvinar erat vestibulum a.',
  },
  {
    id: 3,
    title: 'Task Management App',
    subtitle: 'Manage and organize your tasks',
    description: 'An application for managing and organizing tasks',
    technologies: ['Angular', 'Firebase', 'TypeScript'],
    imagePath: './img/card-background.png',
    modalImagePath: './img/Snapshoot Portfolio.svg',
    liveLink: 'https://rebelzob.github.io/Portfolio/',
    sourceCodeLink: 'https://github.com/Rebelzob/Portfolio',
    modalDescription: "Say goodbye to chaos and hello to productivity with our Task Management App! Tackle your to-do list like a pro, stay organized, and conquer your goals. With our app, you'll experience a surge of superpowers that'll make you the task-master extraordinaire. Get ready to slay tasks, level up your productivity, and feel like a superhero every single day!",
  },
  {
    id: 4,
    title: 'Blogging Platform',
    subtitle: 'Express yourself through blogging',
    description: 'A platform for creating and publishing blog posts',
    technologies: ['React', 'Node.js', 'Express.js'],
    imagePath: './img/card-background.png',
    modalImagePath: './img/Snapshoot Portfolio.svg',
    liveLink: 'https://rebelzob.github.io/Portfolio/',
    sourceCodeLink: 'https://github.com/Rebelzob/Portfolio',
    modalDescription: 'Calling all wordsmiths and storytellers! Our Blogging Platform is your creative playground. Share your thoughts, ideas, and adventures with the world. From captivating articles to thought-provoking discussions, our platform empowers you to express yourself like never before. Grab your virtual pen, unleash your imagination, and let your words fly!',
  },
  {
    id: 5,
    title: 'Fitness Tracker App',
    subtitle: 'Track your fitness journey',
    description: 'An application for tracking fitness activities and progress',
    technologies: ['Vue.js', 'Firebase', 'CSS'],
    imagePath: './img/card-background.png',
    modalImagePath: './img/Snapshoot Portfolio.svg',
    liveLink: 'https://rebelzob.github.io/Portfolio/',
    sourceCodeLink: 'https://github.com/Rebelzob/Portfolio',
    modalDescription: "Ready to crush your fitness goals? Our Fitness Tracker App is your ultimate companion on the journey to a healthier you. Track your workouts, set new personal records, and celebrate your progress. With interactive challenges, inspiring badges, and a supportive community, you'll stay motivated like never before. Get ready to unleash your inner fitness beast!",
  },
  {
    id: 1,
    title: 'E-commerce Website',
    subtitle: 'Shop your favorite products online',
    description: 'An online store for selling various products',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imagePath: './img/card-background.png',
    modalImagePath: './img/Snapshoot Portfolio.svg',
    liveLink: 'https://rebelzob.github.io/Portfolio/',
    sourceCodeLink: 'https://github.com/Rebelzob/Portfolio',
    modalDescription: 'Get ready for an amazing online shopping experience! Our E-commerce Website is packed with the coolest products you can imagine. Explore our virtual aisles, browse through the trendiest items, and add them to your cart with just a click. Secure checkout, lightning-fast shipping, and jaw-dropping deals await you!',
  },
];

function generateProjectCards() {
  const worksSection = document.getElementById('works');

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.classList.add('single-card', 'flex-row', 'desktop-version', 'hover-background', 'hover-img');
    let technologiesList = '';
    project.technologies.forEach((tech) => {
      technologiesList += `<li>${tech}</li>`;
    });
    card.style.backgroundImage = `url(${project.imagePath})`;
    card.innerHTML = `
        <div>
          <h4 class="card-title">${project.title}</h4>
        </div> 
        <div class="infography-card">
          <p>${project.description}</p>
        </div>
        <div class="list-technologies-card">
          <ul class="list-technologies-card-ul flex-row">
            ${technologiesList}
          </ul>
        </div>
        <button open-modal type="button" class="button-project-card button-project flex-row">See project</button>
      `;
    worksSection.appendChild(card);
  });
}

window.addEventListener('load', generateProjectCards());

function generateModal(project) {
  const modalPopup = document.querySelector('#modal-container');
  modalPopup.innerHTML = '';

  const mod = document.createElement('article');
  mod.classList.add('modal-desktop');
  let technologiesList = '';
  project.technologies.forEach((tech) => {
    technologiesList += `<li>${tech}</li>`;
  });
  mod.innerHTML = `
  <div class="modal-desktop-top">
  <div class="flex-row modal-title">
    <h4 class="sub-title-3 modal-title-desktop">${project.subtitle}</h4>
    <img close-modal src="./img/Cross-menu.png" alt="close">
  </div> 
  <div class="modal-techs list-technologies flex-row">
    <ul class="list-technologies-ul modal-techs-btn flex-row">
      ${technologiesList}
    </ul>
  </div>
  </div>
  <div class="modal-desktop-bottom">
  <img class="modal-img item1" src="${project.modalImagePath}" alt="snapshot">
  <div class="modal-paragraph item2 flex-column">
    <p>${project.modalDescription}</p>
    <div class="flex-row modal-btn-set item3">
      <a href="${project.liveLink}" type="button" class=" modal-btn-livelink button-project flex-row">
      <span>See Live</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
      </svg>
      </a>
      <a href="${project.sourceCodeLink}" type="button" class="modal-btn-source button-project flex-row">
      <span>See Source</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9989 9.46114C20.9989 8.32124 20.6329 7.25043 19.9342 6.31779C20.2004 5.41969 20.2669 4.27979 20.2004 2.96718C20.1671 2.41451 19.7345 2 19.2022 2C18.9028 2 16.3741 2.03454 14.9101 3.38169C13.6458 3.1399 12.315 3.1399 11.0174 3.38169C9.58667 2.03454 7.05802 2 6.7253 2C6.19296 2 5.76042 2.41451 5.72715 2.96718C5.62734 4.27979 5.72715 5.41969 5.99333 6.31779C5.29462 7.28497 4.92863 8.35579 4.92863 9.46114C4.92863 11.8791 6.7253 14.0553 9.45358 15.0915C9.35377 15.2988 9.28723 15.5406 9.22068 15.7824C6.32604 15.4715 4.9619 12.7427 4.89536 12.639C4.66246 12.1209 4.06357 11.9136 3.56449 12.19C3.06541 12.4318 2.86578 13.0535 3.13196 13.5717C3.1985 13.7444 5.02845 17.4404 9.05432 17.8549V20.9637C9.05432 21.5509 9.48686 22 10.0525 22H15.875C16.4406 22 16.8732 21.5509 16.8732 20.9637V16.8532C16.8732 16.2314 16.7401 15.6442 16.5072 15.1261C19.2022 14.0553 20.9989 11.9136 20.9989 9.46114Z" fill="white"/>
      </svg></a>
    </div>
  </div>
</div>
  `;
  modalPopup.appendChild(mod);

  const closeBtn = mod.querySelector('[close-modal]');
  closeBtn.addEventListener('click', () => {
    modal.close();
  });
}

window.addEventListener('load', () => {
  const projectButtons = document.querySelectorAll('.button-project-card');
  projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      generateModal(projects[index]);
      modal.showModal();
    });
  });
});

openBtn.addEventListener('click', () => {
  modal.showModal();
});

myWorksBtn.addEventListener('click', () => {
  generateModal(projects[0]);
  modal.showModal();
});
