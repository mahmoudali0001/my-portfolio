// ---------------------------------------------------------- Start Catching Elements ---------------------------------- //
let navbarBtn = document.querySelector("#menu-btn");

console.log(email.value);

let navbarBtnSpan = document.querySelectorAll("#menu-btn span");

let navbarMenuOverlay = document.querySelector("#overlay");

let navbarMenu = document.querySelector("#navbar-menu");

let navbarLinks = document.querySelectorAll(".link-item");

let overlayLogo = document.querySelector("#overlay-logo");

let skillsCount = document.querySelectorAll(".skill-count");

let input = document.querySelectorAll(".conact-us-input");

let inputPlaceHolder = document.querySelectorAll(".input-name");

let nav = document.querySelector("#nav");

let projectsWrapper = document.querySelector("#projects-wrapper");

let shuffleBtns = document.querySelectorAll(".shuffle-btn");

let projectScreensBtns = document.querySelectorAll(".project-screen-btn");

let fromUnderLine = document.querySelectorAll(".underline");

let allSections = document.querySelectorAll(".section");
// ---------------------------------------------------------- End Catching Elements ---------------------------------- //

let pageIndex = 0;
let itemPerPage = 6;
// ------------------------------------------------------------ Start navbar click listener ------------------------------ //

window.addEventListener("scroll", function () {
  if (allSections[1].offsetTop <= window.pageYOffset + 10) {
    removeActive(navbarLinks[1], navbarLinks);
  }
  if (allSections[2].offsetTop <= window.pageYOffset + 80) {
    removeActive(navbarLinks[2], navbarLinks);
  }
  if (allSections[3].offsetTop <= window.pageYOffset + 80) {
    removeActive(navbarLinks[3], navbarLinks);
  }
  if (allSections[4].offsetTop <= window.pageYOffset + 80) {
    removeActive(navbarLinks[4], navbarLinks);
  }
  if (allSections[5].offsetTop <= window.pageYOffset + 80) {
    removeActive(navbarLinks[5], navbarLinks);
  }
  if (window.pageYOffset == 0) {
    removeActive(navbarLinks[0], navbarLinks);
  }
});

navbarBtn.addEventListener("click", openNavBarMenuAndClosed);

navbarMenuOverlay.addEventListener("click", openNavBarMenuAndClosed);

navbarLinks.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    removeActive(btn, navbarLinks);
    console.log(btn.childNodes[1].getAttribute("href").slice(1));
  });
});

function manageScreenWidth(x) {
  if (x.matches) {
    document.querySelectorAll(".link-item").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openNavBarMenuAndClosed();
      });
    });
    window.addEventListener("scroll", function () {
      if (contactUs.offsetTop < window.pageYOffset + 180) {
        rightBarContactUs.className =
          "absolute w-48 duration-1000 md:h-full  sm:h-[45%] h-[40%] shadow-xl right-0 bg-main top-0 flex items-end justify-center";
        setTimeout(() => {
          infoContactUs.className =
            "bg-neutral-700 max-h-3/4 z-10 text-gray-300 min-h-[200px] relative right-0 md:w-full w-3/4 duration-1000";
        }, 1000);
        setTimeout(() => {
          infoBefore.className =
            "before:absolute before:w-10 before:h-10 before:bg-main before:top-[-20px] before:left-[-20px] before:scale-100 before:duration-1000";
          infoParent.className = "md:w-[70%] w-full md:p-10 p-3";
        }, 2000);

        setTimeout(() => {
          document.querySelectorAll(".info-text").forEach((el) => {
            el.classList.remove("hidden");
          });
          document.querySelector(".social-links").classList.remove("hidden");
          document.querySelector(".social-links").classList.add("flex");
        }, 2500);
      }
    });
  }
}
var x = window.matchMedia("(max-width: 700px)");
manageScreenWidth(x);
x.addListener(manageScreenWidth);
// ------------------------------------------------------------ End navbar click listener ------------------------------ //

// ------------------------------------------------------------- My Projects Data obj ------------------------------------- //

