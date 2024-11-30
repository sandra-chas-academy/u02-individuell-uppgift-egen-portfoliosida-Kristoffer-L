async function getInfo() {
  try {
    const response = await fetch("./json/about.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    renderHTML(data);
  } catch (error) {
    console.error("Error", error);
  }
}

function renderHTML(data) {
  document.querySelector(".about-experience-name-1").textContent = data.workExp[0].work;
  document.querySelector(".about-experience-name-2").textContent = data.workExp[1].work;
  document.querySelector(".about-experience-name-3").textContent = data.workExp[2].work;
  document.querySelector(".about-experience-name-4").textContent = data.educationExp[0].education;
  document.querySelector(".about-experience-name-5").textContent = data.educationExp[1].education;
  document.querySelector(".about-experience-name-6").textContent = data.educationExp[2].education;
  document.querySelector(".about-article-time-1").textContent = data.workExp[0].time;
  document.querySelector(".about-article-time-2").textContent = data.workExp[1].time;
  document.querySelector(".about-article-time-3").textContent = data.workExp[2].time;
  document.querySelector(".about-article-time-4").textContent = data.educationExp[0].time;
  document.querySelector(".about-article-time-5").textContent = data.educationExp[1].time;
  document.querySelector(".about-article-time-6").textContent = data.educationExp[2].time;
  document.querySelector(".about-article-comp-edu-1").textContent = data.workExp[0].company;
  document.querySelector(".about-article-comp-edu-2").textContent = data.workExp[1].company;
  document.querySelector(".about-article-comp-edu-3").textContent = data.workExp[2].company;
  document.querySelector(".about-article-comp-edu-4").textContent = data.educationExp[0].company;
  document.querySelector(".about-article-comp-edu-5").textContent = data.educationExp[1].company;
  document.querySelector(".about-article-comp-edu-6").textContent = data.educationExp[2].company;
  document.querySelector(".about-article-location-1").textContent = data.workExp[0].place;
  document.querySelector(".about-article-location-2").textContent = data.workExp[1].place;
  document.querySelector(".about-article-location-3").textContent = data.workExp[2].place;
  document.querySelector(".about-article-location-4").textContent = data.educationExp[0].place;
  document.querySelector(".about-article-location-5").textContent = data.educationExp[1].place;
  document.querySelector(".about-article-location-6").textContent = data.educationExp[2].place;
  document.querySelector(".about-article-date-1").textContent = data.workExp[0].date;
  document.querySelector(".about-article-date-2").textContent = data.workExp[1].date;
  document.querySelector(".about-article-date-3").textContent = data.workExp[2].date;
  document.querySelector(".about-article-date-4").textContent = data.educationExp[0].date;
  document.querySelector(".about-article-date-5").textContent = data.educationExp[1].date;
  document.querySelector(".about-article-date-6").textContent = data.educationExp[2].date;
}

getInfo();
