// Swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
  
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlidePrev: true,
        allowSlideNext: true,
      },
    },
  });
  
  // Tabs
  
  let tabHeaders = document.querySelectorAll(".tabs .tab-header > div");
  let tabContents = document.querySelectorAll(".tabs .tab-content > div");
  
  for (let i = 0; i < tabHeaders.length; i++) {
    tabHeaders[i].addEventListener("click", function() {
      document
        .querySelector(".tabs .tab-header > .active")
        .classList.remove("active");
      tabHeaders[i].classList.add("active");
      document
        .querySelector(".tabs .tab-content > .active")
        .classList.remove("active");
      tabContents[i].classList.add("active");
    });
  }
  
  //Nav bar
  const burger = document.getElementById("burger");
  const links = document.querySelector(".links");
  const anchors = links.querySelectorAll("a");
  
  burger.addEventListener("click", function () {
    this.classList.toggle("rotate");
    links.classList.toggle("open");
  });
  
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      burger.classList.toggle("rotate");
    }
  });
  
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let current = "";
    for (var section of sections) {
      if (window.pageYOffset >= section.offsetTop - 280) {
        current = section.getAttribute("id");
      }
    }
  
    for (var anchor of anchors) {
      anchor.classList.remove("selected");
      if (anchor.getAttribute("href") === "#" + current) {
        anchor.classList.add("selected");
      }
    }
  });
  
  ///Form
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    validateForm(event);
  });
  ///
  const trialForm = document.getElementById("trialForm");
  
  trialForm.addEventListener("submit", function (event) {
    validateForm(event);
  });
  
  var validateForm = function (formEvent) {
    formEvent.preventDefault();
    let valid = true;
    var allAlerts = document.querySelectorAll(".alert");
  
    allAlerts.forEach((alertBlock) => {
      alertBlock.remove();
    });
    const data = new FormData(formEvent.target);
  
    for (var input of data.entries()) {
      if (input[1] == "") {
        var x = document.getElementsByName(input[0]);
        var alertSpan = document.createElement("span");
        alertSpan.innerText = "This value is empty";
        alertSpan.classList.add("alert");
        x[0].after(alertSpan);
        valid = false;
      }
    }
  
    if (valid) {
      alert("Form submitted");
    }
  };