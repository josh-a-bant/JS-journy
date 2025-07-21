console.log("js initialize");

let container = document.querySelector(".container");
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  thumbnail =
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw";

  duration = "31:22";
  title =
    "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73";
  cName = "CodeWithHarry";
  views = 560000;
  monthsOld = 7;

  let div = document.createElement("div");
  div.innerHTML = `<div class="card">
        <section class="container-image">
          <img class="thumbnail" src="${thumbnail}" alt="thumbnail" />
          <div class="duration">${duration}</div>
        </section>

        <section class="container-details">
          <h1 class="title">${title}</h1>
          <div class="vdoInfo">
            <div class="cName">${cName}</div>
            <ul>
              <li class="views">${views}</li>
              <li class="monthsOld">${monthsOld}</li>
            </ul>
          </div>
        </section>
      </div>`;

  container.appendChild(div);
  // Finish this function
}

createCard(
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  createCard(
    "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
  );
});