const projectData = [
  {
    pName: "El King stone",
    pClient: "King stone company",
    pGitHubLink: "https://github.com/mahmoudali0001/el-king-stone",
    pDemoLink: "https://mahmoudali0001.github.io/el-king-stone/",
    pTools: ["Html5", "Css3", "JavaScript", "Bootstrap", "wow.js"],
    pCategory: "Website",
    pCover: "./assets/img/projects-img/Covers/el-king-stone-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/el-king-stone-pc.png",
    pImgTablet: "./assets/img/projects-img/tablet/king-stone-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/king-stone-mobile.png",
  },
  {
    pName: "dgcatalytic",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/dgcatalytic",
    pDemoLink: "https://mahmoudali0001.github.io/dgcatalytic/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "Website",
    pCover: "./assets/img/projects-img/Covers/dgcatalytic-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/dgcatalytic.png",
    pImgTablet: "./assets/img/projects-img/tablet/dgcatalytic-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/dgcatalytic-mobile.png",
  },
  {
    pName: "Landing Page",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/landing-page",
    pDemoLink: "https://mahmoudali0001.github.io/landing-page/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "Website",
    pCover: "./assets/img/projects-img/Covers/landing-page-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/landing-page-pc.png",
    pImgTablet: "./assets/img/projects-img/tablet/landing-page-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/landing-page-mobile.png",
  },
  {
    pName: "Template 1",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/Template-1",
    pDemoLink: "https://mahmoudali0001.github.io/Template-1/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "Website",
    pCover: "./assets/img/projects-img/Covers/Template-1-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/Template-pc.png",
    pImgTablet: "./assets/img/projects-img/tablet/Template-1-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/Template-1-mobile.png",
  },
  {
    pName: "Loop Studios",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/loop-studios",
    pDemoLink: "https://mahmoudali0001.github.io/loop-studios/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "Website",
    pCover: "./assets/img/projects-img/Covers/loop-studios-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/loop-studios-pc.png",
    pImgTablet: "./assets/img/projects-img/tablet/loop-studios-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/studios-mobile.png",
  },
  {
    pName: "Fylo",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/Fylo",
    pDemoLink: "https://mahmoudali0001.github.io/Fylo/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "Website",
    pCover: "./assets/img/projects-img/Covers/fylo-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/Fylo-pc.png",
    pImgTablet: "./assets/img/projects-img/tablet/Fylo-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/Fylo-mobile.png",
  },
  {
    pName: "Twitter clone",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/Twitter-clone",
    pDemoLink: "https://mahmoudali0001.github.io/Twitter-clone/",
    pTools: ["Html5", "Css3", "TailwindCss"],
    pCategory: "Web App",
    pCover: "./assets/img/projects-img/Covers/Twitter-clone-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/Twitter-clone-pc.png",
    pImgTablet: "./assets/img/projects-img/tablet/Twitter-clone-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/Twitter-clone-mobile.png",
  },
  {
    pName: "Ipda3 Tech",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/ipda3-tech",
    pDemoLink: "https://mahmoudali0001.github.io/ipda3-tech/",
    pTools: ["Html5", "Css3", "Bootstrap"],
    pCategory: "Website",
    pCover: "./assets/img/projects-img/Covers/ipda3-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/ipda3-tech-pc.png",
    pImgTablet: "./assets/img/projects-img/tablet/ipda3-tech-tablet-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/ipda3-tech-mobile.png",
  },
  {
    pName: "Typing Speed Test Game",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/typing-speed-test-game",
    pDemoLink: "https://mahmoudali0001.github.io/typing-speed-test-game/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "Web App",
    pCover: "./assets/img/projects-img/Covers/typing-speed-test-game-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/typing-speed-test-game-cover.PNG",
    pImgTablet: "./assets/img/404.png",
    pImgMobile: "./assets/img/404.png",
  },
  {
    pName: "Rock Paper Scissor Game",
    pClient: "No One",
    pGitHubLink: "https://mahmoudali0001.github.io/Rock-Paper-Scissors/",
    pDemoLink: "https://mahmoudali0001.github.io/Rock-Paper-Scissors/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "Web App",
    pCover: "./assets/img/projects-img/Covers/Rock-Paper-Scissors-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/Rock-Paper-Scissors-pc.png",
    pImgTablet:
      "./assets/img/projects-img/tablet/Rock-Paper-Scissors-tablet.png",
    pImgMobile:
      "./assets/img/projects-img/mobile/Rock-Paper-Scissors-mobile.png",
  },
  {
    pName: "calc Your Income",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/calc",
    pDemoLink: "https://mahmoudali0001.github.io/calc/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "challenge",
    pCover: "./assets/img/projects-img/Covers/calc-cover.PNG",
    pImgPc: "./assets/img/projects-img/pc/calc-pc.PNG",
    pImgTablet: "./assets/img/projects-img/tablet/calc-tablet.png",
    pImgMobile: "./assets/img/projects-img/mobile/calc-mobile.png",
  },
  {
    pName: "Responsive Designs Practice",
    pClient: "No One",
    pGitHubLink: "./assets/img/404.png",
    pDemoLink: "https://codepen.io/mahmoud-ali-the-encoder/pen/WNdybEL",
    pTools: ["Html5", "Css3"],
    pCategory: "challenge",
    pCover: "./assets/img/projects-img/Covers/Responsive Designs-cover.PNG",
    pImgPc: "./assets/img/projects-img/Covers/Responsive Designs-cover.PNG",
    pImgTablet: "./assets/img/404.png",
    pImgMobile: "./assets/img/404.png",
  },
  {
    pName: "Animation  Chanllenge el zero",
    pClient: "No One",
    pGitHubLink: "./assets/img/404.png",
    pDemoLink: "https://codepen.io/mahmoud-ali-the-encoder/pen/yLpKGpY",
    pTools: ["Html5", "Css3"],
    pCategory: "challenge",
    pCover: "./assets/img/projects-img/Covers/Animation  Chanllenge-cover.PNG",
    pImgPc: "./assets/img/projects-img/Covers/Animation  Chanllenge-cover.PNG",
    pImgTablet: "./assets/img/404.png",
    pImgMobile: "./assets/img/404.png",
  },
  {
    pName: "Spiner up and down",
    pClient: "No One",
    pGitHubLink: "./assets/img/404.png",
    pDemoLink: "https://codepen.io/mahmoud-ali-the-encoder/pen/gOoejeG",
    pTools: ["Html5", "Css3"],
    pCategory: "challenge",
    pCover: "./assets/img/projects-img/Covers/Spiner up and down-cover.png",
    pImgPc: "./assets/img/projects-img/Covers/Spiner up and down-cover.png",
    pImgTablet: "./assets/img/404.png",
    pImgMobile: "./assets/img/404.png",
  },
  {
    pName: "Todo list",
    pClient: "No One",
    pGitHubLink: "https://github.com/mahmoudali0001/Todo-list",
    pDemoLink: "https://mahmoudali0001.github.io/Todo-list/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "challenge",
    pCover: "./assets/img/projects-img/Covers/Todo-list-cover.png",
    pImgPc: "./assets/img/projects-img/Covers/Todo-list-cover.png",
    pImgTablet: "./assets/img/404.png",
    pImgMobile: "./assets/img/404.png",
  },
  {
    pName: "Simple Articles Editor",
    pClient: "No One",
    pGitHubLink:
      "https://github.com/mahmoudali0001/-Simple-Articles-Editor-Challenge",
    pDemoLink:
      "https://mahmoudali0001.github.io/-Simple-Articles-Editor-Challenge/",
    pTools: ["Html5", "Css3", "JavaScript"],
    pCategory: "challenge",
    pCover:
      "./assets/img/projects-img/Covers/Simple-Articles-Editor-Challenge-cover.PNG",
    pImgPc:
      "./assets/img/projects-img/Covers/Simple-Articles-Editor-Challenge-cover.PNG",
    pImgTablet: "./assets/img/404.png",
    pImgMobile: "./assets/img/404.png",
  },
];

