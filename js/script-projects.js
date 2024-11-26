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
    document.querySelector(".projects-section-headline").innerHTML = "Error";
    document.querySelector(".projects-main-paragraph").innerHTML = error;
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
    console.error("Error", `${error}`);
    if (firstError) {
      document.querySelector(".projects-section-headline").innerHTML = "Error";
      document.querySelector(".projects-main-paragraph").innerHTML = `${error} - First Error ${urlName}`;
      firstError = false;
    }
  }
}

function renderHTML(data) {
  document.querySelector(".projects-section-headline").innerHTML = "Projects";
  document.querySelector(".projects-main-paragraph").innerHTML = "Things I’ve built so far";

  data.forEach(() => {
    let urlName = data[index].name;
    const articles = document.createElement("articles");
    document.querySelector(".projects-section-container").appendChild(articles);
    articles.classList.add("projects-article-container");
    articles.classList.add(`projects-article-container-${index}`);

    const mainImg = document.createElement("img");
    document.querySelector(`.projects-article-container-${index}`).appendChild(mainImg);
    mainImg.classList.add("projects-img");
    mainImg.classList.add(`projects-img-${index}`);
    document.querySelector(`.projects-img-${index}`).alt = "Projects";
    if (index > 5) {
      document.querySelector(`.projects-img-${index}`).loading = "lazy";
    }

    const textContainer = document.createElement("div");
    document.querySelector(`.projects-article-container-${index}`).appendChild(textContainer);
    textContainer.classList.add("projects-text-container");
    textContainer.classList.add(`projects-text-container-${index}`);

    const headline = document.createElement("h2");
    document.querySelector(`.projects-text-container-${index}`).appendChild(headline);
    headline.classList.add("projects-article-headline");
    headline.classList.add(`projects-article-headline-${index}`);

    const descParagraph = document.createElement("p");
    document.querySelector(`.projects-text-container-${index}`).appendChild(descParagraph);
    descParagraph.classList.add("projects-article-paragraph");
    descParagraph.classList.add(`projects-article-paragraph-${index}`);

    const techStack = document.createElement("p");
    document.querySelector(`.projects-text-container-${index}`).appendChild(techStack);
    techStack.classList.add("projects-article-info");
    techStack.classList.add(`projects-article-info-${index}`);

    const linkContainer = document.createElement("div");
    document.querySelector(`.projects-text-container-${index}`).appendChild(linkContainer);
    linkContainer.classList.add("projects-link-container");
    linkContainer.classList.add(`projects-link-container-${index}`);

    const linkItems = document.createElement("div");
    document.querySelector(`.projects-link-container-${index}`).appendChild(linkItems);
    linkItems.classList.add("projects-link-items");
    linkItems.classList.add(`projects-link-items-${index}`);
    linkItems.classList.add("projects-link-items-end");

    const logoGithubImg = document.createElement("img");
    document.querySelector(`.projects-link-items-${index}`).appendChild(logoGithubImg);
    logoGithubImg.classList.add("project-darkmode-svg");
    logoGithubImg.classList.add(`project-darkmode-svg-${index}`);
    document.querySelector(`.project-darkmode-svg-${index}`).src = "./Img/Project-github.svg";
    document.querySelector(`.project-darkmode-svg-${index}`).alt = "Code link";

    const viewCode = document.createElement("a");
    document.querySelector(`.projects-link-items-${index}`).appendChild(viewCode);
    viewCode.innerHTML = "View Code";
    viewCode.classList.add("projects-link-text");
    viewCode.classList.add(`projects-link-text-${index}`);

    document.querySelector(`.projects-article-paragraph-${index}`).innerHTML = data[index].description;
    document.querySelector(`.projects-article-headline-${index}`).innerHTML = data[index].name;
    document.querySelector(`.projects-link-text-${index}`).href = data[index].svn_url;
    getTechstack(urlName, index);
    index++;
  });
}
function renderHTML2(urlName, techStack, index) {
  document.querySelector(`.projects-article-info-${index}`).innerHTML = "Tech stack: " + Object.keys(techStack).join(", ");
  const imgName = ["css-grid-test", "Flexbox-ex", "Flexbox-test", "GameTest", "Intro-CSS", "Intro-HTML", "MobbprogramU1", "PokemonAPI"];

  if (imgName.includes(urlName)) {
    document.querySelector(`.projects-img-${index}`).src = `./Img/${urlName}.png`;
  } else {
    document.querySelector(`.projects-img-${index}`).src = "./Img/default.png";
  }
}
