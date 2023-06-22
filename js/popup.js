const openBtn = document.querySelector("[open-modal]");
const modal = document.getElementById("modal-container");


const projects = [

  {
    id: 1,
    title: "E-commerce Website",
    subtitle: "Shop your favorite products online",
    description: "An online store for selling various products",
    technologies: ["HTML", "CSS", "JavaScript"],
    imagePath: "images/project2.jpg",
    modalImagePath: "img/ecommerce.jpg",
    liveLink: "https://rebelzob.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/Rebelzob/Portfolio",
    modalDescription: "Get ready for an amazing online shopping experience! Our E-commerce Website is packed with the coolest products you can imagine. Explore our virtual aisles, browse through the trendiest items, and add them to your cart with just a click. Secure checkout, lightning-fast shipping, and jaw-dropping deals await you!"
  },
  {
    id: 2,
    title: "Social Media Platform",
    subtitle: "Connect and interact with friends",
    description: "A platform for connecting and interacting with friends",
    technologies: ["React", "Node.js", "Express.js"],
    imagePath: "images/project3.jpg",
    modalImagePath: "img/social media platform.jpg",
    liveLink: "https://rebelzob.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/Rebelzob/Portfolio",
    modalDescription: "Join the party on our Social Media Platform! Connect with friends, share hilarious memes, and keep up with the latest trends. It's your one-stop-shop for all things social. From epic group chats to jaw-dropping posts, get ready to immerse yourself in a world of endless fun, laughter, and never-ending virtual high-fives!"
  },
  {
    id: 3,
    title: "Task Management App",
    subtitle: "Manage and organize your tasks",
    description: "An application for managing and organizing tasks",
    technologies: ["Angular", "Firebase", "TypeScript"],
    imagePath: "images/project4.jpg",
    modalImagePath: "img/task management.jpg",
    liveLink: "https://rebelzob.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/Rebelzob/Portfolio",
    modalDescription: "Say goodbye to chaos and hello to productivity with our Task Management App! Tackle your to-do list like a pro, stay organized, and conquer your goals. With our app, you'll experience a surge of superpowers that'll make you the task-master extraordinaire. Get ready to slay tasks, level up your productivity, and feel like a superhero every single day!"
  },
  {
    id: 4,
    title: "Blogging Platform",
    subtitle: "Express yourself through blogging",
    description: "A platform for creating and publishing blog posts",
    technologies: ["React", "Node.js", "Express.js"],
    imagePath: "images/project5.jpg",
    modalImagePath: "img/blog.jpg",
    liveLink: "https://rebelzob.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/Rebelzob/Portfolio",
    modalDescription: "Calling all wordsmiths and storytellers! Our Blogging Platform is your creative playground. Share your thoughts, ideas, and adventures with the world. From captivating articles to thought-provoking discussions, our platform empowers you to express yourself like never before. Grab your virtual pen, unleash your imagination, and let your words fly!"
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    subtitle: "Track your fitness journey",
    description: "An application for tracking fitness activities and progress",
    technologies: ["Vue.js", "Firebase", "CSS"],
    imagePath: "images/project6.jpg",
    modalImagePath: "img/fitness.jpg",
    liveLink: "https://rebelzob.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/Rebelzob/Portfolio",
    modalDescription: "Ready to crush your fitness goals? Our Fitness Tracker App is your ultimate companion on the journey to a healthier you. Track your workouts, set new personal records, and celebrate your progress. With interactive challenges, inspiring badges, and a supportive community, you'll stay motivated like never before. Get ready to unleash your inner fitness beast!"
  },
  {
    id: 6,
    title: "Multi-Post Stories",
    subtitle: "Create and share captivating stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["CSS", "HTML", "Bootstrap", "Ruby"],
    imagePath: "images/project7.jpg",
    modalImagePath: "./img/Snapshoot Portfolio.svg",
    liveLink: "https://rebelzob.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/Rebelzob/Portfolio",
    modalDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus iaculis elit, sed interdum urna pellentesque a. Nulla vel maximus magna. Curabitur id malesuada nisl. Suspendisse potenti. Vestibulum pharetra commodo neque, vitae hendrerit nunc varius ac. Nam sodales efficitur libero, eu pulvinar erat vestibulum a."
  }
];


  function generateProjectCards() {
    const worksSection = document.getElementById("works");
  
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.classList.add("single-card", "flex-row", "desktop-version", "hover-background", "hover-img");
      let technologiesList = "";
        project.technologies.forEach(function (tech) {
        technologiesList += `<li>${tech}</li>`;
        });
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
        <button open-modal type="button" class="button-project-card flex-row">See project</button>
      `;
      worksSection.appendChild(card);
    });
  }

window.addEventListener("load", generateProjectCards());
  
function generateModal(project) {
  const modalPopup = document.querySelector("#modal-container");
  // modalPopup.innerHTML = '';

  const mod = document.createElement("article");
  mod.classList.add("modal-desktop");
  let technologiesList = "";
  project.technologies.forEach(function (tech) {
    technologiesList += `<li>${tech}</li>`;
  });
  mod.innerHTML = `
    <div class="flex-row modal-title">
      <h4 class="sub-title-3">${project.title}</h4>
      <img close-modal src="./img/Cross-menu.png" alt="close">
    </div> 
    <div class="modal-techs list-technologies flex-row">
      <ul class="list-technologies-ul flex-row">
        ${technologiesList}
      </ul>
    </div>
    <img class="modal-img" src="${project.modalImagePath}" alt="snapshot">
    <div class="modal-paragraph">
      <p>${project.modalDescription}</p>
    </div>
    <div class="flex-row modal-btn-set">
      <a href="${project.liveLink}" type="button" class="button-project-card flex-row">See Live</a>
      <a href="${project.sourceCodeLink}" type="button" class="button-project-card flex-row">See source</a>
    </div>
  `;
  modalPopup.appendChild(mod);

  const closeBtn = mod.querySelector("[close-modal]");
  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

window.addEventListener("load", () => {
  const projectButtons = document.querySelectorAll(".button-project-card");
  projectButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      generateModal(projects[index]);
      modal.showModal();
    });
  });
});

openBtn.addEventListener("click", () => {
  modal.showModal();
})