let newArrayOfProjects = projectData.map((el) => {
  return el;
});

function handleNavBarBgOnScroll() {
  window.addEventListener("scroll", function () {
    if (aboutMe.offsetTop <= window.pageYOffset + 270) {
      svg1.style.strokeDashoffset = "0";
      svg2.style.strokeDashoffset = "0";
    }
  });
}
handleNavBarBgOnScroll();

// ------------------------------------------------------------ Start openNavBarMenuAndClosed Function ------------------------------ //
function openNavBarMenuAndClosed() {
  navbarLinks.forEach((el) => {
    el.classList.toggle(`animate-linksAnimate6`);
  });
  navbarBtnSpan[0].classList.toggle("w-1/4");
  navbarBtnSpan[0].classList.toggle("span-open-1");

  navbarBtnSpan[2].classList.toggle("w-3/4");
  navbarBtnSpan[2].classList.toggle("span-open-2");

  navbarBtn.classList.toggle("left-0");
  navbarBtn.classList.toggle("btn-open");

  navbarMenu.classList.toggle("w-0");
  navbarMenu.classList.toggle("open-menu");
  navbarMenu.classList.toggle("-right-20");
  navbarMenu.classList.toggle("right-0");
  navbarMenu.classList.toggle("hidden");

  navbarMenuOverlay.classList.toggle("hidden");
}
// ------------------------------------------------------------ End openNavBarMenuAndClosed Function ------------------------------ //

