# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- GSAP

### What I learned

Through this challange i wanted to add loading time animations to the page and so i learned how to do it using GSAP, i have
linked down a video tuorial by DEVED which i found to be really helpful, also got to learn very basic form input validation.

```css
input {
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  border: 2px solid var(--DesaturatedRed);
  font-family: "Josefin Sans", sans-serif;
}

input:focus {
  outline: transparent;
  border-color: black;
}

/* input field validation */

input:invalid {
  border-color: var(--SoftRed);
}

input:invalid ~ a .icon-arrow {
  display: none;
}

input:invalid ~ a .err-icon {
  display: block;
}
```

### Useful resources

- [GSAP Animation Tutorial - by Dev Ed](https://www.youtube.com/watch?v=5RyrIPCs47A&t=1294s) - Check this out for a fun and informative GSAP Tutorial

## Author

- Frontend Mentor - [@soumya495](https://www.frontendmentor.io/profile/soumya495)
