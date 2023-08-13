//Rotating title at home page
let words = document.querySelectorAll(".word");
words.forEach((word)=> {
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=> {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

//Circle skill///////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;


    for(let i = 0 ; i < dots ; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0 ; i < percent ; i++){
        pointsMarked[i].classList.add('marked');
    }
})


//mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');



//active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

//parallax
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      function handleScroll() {
        var fadeElements = document.querySelectorAll('.scroll-scale');
        fadeElements.forEach(function(element) {
          if (isElementInViewport(element)) {
            element.classList.add('animate');
          }
        });
      }
      
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
      
      // Trigger the scroll handler on page load
      handleScroll();

//Read More Function
function toggleContent(event) {
    const hiddenContent = document.querySelector('.content-hidden');
    const fullContent = document.querySelector('.content-full');
    const btn = event.target; // Get the clicked link (Read More! link)

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        fullContent.style.display = 'none';
        btn.textContent = 'Read Less';
    } else {
        hiddenContent.style.display = 'none';
        fullContent.style.display = 'block';
        btn.textContent = 'Read More!';
    }
}

//Contact us email//////

function sendEmail(){
    Email.send({
        SecureToken : "f1554458-0a59-4157-b73c-ca9eb7fe5c7e",
        To : "nalbe@gmu.edu",
        From : "nathanalbe2022@gmail.com",
        Subject : "Portfolio Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        function (message) {
            // Show the success message and reset the form after successful submission
            showSuccessMessage();
            resetForm();
        }
    );
}

function showSuccessMessage() {
    // Show the success message
    const successMessage = document.querySelector('.success-message');
    successMessage.style.display = 'block';

    // Set opacity to 1 to initiate fadeInOut animation
    successMessage.style.opacity = '1';

    // Hide the success message after a few seconds (adjust the timeout as desired)
    setTimeout(function () {
        fadeOut(successMessage);
    }, 3000); // 3 seconds 
}

function fadeOut(element) {
    let opacity = 1;
    const interval = 50; // adjust for smoother or faster animation

    const fadeEffect = setInterval(function () {
        opacity -= 0.05;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fadeEffect);
            element.style.display = 'none';
        }
    }, interval);
}

function resetForm() {
    // Reset the form fields after successful submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}








