import { TimelineMax, Power1 } from "gsap"

export default function cursor() {
  if (process.browser) {
    const cursor = document.querySelector(".cursor")
    const links = document.querySelectorAll("a")
    const buttons = document.querySelectorAll("button")
    const tglBtns = document.querySelectorAll(".tgl-btn")
    const navItems = document.querySelectorAll(".nav__item-text--1")
    const radioBtns = document.querySelectorAll(".radio-line__label")
    const flags = document.querySelectorAll(".header__flags span")
    const arrayLinks = [
      ...buttons,
      ...links,
      ...navItems,
      ...radioBtns,
      ...tglBtns,
      ...flags
    ]

    let tl = new TimelineMax({
      paused: true
    })

    tl.fromTo(
      cursor,
      0.4,
      {
        autoAlpha: 1,
        scale: 1,
        overwrite: 5
      },
      {
        autoAlpha: 0,
        scale: 2.5,
        ease: Power1.easeOut
      }
    )

    tl.to(cursor, 0.2, {
      delay: 0.2,
      autoAlpha: 0.5,
      scale: 1,
      ease: Power1.easeOut
    })

    document.addEventListener("mousemove", e => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 12.5) + "px; left: " + (e.pageX - 12.5) + "px;"
      )
    })

    document.addEventListener("click", () => {
      cursor.classList.remove("cursor-trans")
      cursor.classList.remove("cursor-hover")
      tl.restart()
    })

    arrayLinks.forEach(function(el) {
      if (!el) {
        return false
      }

      el.addEventListener("mouseover", function() {
        cursor.classList.remove("cursor-trans")
        cursor.classList.add("cursor-hover")
      })

      el.addEventListener("mouseout", function() {
        cursor.classList.add("cursor-trans")
        cursor.classList.remove("cursor-hover")
      })
    })
  }
}
