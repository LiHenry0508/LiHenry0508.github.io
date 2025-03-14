let enterButton = document.getElementById('enter-button');
let light = document.getElementById('bulb-button');
let bulbimg = document.getElementById('bulb-img');
let myinfo = document.getElementById('myinfo');
let myinfoContainer = document.getElementById('myinfocontainer');
let myinfop1 = document.getElementById('myinfop1');
let myinfop2 = document.getElementById('myinfop2');

// splash screen
enterButton.addEventListener('click', () => {
  let splash = document.getElementById('splash');
  splash.style.opacity = 0;
  splash.style.visibility = 'hidden';
});

// lightbulb animations
let bool = true;
light.addEventListener('click', () => {
  if (bool) {
    myinfop1.classList.remove("hidden");
    myinfop2.classList.remove("hidden");
    myinfoContainer.style.height = 100 + "vh";
    myinfoContainer.style.visibility = "visible";
    light.style.top = -1 + "px";
    bool = false;
  }
  else if (bool == false) {
    myinfop1.classList.add("hidden");
    myinfop2.classList.add("hidden");
    myinfoContainer.style.visibility = "hidden";
    myinfoContainer.style.height = 0 + "vh";
    bool = true;
  }
  console.log(bool);
})
light.addEventListener('mouseover', () => {
  bulbimg.src = 'images/litbulb.svg';
  console.log('hi')
})
light.addEventListener('mouseout', () => {
  bulbimg.src = 'images/bulb.svg';
  console.log('hi')
})

// button control for portfolio
let pfBack = document.getElementById('pf-back');
let pfNext = document.getElementById('pf-next');
let pfImages = ['/drawings/1.png', '/drawings/2.png', '/drawings/3.png', 
'/drawings/4.png', '/drawings/5.png', '/drawings/6.png', '/drawings/7.png',
'/drawings/8.png', '/drawings/9.png'];
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
  pfImg.style.opacity = 1;
  pfImg.src = pfImages[pfIndex];
}

// contact button animations
let contactButton = document.getElementById('flex-button1');
let section = document.getElementById('slideDown');
let overlay = document.getElementById('overlay');
let exitContact = document.getElementById('exitContact');
let sectionChildren = section.querySelectorAll("*");
contactButton.addEventListener('click', () => {
  section.classList.add('show');
  overlay.classList.add("show");
  for (let child of sectionChildren) {
    child.classList.remove("hidden");
  }
})
exitContact.addEventListener('click', () => {
  section.classList.remove('show');
  for (let child of sectionChildren) {
    child.classList.add("hidden");
  }
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
document.getElementById("github-link").onclick = function () {
  window.open("https://github.com/hhenryli", "_blank");
};

// garage door opening
let garage = document.getElementById("garage");
garage.onclick = function () {
  garage.classList.add("garage-animation");
  garage.style.visibility = "hidden";
};


// slider animation
document.getElementById("slider").addEventListener('input', function() {
  const slider = document.getElementById('slider');
  let projectContainer = document.getElementById('projects-container');
  let projectChildren = projectContainer.querySelectorAll('*');
  const sliderValue = slider.value;
  let exitButton = document.getElementById('exitGallery');
  if (sliderValue == 100) {
    projectContainer.style.visibility = "visible";
    projectContainer.style.opacity = 1;
    projectContainer.style.height = 100 + "vh";
    projectChildren.forEach(child => {
      child.classList.remove("hidden");
    })
    slider.value = 0;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  exitButton.addEventListener("click", () => {
    projectContainer.style.visibility = "hidden";
    projectChildren.forEach(child => {
      child.classList.add("hidden");
    })
    projectContainer.style.height = 0 + "vh";
  })
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

//wheel animation 
const pie = document.getElementById('pie');
const crankRight = document.getElementById('crankright');
const crankLeft = document.getElementById('crankleft');
let pacmanContainer = document.getElementById('footer-container')
let pacman = document.getElementById('pacman');
let pacmanMouth = document.getElementById('pacman-mouth');
let rotation = 0;
let rotatingLeft = false;
let rotatingRight = false;
let slideValue = 0;

function rotate() {
  let containerWidth = pacmanContainer.offsetWidth;
  let pacmanWidth = pacman.offsetWidth;

  let maxSlide = containerWidth - pacmanWidth;
  if (rotatingRight && slideValue < maxSlide) {
    rotation += 5;
    pacmanMouth.className = "pacman-mouth-right";
    pacman.style.left = slideValue + "px";
    slideValue += 7;
  }
  if (rotatingLeft && slideValue > 0) {
    rotation -= 5;
    pacmanMouth.className = "pacman-mouth-left";
    pacman.style.left = slideValue + "px";
    slideValue -= 7;
  }
  pie.style.transform = `rotate(${rotation}deg)`;
  if (rotatingRight|| rotatingLeft)
    requestAnimationFrame(rotate);
}
function startLeftRotation(event) {
    rotatingLeft = true;
    rotatingRight = false;
    requestAnimationFrame(rotate); 
  }
function startRightRotation(event) {
  rotatingRight = true;
  rotatingLeft = false;
  requestAnimationFrame(rotate); 
}

function stopRotation() {
  rotatingLeft = false;
  rotatingRight = false;
}

crankLeft.addEventListener("mousedown", startLeftRotation);
crankLeft.addEventListener("mouseup", stopRotation);
crankRight.addEventListener("mousedown", startRightRotation);
crankRight.addEventListener("mouseup", stopRotation);