downloadClick.addEventListener("click", function () {
  document.querySelector("#downloadClick i").classList.add("bottom-[-30px]");
  setTimeout(() => {
    document.querySelector("#downloadClick i").remove();
    document.querySelector("#downloadClick span").innerHTML = "Downloaded";
  }, 700);
});

window.onload = () => {
  setTimeout(() => {
    loadingPage.remove();
  }, 2900);
  setTimeout(() => {
    overlayLogo.classList.remove("left-0");
    overlayLogo.classList.add("ffff");
    triangle.style.strokeDashoffset = "0";
  }, 3100);
  setTimeout(() => {
    overlayLogo.remove();
  }, 3120);
};

parentDarkModeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  darkModeBtn.classList.remove("right-[-75px]");
  darkModeBtn.classList.add("right-0");
});

document.body.addEventListener("click", (e) => {
  if (e.target.id != "darkModeBtn" && e.target.id != "parentDarkModeBtn") {
    darkModeBtn.classList.remove("right-0");
    darkModeBtn.classList.add("right-[-75px]");
  }
});

darkModeBtn.addEventListener("click", () => {
  darkBtnIcon.classList.toggle("translate-x-9");
  darkBtnIcon.classList.toggle("rotate-[270deg]");

  body.classList.toggle("dark");
  darkModeToggle();
});

function darkModeToggle() {
  if (body.classList[2] == "dark") {
    darkBtnIcon.classList.add("translate-x-9");
    darkBtnIcon.classList.add("rotate-[270deg]");
    darkBtnIcon.classList.remove("fa-regular");
    darkBtnIcon.classList.remove("fa-sun");
    darkBtnIcon.classList.add("fa-solid");
    darkBtnIcon.classList.add("fa-moon");
  } else {
    darkBtnIcon.classList.remove("fa-solid");
    darkBtnIcon.classList.remove("fa-moon");
    darkBtnIcon.classList.add("fa-regular");
    darkBtnIcon.classList.add("fa-sun");
  }
}

setTimeout(() => {
  darkModeBtn.classList.remove("right-0");
  darkModeBtn.classList.add("right-[-75px]");
}, 5000);

darkModeToggle();

let started = false;

upToTop.onclick = () => {
  document.documentElement.scrollTop = 0;
};
window.addEventListener("scroll", function () {
  if (skills.offsetTop <= window.pageYOffset + 70) {
    if (!started) {
      skillsCount.forEach((el) => startCount(el));
    }
    htmlCircle.classList.add("circle-html-skill");
    cssCircle.classList.add("circle-css-skill");
    jsCircle.classList.add("circle-js-skill");
    bootstrapCircle.classList.add("circle-bootstrap-skill");
    tailwindCircle.classList.add("circle-tailwind-skill");
    reactCircle.classList.add("circle-react-skill");
    started = true;

    upToTop.classList.add("bottom-1");
  } else {
    upToTop.classList.remove("bottom-1");
  }

  if (contactUs.offsetTop < window.pageYOffset + 70) {
    rightBarContactUs.className =
      "absolute w-48 duration-1000 md:h-full sm:h-[45%] h-[40%] shadow-xl right-0 bg-main top-0 flex items-end justify-center";
    setTimeout(() => {
      infoContactUs.className =
        "bg-neutral-700 h-3/4 z-10 text-gray-300  min-h-[200px]  relative right-0 md:w-full w-3/4 duration-1000";
    }, 1000);
    setTimeout(() => {
      infoBefore.className =
        "before:absolute before:w-10 before:h-10 before:bg-main before:top-[-20px] before:left-[-20px] before:scale-100 before:duration-1000";
      infoParent.className = "md:w-[70%] w-full md:p-10 p-3";
    }, 2000);

    setTimeout(() => {
      document.querySelectorAll(".info-text").forEach((el) => {
        el.classList.remove("hidden");
      });
      document.querySelector(".social-links").classList.remove("hidden");
      document.querySelector(".social-links").classList.add("flex");
    }, 2500);
  }
});

