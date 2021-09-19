const logo = document.querySelector(".logo");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const input = document.querySelector(".input-section");

const tl = new TimelineLite();

if (window.innerWidth >= 768) {
  tl.fromTo(".left", 0.5, { width: "50%" }, { width: "65%" })
    .fromTo(
      ".right",
      0.5,
      {
        opacity: 0,
        width: "50%",
      },
      {
        opacity: 1,
        width: "35%",
      },
      "-=0.45"
    )
    .fromTo(
      logo,
      0.5,
      {
        opacity: 0,
        x: -20,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        x: 0,
      },
      "-=0.25"
    )
    .fromTo(
      h1,
      0.5,
      {
        opacity: 0,
        x: -20,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        x: 0,
      },
      "-=0.25"
    )
    .fromTo(
      p,
      0.5,
      {
        opacity: 0,
        x: 20,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        x: 0,
      },
      "-=0.5"
    )
    .fromTo(
      input,
      0.5,
      {
        opacity: 0,
        x: -20,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        x: 0,
      },
      "-=0.5"
    );
} else {
  tl.fromTo(
    logo,
    0.5,
    {
      opacity: 0,
      x: -10,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
    .fromTo(
      h1,
      0.5,
      {
        opacity: 0,
        y: 20,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        y: 0,
      },
      "-=0.45"
    )
    .fromTo(
      p,
      0.5,
      {
        opacity: 0,
        y: 20,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        y: 0,
      },
      "-=0.35"
    )
    .fromTo(
      input,
      0.5,
      {
        opacity: 0,
        y: 20,
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        y: 0,
      },
      "-=0.45"
    );
}
