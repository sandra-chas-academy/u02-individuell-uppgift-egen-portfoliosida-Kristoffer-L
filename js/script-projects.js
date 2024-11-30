let index = 0;
let firstError = true;
getInfo();

async function getInfo() {
  try {
    const response = await fetch("https://api.github.com/users/Kristoffer-L/repos");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    renderHTML(data);
  } catch (error) {
    console.error("Error", error);
    document.querySelector(".projects-section-headline").textContent = "Error";
    document.querySelector(".projects-main-paragraph").textContent = error;
  }
}
async function getTechstack(urlName, index) {
  try {
    const response = await fetch("https://api.github.com/repos/Kristoffer-L/" + urlName + "/languages");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const techStack = await response.json();
    renderHTML2(urlName, techStack, index);
    console.log(techStack);
  } catch (error) {
    console.error("Error", error);
    if (firstError) {
      document.querySelector(".projects-section-headline").textContent = "Error";
      document.querySelector(".projects-main-paragraph").textContent = `${error} - First Error ${urlName}`;
      firstError = false;
    }
  }
}

function renderHTML(data) {
  document.querySelector(".projects-section-headline").textContent = "Projects";
  document.querySelector(".projects-main-paragraph").textContent = "Things I’ve built so far";

  data.forEach(() => {
    let urlName = data[index].name;
    const articles = document.createElement("articles");
    document.querySelector(".projects-section-container").appendChild(articles);
    articles.classList.add("projects-article-container");
    articles.classList.add(`projects-article-container-${urlName}`);

    const mainImg = document.createElement("img");
    document.querySelector(`.projects-article-container-${urlName}`).appendChild(mainImg);
    mainImg.classList.add("projects-img");
    mainImg.classList.add(`projects-img-${urlName}`);
    document.querySelector(`.projects-img-${urlName}`).alt = "Projects";
    if (index > 5) {
      document.querySelector(`.projects-img-${urlName}`).loading = "lazy";
    }

    const textContainer = document.createElement("div");
    document.querySelector(`.projects-article-container-${urlName}`).appendChild(textContainer);
    textContainer.classList.add("projects-text-container");
    textContainer.classList.add(`projects-text-container-${urlName}`);

    const headline = document.createElement("h2");
    document.querySelector(`.projects-text-container-${urlName}`).appendChild(headline);
    headline.classList.add("projects-article-headline");
    headline.classList.add(`projects-article-headline-${urlName}`);

    const descParagraph = document.createElement("p");
    document.querySelector(`.projects-text-container-${urlName}`).appendChild(descParagraph);
    descParagraph.classList.add("projects-article-paragraph");
    descParagraph.classList.add(`projects-article-paragraph-${urlName}`);

    const techStack = document.createElement("p");
    document.querySelector(`.projects-text-container-${urlName}`).appendChild(techStack);
    techStack.classList.add("projects-article-info");
    techStack.classList.add(`projects-article-info-${urlName}`);

    const linkContainer = document.createElement("div");
    document.querySelector(`.projects-text-container-${urlName}`).appendChild(linkContainer);
    linkContainer.classList.add("projects-link-container");
    linkContainer.classList.add(`projects-link-container-${urlName}`);

    const linkItems = document.createElement("div");
    document.querySelector(`.projects-link-container-${urlName}`).appendChild(linkItems);
    linkItems.classList.add("projects-link-items");
    linkItems.classList.add(`projects-link-items-${urlName}`);
    linkItems.classList.add("projects-link-items-end");

    const logoGithubImg = document.createElement("img");
    document.querySelector(`.projects-link-items-${urlName}`).appendChild(logoGithubImg);
    logoGithubImg.classList.add("project-darkmode-svg");
    logoGithubImg.classList.add(`project-darkmode-svg-${urlName}`);
    document.querySelector(`.project-darkmode-svg-${urlName}`).src = "./Img/Project-github.svg";
    document.querySelector(`.project-darkmode-svg-${urlName}`).alt = "Code link";

    const viewCode = document.createElement("a");
    document.querySelector(`.projects-link-items-${urlName}`).appendChild(viewCode);
    viewCode.textContent = "View Code";
    viewCode.classList.add("projects-link-text");
    viewCode.classList.add(`projects-link-text-${urlName}`);

    document.querySelector(`.projects-article-paragraph-${urlName}`).textContent = data[index].description;
    document.querySelector(`.projects-article-headline-${urlName}`).textContent = data[index].name;
    document.querySelector(`.projects-link-text-${urlName}`).href = data[index].svn_url;
    getTechstack(urlName, index);
    index++;
  });
}
function renderHTML2(urlName, techStack, index) {
  document.querySelector(`.projects-article-info-${urlName}`).textContent = "Tech stack: " + Object.keys(techStack).join(", ");
  const imgName = ["css-grid-test", "Flexbox-ex", "Flexbox-test", "GameTest", "Intro-CSS", "Intro-HTML", "MobbprogramU1", "PokemonAPI"];

  if (imgName.includes(urlName)) {
    document.querySelector(`.projects-img-${urlName}`).src = `./Img/${urlName}.png`;
  } else {
    document.querySelector(`.projects-img-${urlName}`).src = "./Img/default.png";
  }
}