function startCount(el) {
  let goal = el.dataset.skill;
  let mmm = parseInt(el.textContent);
  let count = setInterval(() => {
    el.textContent = `${mmm++}%`;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 20);
}

// ------------------------------------------------------------------- Start shuffle ------------------------------------------------//
function removeActive(targetBtn, wrapper) {
  wrapper.forEach((btn) => {
    btn.classList.remove("active");
    targetBtn.classList.add("active");
  });
}

shuffleBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    removeActive(btn, shuffleBtns);
    switch (btn.dataset.cat) {
      case "Website":
        newArrayOfProjects = [];

        newArrayOfProjects = projectData.filter((el) => {
          return el.pCategory == "Website";
        });
        resetShuffleAndPagination(newArrayOfProjects);
        break;

      case "Web App":
        newArrayOfProjects = [];

        newArrayOfProjects = projectData.filter((el) => {
          return el.pCategory == "Web App";
        });
        resetShuffleAndPagination(newArrayOfProjects);
        break;

      case "challenge":
        newArrayOfProjects = [];

        newArrayOfProjects = projectData.filter((el) => {
          return el.pCategory == "challenge";
        });
        resetShuffleAndPagination(newArrayOfProjects);
        break;

      default:
        newArrayOfProjects = projectData.map((el) => {
          return el;
        });
        resetShuffleAndPagination(newArrayOfProjects);
    }
  });
});
// ------------------------------------------------------------------- End shuffle ------------------------------------------------//

// ------------------------------------------------------------------- Start Pagination of Projects Section --------------------------- //

resetShuffleAndPagination(newArrayOfProjects);

function resetShuffleAndPagination(array) {
  pageIndex = 0;
  loadItem(array);
  loadPageNav(array);
}

