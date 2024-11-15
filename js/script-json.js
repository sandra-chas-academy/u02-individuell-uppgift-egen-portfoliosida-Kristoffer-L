async function getInfo() {
  try {
    const response = await fetch("./info.json");

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
  document.querySelector(".about-experience-name-1").innerHTML = data.workExp[0].work;
  document.querySelector(".about-experience-name-2").innerHTML = data.workExp[1].work;
  document.querySelector(".about-experience-name-3").innerHTML = data.workExp[2].work;
  document.querySelector(".about-experience-name-4").innerHTML = data.educationExp[0].education;
  document.querySelector(".about-experience-name-5").innerHTML = data.educationExp[1].education;
  document.querySelector(".about-experience-name-6").innerHTML = data.educationExp[2].education;
  document.querySelector(".about-article-time-1").innerHTML = data.workExp[0].time;
  document.querySelector(".about-article-time-2").innerHTML = data.workExp[1].time;
  document.querySelector(".about-article-time-3").innerHTML = data.workExp[2].time;
  document.querySelector(".about-article-time-4").innerHTML = data.educationExp[0].time;
  document.querySelector(".about-article-time-5").innerHTML = data.educationExp[1].time;
  document.querySelector(".about-article-time-6").innerHTML = data.educationExp[2].time;
  document.querySelector(".about-article-comp-edu-1").innerHTML = data.workExp[0].company;
  document.querySelector(".about-article-comp-edu-2").innerHTML = data.workExp[1].company;
  document.querySelector(".about-article-comp-edu-3").innerHTML = data.workExp[2].company;
  document.querySelector(".about-article-comp-edu-4").innerHTML = data.educationExp[0].company;
  document.querySelector(".about-article-comp-edu-5").innerHTML = data.educationExp[1].company;
  document.querySelector(".about-article-comp-edu-6").innerHTML = data.educationExp[2].company;
  document.querySelector(".about-article-location-1").innerHTML = data.workExp[0].place;
  document.querySelector(".about-article-location-2").innerHTML = data.workExp[1].place;
  document.querySelector(".about-article-location-3").innerHTML = data.workExp[2].place;
  document.querySelector(".about-article-location-4").innerHTML = data.educationExp[0].place;
  document.querySelector(".about-article-location-5").innerHTML = data.educationExp[1].place;
  document.querySelector(".about-article-location-6").innerHTML = data.educationExp[2].place;
  document.querySelector(".about-article-date-1").innerHTML = data.workExp[0].date;
  document.querySelector(".about-article-date-2").innerHTML = data.workExp[1].date;
  document.querySelector(".about-article-date-3").innerHTML = data.workExp[2].date;
  document.querySelector(".about-article-date-4").innerHTML = data.educationExp[0].date;
  document.querySelector(".about-article-date-5").innerHTML = data.educationExp[1].date;
  document.querySelector(".about-article-date-6").innerHTML = data.educationExp[2].date;
}

getInfo();
