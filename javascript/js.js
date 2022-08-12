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
    dayMonth = "09/01/",
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
        document.getElementById("headline").innerText = "Upsurge 2k22 is here";
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
  const externalHTML = `<p> REGISTRATION DETAILS :
  Registrations will be starting from 5th August 2022.<br>
  Registrations will End on 24th August 2022.<br>
  Entry Fees : ₹500/- per team
  Team Size: 3-5
  <br>
  RELEASE OF PROBLEM STATEMENTS :
  <br>
  Problem Statements from every domain will be released 12th August 2022.
  <br>
  PRELIMINARY ROUND :
  
  Teams will be shortlisted on the basis of an explanatory video by our technical team.
  <br>
  FINAL ROUND :
  
  We will have no. of panel/panels of judges based on the Registration.
  
  Winner Team and the Runner Up Teams will be selected by our decided Panel</p>`;
  main.innerHTML = externalHTML;
}
function timelineText() {
  const main = document.getElementById("demo");
  const externalHTML = `<p>5 AUGUST :- Registration starts <br> 12 AUGUST :- Problem statement will be released <br>27 AUGUST :- Registerd teams have to upload there prototype explanetry videos<br>1 SEPETEMBER :- Coming Soon...</p>`;
  main.innerHTML = externalHTML;
}
function judgeText() {
  const main = document.getElementById("demo");
  const externalHTML = `<p>Will be revealed soon....</p>`;
  main.innerHTML = externalHTML;
}
function contactText() {
  const main = document.getElementById("demo");
  const externalHTML = `
    <div class="first">
                <div class="person1"></div>
                <div class="person1-details">
                  <p>SUDHANSHU NERKAR</p>
                  <p>7391995430</p>
                </div>
              </div>

              <div class="second">
                <div class="person2"></div>
                <div class="person2-details">
                  <p>SAHIL DAFADE</p>
                  <p>9011170771</p>
                </div>
              </div>`;
  main.innerHTML = externalHTML;
}




// --------------magicpen-------------------

function aboutText1() {
  const main = document.getElementById("demo");
  const externalHTML = `<p> 
  Magic Pen is an individual article writing competition, from the above topics choose any one topic, write an article on it and submit.
                The Competition is open for all the students currently pursuing their U.G.<br>All the participants submit their article at google form linked below.<br>Link: <br>The Article needs to be submitted in doc.x form.
                Whole article should be in 500 words (i.e 1 page with font=Time New Roman, Font size 12)
                File Name Format:<br>MagicPen_yourname_collegeName. <br>
                
  
  </p>`;
  main.innerHTML = externalHTML;
}
function timelineText1() {
  const main = document.getElementById("demo");
  const externalHTML = `<p><strong>𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙩𝙞𝙤𝙣 𝙙𝙚𝙩𝙖𝙞𝙡𝙨:<br></strong>

  Submissions starts from 30th August .<br>
  Last date for submission is 2nd September.<br>
  
  The Competition is open for all the students currently pursuing their Poly/U.G.</p>`;
  main.innerHTML = externalHTML;
}
function instruction() {
  const main = document.getElementById("demo");
  const externalHTML = `<p>  The Article needs to be submitted in doc.x form/pdf.
  <br>
                Whole article should be in 500 words ( 1 pg with font size 12 ) 
                <br>     
         <strong >
          𝗧𝗼𝗽𝗶𝗰𝘀:<br>
          𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹
         </strong>       
                <br>
                1.Virtual reality<br>
                2.Internet Security<br>
                
          <strong >
            𝗡𝗼𝗻𝘁𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹<br>
          </strong>     
                
                1.Travel stories <br>
                2.Your vision towards world<br>
                
    <strong>
      𝗠𝗼𝗺𝗲𝗻𝘁𝗼𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗴𝗶𝘃𝗲𝗻 𝘁𝗼 𝘁𝗵𝗲 𝘄𝗶𝗻𝗻𝗲𝗿𝘀 𝗼𝗳 𝗯𝗼𝘁𝗵 𝘁𝗵𝗲 𝗱𝗼𝗺𝗮𝗶𝗻𝘀. ( 𝗙𝗶𝗿𝘀𝘁 𝗮𝗻𝗱 𝘀𝗲𝗰𝗼𝗻𝗱 𝘄𝗶𝗻𝗻𝗲𝗿 ) <br>
                
      𝗘𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗲𝘀 𝘁𝗼 𝗮𝗹𝗹<br>
    </strong>            
                
                
                Happy writing and All the best for impressing everyone with your writing.</p>`;
  main.innerHTML = externalHTML;
}
function contactText1() {
  const main = document.getElementById("demo");
  const externalHTML = `
    <div class="first">
                <div class="person3"></div>
                <div class="person1-details">
                  <p>ASHWATI RAJANKAR</p>
                  <p>8888598436</p>
                </div>
              </div>

              <div class="second">
                <div class="person4"></div>
                <div class="person2-details">
                  <p>TEJASWINI PADOLE</p>
                  <p> 9307348591</p>
                </div>
              </div>`;
  main.innerHTML = externalHTML;
}

