let enterButton = document.getElementById('enter-button');
let contactButton = document.getElementById('flex-button1');
let section = document.getElementById('slideDown');
let overlay = document.getElementById('overlay');
let exitContact = document.getElementById('exitContact');
let email = document.getElementById('email');
let message = document.getElementById('message-container');

enterButton.addEventListener('click', () => {
  let splash = document.getElementById('splash');
  splash.style.opacity = 0;
  splash.style.visibility = 'hidden';
});

let pfBack = document.getElementById('pf-back');
let pfNext = document.getElementById('pf-next');
let pfImages = ['images/portfolio/1.png', 'images/portfolio/2.png'];
let pfImg = document.getElementById('pf-bg');
let pfIndex = 0;
pfImg.src = pfImages[pfIndex];
pfBack.addEventListener('click', () => {
  pfImg.style.opacity = 0;
  if (pfIndex > 0) {
    pfIndex--;
  }
  else {
    pfIndex = pfImages.length - 1;
  }
  setTimeout(updatePfImage, 200);
})

pfNext.addEventListener('click', () => {
  pfImg.style.opacity = 0;
  if (pfIndex < pfImages.length - 1) {
    pfIndex++;
  }
  else {
    pfIndex = 0;
  }
  setTimeout(updatePfImage, 200);
})

function updatePfImage() {
  pfImg.src = pfImages[pfIndex];
  pfImg.style.opacity = 1;
}


contactButton.addEventListener('click', () => {
  if (section.classList.contains('show')) {
    section.classList.remove('show');
    overlay.classList.add('hidden');
  }
  else {
    section.classList.add('show');
    overlay.classList.remove('hidden');
    exitContact.classList.remove('hidden');
    message.classList.remove('hidden');
    email.classList.remove('hidden');
  }
})
exitContact.addEventListener('click', () => {
  section.classList.remove('show');
  overlay.classList.add('hidden');
  exitContact.classList.add('hidden');
  message.classList.add('hidden');
  email.classList.add('hidden');
})

document.getElementById("ig-link").onclick = function () {
  window.open("https://www.instagram.com/li_henryy/", "_blank");
};
document.getElementById("ln-link").onclick = function () {
  window.open("https://www.linkedin.com/in/henryli0508", "_blank");
};
document.getElementById("resume-link").onclick = function () {
  window.open("https://drive.google.com/file/d/1OufqySRW5S9-c7IePEcAPocFKdo6gvZ8/view?usp=sharing", "_blank");
};

let garage = document.getElementById("garage");
garage.onclick = function () {
  garage.classList.add("garage-animation");
  garage.style.visibility = "hidden";
};



document.getElementById("slider").addEventListener('input', function() {
  const slider = document.getElementById('slider');
  var about = document.getElementById('about');
  var upperdoor = document.getElementById('upperdoor')
  var lowerdoor = document.getElementById('lowerdoor')
  var bg = document.getElementById('grid-item4')

  const sliderValue = slider.value;

  if (sliderValue == 100) {
    slider.style.display = "none";
    upperdoor.style.display = "block";
    upperdoor.classList.add("upperanimate");
    lowerdoor.classList.add("loweranimate");
    bg.style.backgroundColor = "#e9d2c1";
    let index = 0;
    let text = document.getElementById("about");
    let textArray = ["Hi, my name is Henry Li", "I'm a student, software engineer, and aspiring game developer", "Hope you're enjoying my page so far"];

    function changeText() {
      text.style.opacity = 0;
      setTimeout(() => {
        if (index >= textArray.length) {
          index = 0;
        }
        else {
          index++;
        }
        text.textContent = textArray[index];
        text.style.opacity = 1;

      }, 1000)
    }
    text.textContent = textArray[index];
    text.style.opacity = 1;
    setInterval(changeText, 3000);
  }
})


let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let img = document.getElementById('headshot-img');
const images = ['images/1.jpg', 'images/2.jpg'];
let currentIndex = 0;
img.src = images[currentIndex];
console.log(images.length);
prevButton.addEventListener('click', () => {
  img.style.opacity = 0;
  if (currentIndex > 0) {
    currentIndex--;
  }
  else {
    currentIndex = images.length - 1;
  }
  setTimeout(updateImage, 200);
})

nextButton.addEventListener('click', () => {
  img.style.opacity = 0;
  if (currentIndex < images.length - 1) {
    currentIndex++;
  }
  else {
    currentIndex = 0;
  }
  setTimeout(updateImage, 200);
})

function updateImage() {
  img.src = images[currentIndex];
  img.style.opacity = 1;
}

let projectsSection = document.getElementById('projects-section');
document.getElementById("projects-link").addEventListener('onclick', function() {
  projectsSection.classList.add("projects");
})