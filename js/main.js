const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

//Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

//AOS animations settings
AOS.init({
  once: true,
});

// Contact Directory
window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_q5m1i3s', 'template_qkksjle', this)
                    .then(function() {
                        alert('Email sent successfully!');
                    }, function(error) {
                        alert('Failed to send email: ' + error);
                    });
            });
        }
