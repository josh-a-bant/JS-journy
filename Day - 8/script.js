console.log("js initialize");

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let containerImage = document.querySelector(".thumbnail");
  containerImage.setAttribute("src", thumbnail);
  containerImage.style.borderRadius = "10px";

  // let videoDuration = document.querySelector(".duration");
  // videoDuration.innerHTML = duration;
  // videoDuration.style.position = "absolute";
  // videoDuration.style.display = "inline-block";
  // videoDuration.style.top = "8rem";
  // videoDuration.style.left = "13rem";
  // videoDuration.style.color = "white";
  // videoDuration.style.backgroundColor = "black";
  // videoDuration.style.padding = "2px 5px";
  // videoDuration.style.borderRadius = "5px";

  let videoDuration = document.querySelector(".duration");
  videoDuration.innerHTML = duration;
  videoDuration.style.cssText =
    "position:absolute; display:inline-block; top:7.5rem; left:12.5rem; color:white; background-color:black; padding:2px 5px; border-radius:5px;";

  console.log("video Duration", videoDuration);

  let videoTitle = document.querySelector(".title");
  videoTitle.innerHTML = title;
  videoTitle.style.color = "white";
  videoTitle.style.cursor = "pointer";

  console.log("video Title", videoTitle);

  let channelName = document.querySelector(".cName");
  channelName.innerHTML = cName;
  channelName.style.color = "white";
  channelName.style.fontSize = "1rem";

  console.log("channel Name", channelName);

  let vdoViews = document.querySelector(".views");
  if (views < 999000) {
    views = views / 1000 + "k";
  } else if (views > 999000) {
    views = views / 1000000 + "m";
  }
  vdoViews.innerHTML = views + " views";
  vdoViews.style.color = "white";

  console.log("views", vdoViews);

  let time = document.querySelector(".monthsOld");
  time.innerHTML = monthsOld + " months ago";
  time.style.color = "white";

  console.log("time", time);

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