function loadItem(arrayOfData) {
  projectsWrapper.innerHTML = "";

  for (
    let i = pageIndex * itemPerPage;
    i < pageIndex * itemPerPage + itemPerPage;
    i++
  ) {
    if (!arrayOfData[i]) {
      break;
    }

    const item = document.createElement("div");
    item.className = `h-[176px] overflow-hidden shadow-lg group relative opacity-100 ease-in-out duration-1000 all saturate hover:grayscale ${arrayOfData[i].pCategory}`;
    item.setAttribute("data-aos", "zoom-in");
    item.innerHTML = `
      <img src="${
        arrayOfData[i].pCover
      }" class="w-full group-hover:scale-110 duration-500 ease-in h-full" alt="">
      <div class=" bg-[#000000b7] p-3  w-full h-full absolute bottom-[-200px] group-hover:bottom-0 duration-500 ease-in left-0 z-50">
        <h5 class="lg:text-xl md:text-base text-white">${
          arrayOfData[i].pName
        }</h5>
        <p class="lg:text-sm text-[12px] py-2 text-gray-200 font-light">I have used in This Project : ${arrayOfData[
          i
        ].pTools.join(", ")}</p>
        <div class="text-[12px] text-gray-200">Client : ${
          arrayOfData[i].pClient
        }</div>
        
        <div class="text-center view-projects cursor-pointer mt-3 text-gray-200" data-img=${i}>
          <i class="fa-regular fa-eye block"></i>
          <span class="text-[10px]">View Project</span>
        </div>
      </div>
    `;
    projectsWrapper.appendChild(item);
  }

  liveBtn.onmousemove = function (e) {
    const x = e.pageX - liveBtn.offsetLeft;

    liveBtn.style.setProperty("--x", x + "px");
  };

  githubBtn.onmousemove = function (e) {
    const m = e.pageX - githubBtn.offsetLeft;

    githubBtn.style.setProperty("--m", m + "px");
  };

  for (let i = 0; i < input.length; i++) {
    vaildInput(i);
  }

  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("blur", () => {
      vaildInput(i);
    });
  }

  function vaildInput(i) {
    if (input[i].value !== "") {
      console.log("not empty");
      inputPlaceHolder[i].classList.add("active");
      fromUnderLine[i].classList.add("before:w-full");
    } else {
      console.log("empty");
      inputPlaceHolder[i].classList.remove("active");
      fromUnderLine[i].classList.remove("before:w-full");
    }
  }

  contactForm.onsubmit = function () {
    let nameVaild = false;
    let numberVaild = false;
    let mailVaild = false;
    let messageVaild = false;

    if (/\w+/gi.test(userName.value)) {
      nameVaild = true;
      vaildOrNot(0, nameVaild);
    } else {
      nameVaild = false;
      vaildOrNot(0, nameVaild);
    }

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,8}$/gi.test(email.value)) {
      mailVaild = true;
      vaildOrNot(1, mailVaild);
    } else {
      mailVaild = false;
      vaildOrNot(1, mailVaild);
    }

    if (/\+?\d{10,}\d$/gi.test(phoneNumber.value)) {
      numberVaild = true;
      vaildOrNot(2, numberVaild);
    } else {
      numberVaild = false;
      vaildOrNot(2, numberVaild);
    }

    if (/\w+/gi.test(message.value)) {
      messageVaild = true;
      vaildOrNot(3, messageVaild);
    } else {
      messageVaild = false;
      vaildOrNot(3, messageVaild);
    }
    if (nameVaild && mailVaild && numberVaild && messageVaild) {
      btnText.classList.add("hidden");
      submitAnimate.classList.remove("hidden");
      let i = 0;

      let countAnimte = setInterval(() => {
        i++;
        animateCircle.style.setProperty("--animate", i);
        i == 180 ? (i = 0) : null;
      }, 7);

      setTimeout(() => {
        animateCircle.remove();
        clearInterval(countAnimte);
        doneSvg.style.strokeDashoffset = "0";
      }, 3000);

      setTimeout(() => {
        btnText.classList.remove("hidden");
        submitAnimate.classList.add("hidden");
      }, 4000);
    } else {
      return false;
    }
  };

  function vaildOrNot(index, check) {
    if (check) {
      inputPlaceHolder[index].style.color = "";
      fromUnderLine[index].classList.remove("before:bg-red-800");
      inputPlaceHolder[index].classList.remove("text-red-800");
      fromUnderLine[index].classList.add("before:bg-lime-500");
      fromUnderLine[index].classList.add("before:w-full");
    } else {
      inputPlaceHolder[index].style.color = "red";
      fromUnderLine[index].classList.remove("before:bg-lime-500");
      fromUnderLine[index].classList.add("before:bg-red-800");
      fromUnderLine[index].classList.add("before:w-full");
    }
  }

  document.querySelectorAll(".view-projects").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      projectImg.setAttribute("src", "");
      projectImg.setAttribute(
        "src",
        newArrayOfProjects[btn.dataset.img].pImgPc
      );
      liveBtn.setAttribute(
        "href",
        newArrayOfProjects[btn.dataset.img].pDemoLink
      );
      githubBtn.setAttribute(
        "href",
        newArrayOfProjects[btn.dataset.img].pGitHubLink
      );
      projectScreensBtns[0].classList.add("active");
      projectScreensBtns[1].classList.remove("active");
      projectScreensBtns[2].classList.remove("active");
      changeProjectImg(btn);
      projectsPopUp.classList.add("scale-100");
      projectsPopUp.classList.add("flex");
    });
  });
}

