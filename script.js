let enterButton = document.getElementById('enter-button');
let contactButton = document.getElementById('flex-button1');
let section = document.getElementById('slideDown');
let overlay = document.getElementById('overlay');
let exitContact = document.getElementById('exitContact');
let email = document.getElementById('email');
let message = document.getElementById('message-container');
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

// contact button animations
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

// garage door opening
let garage = document.getElementById("garage");
garage.onclick = function () {
  garage.classList.add("garage-animation");
  garage.style.visibility = "hidden";
};


// slider animation
document.getElementById("slider").addEventListener('input', function() {
  const slider = document.getElementById('slider');
  let artContainer = document.getElementById('art-container');
  let artChildren = artContainer.querySelectorAll('*');
  const sliderValue = slider.value;
  let exitButton = document.getElementById('exitGallery');
  if (sliderValue == 100) {
    console.log('hi');
    artContainer.style.visibility = "visible";
    artContainer.style.opacity = 1;
    artChildren.forEach(child => {
      child.style.visibility = "visible";
    })
    slider.value = 0;

  }

  exitButton.addEventListener("click", () => {
    artContainer.style.opacity = 0;
    artContainer.style.visibility = "hidden";
    artChildren.forEach(child => {
      child.style.visibility = "hidden";
    })
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
const wheelLine = document.getElementById('line');
const crankRight = document.getElementById('crankright');
const crankLeft = document.getElementById('crankleft');
let projectContainer = document.getElementById('projects-container');
let rotation = 0;
let rotatingLeft = false;
let rotatingRight = false;
let maxRight = screen.width / 5;
let projectContainerLeft = projectContainer.style.left;
let projectContainerRight = projectContainer.style.right;
let slideValue = -60;

function rotate() {
  if (rotatingRight) {
    rotation += 5;
    console.log(slideValue);
    if (slideValue < 1) {
      projectContainer.style.left = slideValue + "vw";
      slideValue += 1;
    }
  }
  if (rotatingLeft) {
    rotation -= 5; 
    if (slideValue > -61) {
      projectContainer.style.left = slideValue + "vw";
      slideValue -= 1;
    }
  }
  wheelLine.style.transform = `rotate(${rotation}deg)`;
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


