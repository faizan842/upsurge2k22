//Menu Bar
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}






//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
});


//Clock Timer


(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "08/25/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
}());

//Event


var button = document.getElementById('right')
button.onclick = function () {
  var container=document.getElementById('box')
  sideScroll(container, 'right', 25, 1000, 10);
};
var back = document.getElementById('left');
back.onclick = function () {
  var container = document.getElementById('box');
  sideScroll(container, 'left', 25, 1000, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

// const fs = Request("fs");
function aboutText() {
  const main = document.getElementById("demo");
  const externalHTML = `<p> Magic Pen is an individual article writing competition, from the above topics choose any one topic, write an article on it and submit.
The Competition is open for all the students currently pursuing their U.G.<br>All the participants submit their article at google form linked below.<br>Link: <br>The Article needs to be submitted in doc.x form.
Whole article should be in 500 words (i.e 1 page with font=Time New Roman, Font size 12)
File Name Format:<br>MagicPen_yourname_collegeName. </p>`;
  main.innerHTML = externalHTML;
}
function timelineText() {
  const main = document.getElementById("demo");
  const externalHTML = `<p> timeline </p>`;
  main.innerHTML = externalHTML;
}
function judgeText() {
  const main = document.getElementById("demo");
  const externalHTML = `<p> Magic Pen is an individual article writing competition, from the above topics choose any one topic, write an article on it and submit.
  The Competition is open for all the students currently pursuing their U.G.<br>All the participants submit their article at google form linked below.<br>Link: <br>The Article needs to be submitted in doc.x form.
  Whole article should be in 500 words (i.e 1 page with font=Time New Roman, Font size 12)
  File Name Format:<br>MagicPen_yourname_collegeName. </p>`;
  main.innerHTML = externalHTML;
}
function contactText() {
  const main = document.getElementById("demo");
  const externalHTML = `
    <div class="first">
                <div class="person1"></div>
                <div class="person1-details">
                  <p>Name:- ******* ******</p>
                  <p>Mob no:- **********</p>
                </div>
              </div>

              <div class="second">
                <div class="person2"></div>
                <div class="person2-details">
                  <p>Name:- ******* ******</p>
                  <p>Mob no:- **********</p>
                </div>
              </div>`;
  main.innerHTML = externalHTML;
}