function loadPageNav(arraOfData) {
  nav.innerHTML = "";
  let decreaseBtn = document.createElement("i");
  let increaseBtn = document.createElement("i");

  decreaseBtn.className =
    "fa-solid fa-angles-left text-cyan-700 text-sm cursor-pointer";
  increaseBtn.className =
    "fa-solid fa-angles-right text-cyan-700 text-sm cursor-pointer";

  nav.appendChild(decreaseBtn);
  for (let i = 0; i < Math.ceil(arraOfData.length / itemPerPage); i++) {
    if (Math.ceil(arraOfData.length / itemPerPage) > 1) {
      const span = document.createElement("span");
      span.innerHTML = i + 1;
      span.className =
        "py-[5px] px-[10px] rounded-md cursor-pointer scale-125 pagation-btn";

      if (i == pageIndex) {
        span.className =
          "py-[5px] px-[10px] rounded-md cursor-pointer scale-125 pagation-btn active";
      }

      span.addEventListener("click", function (e) {
        document.documentElement.scrollTop = projectsWrapper.offsetTop - 200;
        removeActive(e.target, document.querySelectorAll("#nav span"));
        pageIndex = e.target.innerHTML - 1;

        loadItem(newArrayOfProjects);

        if (pageIndex < 1) {
          decreaseBtn.className = "hidden";
        } else {
          decreaseBtn.className =
            "fa-solid fa-angles-left text-cyan-700 text-sm cursor-pointer";
        }
        if (pageIndex == Math.ceil(arraOfData.length / itemPerPage - 1)) {
          increaseBtn.className = "hidden";
        } else {
          increaseBtn.className =
            "fa-solid fa-angles-right text-cyan-700 text-sm cursor-pointer";
        }
      });

      if (pageIndex == 0) {
        decreaseBtn.className = "hidden";
      }

      nav.appendChild(span);
    } else {
      decreaseBtn.className = "hidden";
      increaseBtn.className = "hidden";
    }
  }
  decreaseBtn.addEventListener("click", () => {
    if (pageIndex >= 1) {
      document
        .querySelectorAll(".pagation-btn")
        [pageIndex].classList.remove("active");
      pageIndex -= 1;
      document
        .querySelectorAll(".pagation-btn")
        [pageIndex].classList.add("active");
      loadItem(newArrayOfProjects);

      document.documentElement.scrollTop = projectsWrapper.offsetTop - 200;

      if (pageIndex < 1) {
        decreaseBtn.className = "hidden";
      } else {
        decreaseBtn.className =
          "fa-solid fa-angles-left text-cyan-700 text-sm cursor-pointer";
      }
      if (pageIndex == Math.ceil(arraOfData.length / itemPerPage - 1)) {
        increaseBtn.className = "hidden";
      } else {
        increaseBtn.className =
          "fa-solid fa-angles-right text-cyan-700 text-sm cursor-pointer";
      }
    } else {
      decreaseBtn.className = "hidden";
    }
  });
  increaseBtn.addEventListener("click", () => {
    if (pageIndex < Math.ceil(arraOfData.length / itemPerPage - 1)) {
      document
        .querySelectorAll(".pagation-btn")
        [pageIndex].classList.remove("active");
      pageIndex += 1;
      document
        .querySelectorAll(".pagation-btn")
        [pageIndex].classList.add("active");
      loadItem(newArrayOfProjects);
      document.documentElement.scrollTop = projectsWrapper.offsetTop - 200;
      if (pageIndex < 1) {
        decreaseBtn.className = "hidden";
      } else {
        decreaseBtn.className =
          "fa-solid fa-angles-left text-cyan-700 text-sm cursor-pointer";
      }
      if (pageIndex == Math.ceil(arraOfData.length / itemPerPage - 1)) {
        increaseBtn.className = "hidden";
      } else {
        increaseBtn.className =
          "fa-solid fa-angles-right text-cyan-700 text-sm cursor-pointer";
      }
    } else {
      increaseBtn.className = "hidden";
    }
  });

  nav.appendChild(increaseBtn);
}
// ------------------------------------------------------------------- End Pagination of Projects Section --------------------------- //

function changeProjectImg(imgSrc) {
  projectScreensBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      removeActiveFromProjectsBtns(el);
      removeActiveFromProjectsBtns(el);
      console.log(el);
      if (el.id == "largeScreen") {
        projectImg.setAttribute("src", "");
        projectImg.setAttribute(
          "src",
          newArrayOfProjects[imgSrc.dataset.img].pImgPc
        );
      } else if (el.id == "mediumScreen") {
        projectImg.setAttribute("src", "");
        projectImg.setAttribute(
          "src",
          newArrayOfProjects[imgSrc.dataset.img].pImgTablet
        );
      } else if (el.id == "smallScreen") {
        projectImg.setAttribute("src", "");
        projectImg.setAttribute(
          "src",
          newArrayOfProjects[imgSrc.dataset.img].pImgMobile
        );
      }
    });
  });
}

projectCloseBtn.addEventListener("click", () => {
  projectsPopUp.classList.remove("duration-1000");
  projectsPopUp.classList.remove("scale-100");
  document.documentElement.scrollTop = projectsWrapper.offsetTop - 200;
});

function removeActiveFromProjectsBtns(targetBtn) {
  projectScreensBtns.forEach((btn) => {
    btn.classList.remove("active");

    targetBtn.classList.add("active");
  });
}
