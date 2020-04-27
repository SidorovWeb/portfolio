import { TimelineMax, Expo, Power2, TweenMax } from "gsap";
import NormalizeWheel from "./normwheel";
import { getItemByIndex, getWidth, windowHeight } from "./utils";

const scrollo = function() {
  var controlMQ = true;
  let currentS = 0;
  let lastS = 0;
  let lastTime = 0;
  let liheight = 47;
  let factor = windowHeight() / liheight;
  const mainPage = document.querySelector(".main-page");
  const scroller = document.querySelector(".main-scroller");
  let maxScroll = (scroller.scrollHeight - windowHeight()) / factor;
  const timeout = 1700;
  const currentTheme = localStorage.getItem("theme");
  let currentColor = currentTheme === "dark" ? "#000" : "#fff";

  // pointer
  let pointer = document.querySelector(".pointer ");
  let textNavs1 = document.querySelectorAll(".nav__item-text--1");
  let textNavs = document.querySelectorAll(".nav__item-text--2");
  let isScrolling = false;
  // about
  let about = document.querySelector(".about");
  let aboutTitleW = document.querySelectorAll(".about__title .word");
  let aboutText = document.querySelectorAll(".about__text");
  let aboutImg = document.querySelector(".about__photo");
  // portfolio
  let portfolio = document.querySelector(".portfolio");
  let portfolioTitleW = document.querySelectorAll(".portfolio__title .word");
  let portfolioImgWrapper = document.querySelectorAll(
    ".portfolio__img-wrapper"
  );
  let portfolioSvgWrapper = document.querySelectorAll(
    ".portfolio__svg-wrapper"
  );
  let portfolioLink = document.querySelectorAll(".portfolio__link");
  let portfolioBtn = document.querySelectorAll(".portfolio__btn");
  // skills
  let skills = document.querySelector(".skills");
  let skillsTitleW = document.querySelectorAll(".skills__title .word");
  let skillsTags = document.querySelectorAll(".skills__tags");
  let skillsText = document.querySelectorAll(".skills__text");
  // contacts
  let contacts = document.querySelector(".contacts");
  let contactsTitleW = document.querySelectorAll(".contacts__title .word");
  let contactsText = document.querySelectorAll(".contacts__text");
  let contactsForm = document.querySelectorAll(".contacts__form-wrapper");
  //social
  let tags = document.querySelectorAll(".tag");

  // TimelineMax
  // 	about
  let aboutTimeline = new TimelineMax({ paused: true });
  aboutTimeline
    .set(aboutTitleW, { yPercent: 115 })
    .set(aboutText, { autoAlpha: 0 })
    .staggerTo(aboutTitleW, 0.6, { yPercent: 0, ease: Expo.inOut }, 0.5)
    .to(aboutText, 0.7, { autoAlpha: 1, ease: Power2.inOut }, "about")
    .to(aboutImg, 0.7, { autoAlpha: 1, ease: Power2.inOut }, "about");
  // portfolio
  let playPortfolio = new TimelineMax({ paused: true });
  playPortfolio
    .set(portfolioBtn, { yPercent: 0, autoAlpha: 1 })
    .set(portfolioTitleW, { yPercent: 115 })
    .set([portfolioImgWrapper, portfolioLink, portfolioSvgWrapper], {
      autoAlpha: 0
    })
    .staggerTo(portfolioTitleW, 0.6, { yPercent: 0, ease: Expo.inOut }, 0.5)
    .to(
      [portfolioImgWrapper, portfolioLink, portfolioSvgWrapper],
      0.7,
      { autoAlpha: 1, yPercent: 0, ease: Power2.inOut },
      "portfolio"
    );

  // skills
  let playSkills = new TimelineMax({ paused: true });
  playSkills
    .set(skillsTitleW, { yPercent: 115 })
    .set([skillsTags, skillsText], { autoAlpha: 0 })
    .staggerTo(skillsTitleW, 0.6, { yPercent: 0, ease: Expo.inOut }, 0.5)
    .to([skillsTags, skillsText], 0.7, { autoAlpha: 1, ease: Power2.inOut });

  // contacts
  let playcontacts = new TimelineMax({ paused: true });
  playcontacts
    .set(contactsTitleW, { yPercent: 115 })
    .set([contactsForm, contactsText], { autoAlpha: 0 })
    .staggerTo(contactsTitleW, 0.6, { yPercent: 0, ease: Expo.inOut }, 0.5)
    .to([contactsForm, contactsText], 0.7, {
      autoAlpha: 1,
      ease: Power2.inOut
    });

  function toggleSwitch() {
    const toggleSwitch = document.querySelector('.tgl[type="checkbox"]');

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        currentColor = "#fff";
        textNavs1.forEach(element => {
          element.style.color = currentColor;
        });
      } else {
        document.documentElement.setAttribute("data-theme", "light");

        currentColor = "#000";
        textNavs1.forEach(element => {
          element.style.color = currentColor;
        });
      }
    }
    toggleSwitch.addEventListener("change", switchTheme, false);
  }
  toggleSwitch();

  function Velocity(e) {
    if (isScrolling) {
      let speed = (currentS - lastS) / (e - lastTime);
      if (speed < -5) speed = -5;
      if (speed > 5) speed = 5;
      lastTime = e;
      lastS = currentS;
    }
    window.requestAnimationFrame(Velocity);
  }

  Velocity();

  function gotoClosest() {
    let closest = Math.round((factor * currentS) / windowHeight());
    goto(closest);
  }

  function goto(index) {
    let item = getItemByIndex(textNavs, index);

    aboutTimeline
      .pause()
      .seek(0)
      .kill();
    playPortfolio
      .pause()
      .seek(0)
      .kill();
    playSkills
      .pause()
      .seek(0)
      .kill();
    playcontacts
      .pause()
      .seek(0)
      .kill();

    about.classList.remove("active-scroller-section");
    portfolio.classList.remove("active-scroller-section");
    skills.classList.remove("active-scroller-section");
    contacts.classList.remove("active-scroller-section");

    TweenMax.set(tags, { autoAlpha: 0 });
    TweenMax.set(textNavs, { clip: "rect(0px 0px 0px 0px)" });
    TweenMax.to(pointer, 0.2, { y: liheight * index });
    TweenMax.fromTo(
      item,
      0.7,
      {
        zIndex: 2,
        clip: `rect(0px 0px ${item.offsetHeight}px 0px)`,
        delay: 0.2
      },
      {
        color: "#FF6666",
        clip: `rect(0px ${getWidth(item) + 30}px ${item.offsetHeight}px 0px)`
      },
      "pointer"
    );
    currentS = liheight * index;

    TweenMax.set(scroller, {
      y: -liheight * index * factor,
      onComplete: function() {
        if (index == 0) {
          about.classList.add("active-scroller-section");
          aboutTimeline.play();
        }
        if (index == 1) {
          portfolio.classList.add("active-scroller-section");
          playPortfolio.restart();
        }
        if (index == 2) {
          skills.classList.add("active-scroller-section");
          playSkills.restart();
        }
        if (index == 3) {
          contacts.classList.add("active-scroller-section");
          playcontacts.restart();
        }
        isScrolling = false;
        TweenMax.to(tags, 1, {
          autoAlpha: 1,
          delay: 1.3,
          ease: Power2.inOut
        });
      }
    });
  }

  function reverseAnimation() {
    aboutTimeline.pause();
    playPortfolio.pause();
    playSkills.pause();
    playcontacts.pause();

    TweenMax.to(tags, 0.2, {
      autoAlpha: 0,
      overwrite: 5,
      ease: Power2.inOut
    });
    TweenMax.to(textNavs, 0.7, {
      zIndex: 2,
      clip: `rect(0px 0px ${textNavs[0].offsetHeight}px 0px)`
    });

    if (about.classList.contains("active-scroller-section")) {
      TweenMax.to(aboutText, 0.7, { autoAlpha: 0, ease: Power2.inOut });
      TweenMax.to(aboutImg, 0.7, { autoAlpha: 0, ease: Power2.inOut });
      TweenMax.staggerTo(
        aboutTitleW,
        0.6,
        { delay: 1, yPercent: 115, ease: Expo.inOut },
        0.5
      );
    }
    if (portfolio.classList.contains("active-scroller-section")) {
      TweenMax.to([portfolioImgWrapper, portfolioBtn], 0.7, {
        autoAlpha: 0,
        ease: Power2.inOut,
        onComplete: function() {
          TweenMax.staggerTo(
            portfolioTitleW,
            0.6,
            { yPercent: 115, ease: Expo.inOut },
            0.5
          );
        }
      });
    }
    if (skills.classList.contains("active-scroller-section")) {
      TweenMax.to([skillsTags, skillsText], 0.7, {
        autoAlpha: 0,
        ease: Power2.inOut
      });
      TweenMax.staggerTo(
        skillsTitleW,
        0.6,
        { delay: 1, yPercent: 115, ease: Expo.inOut },
        0.5
      );
    }
    if (contacts.classList.contains("active-scroller-section")) {
      TweenMax.to([contactsForm, contactsText], 0.7, {
        autoAlpha: 0,
        ease: Power2.inOut
      });
      TweenMax.staggerTo(
        contactsTitleW,
        0.6,
        { delay: 1, yPercent: 115, ease: Expo.inOut },
        0.5
      );
    }
  }

  function clickToElement() {
    [].forEach.call(document.querySelectorAll(".nav__item-text--1"), function(
      el,
      index
    ) {
      el.addEventListener(
        "click",
        function() {
          if (
            controlMQ &&
            !window.matchMedia("screen and (max-width: 1024px)").matches
          ) {
            reverseAnimation();

            setTimeout(() => {
              goto(index);
            }, timeout);
          }
        },
        false
      );
    });
  }
  clickToElement();

  let scrollStop = function(callback) {
    if (!callback || typeof callback !== "function") return;
    let isScrolling;
    function ListenerScrollStop(event) {
      if (
        controlMQ &&
        !window.matchMedia("screen and (max-width: 1024px)").matches &&
        mainPage
      ) {
        if (!isScrolling) isScrolling = true;
        let norm = NormalizeWheel(event);
        currentS += norm.spinY * 50;

        if (currentS < 0) currentS = 0;
        if (currentS > maxScroll) currentS = maxScroll;

        // защита от резкого пальца
        if (
          parseInt(Number(norm.pixelY)) > 250 ||
          parseInt(Number(norm.pixelY)) < -250
        ) {
          return false;
        } else {
          TweenMax.to(pointer, 0.2, { y: currentS, ease: Power2.inOut });
        }

        if (
          portfolio.classList.contains("active-scroller-section") &&
          currentS == 0
        )
          currentS = 1;
        if (
          about.classList.contains("active-scroller-section") &&
          currentS == 0
        )
          return false;
        if (
          contacts.classList.contains("active-scroller-section") &&
          currentS == maxScroll
        )
          return false;

        reverseAnimation();

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(function() {
          callback();
        }, 2000);
      }
    }

    window.addEventListener("wheel", ListenerScrollStop, { passive: false });
  };

  scrollStop(function() {
    //Callback
    gotoClosest();
    isScrolling = false;
  });

  window.addEventListener("resize", resize, false);

  function resize() {
    factor = windowHeight() / liheight;
    maxScroll = (scroller.scrollHeight - windowHeight()) / factor;
    var mql = window.matchMedia("screen and (max-width: 1024px)").matches;
    var mql2 = window.matchMedia("screen and (min-width: 1025px)").matches;
    if (mql) {
      controlMQ = false;
      if (!TweenMax.isTweening()) {
        TweenMax.to(
          [
            aboutTitleW,
            portfolioTitleW,
            skillsTitleW,
            contactsTitleW,
            aboutText,
            aboutImg,
            portfolioBtn,
            portfolioSvgWrapper,
            portfolioLink,
            skillsTags,
            skillsText,
            contactsForm,
            contactsText,
            portfolioImgWrapper
          ],
          1,
          { autoAlpha: 1, visibility: "visible", yPercent: 0, xPercent: 0 }
        );
      }
    }
    if (mql2) {
      controlMQ = true;
    }
  }
};

export default scrollo;
