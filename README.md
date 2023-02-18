## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot
To be updated


### Links

- Solution URL: [Click here](https://github.com/gp0710/email-signup)
- Live Site URL: [min width: 375px and min width: 1440px ONLY, sorry.](https://gp0710.github.io/email-signup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
Oof. Just when I thought that I knew much about what I needed to know about HTML/CSS, I keep coming across something new to learn. This challenge took me 3-4 days. If I could start over from scratch, I wouldn't be too concerned about margin. With flexbox and grid, I can easily position elements on a page relative to each other without worrying about having to manually adjust the alignment for each. That could have easily saved me a day of effort, and I'd have a responsive site for tablets or screens that have a min-width of 1000px. 

Unfortunately the site isn't too responsive for screens 376px < x < 1440px. I won't be fixing this for now, I'm going to let the new concepts I applied get ingrained in my mind first.

- display: grid; 
- SVG elements
- background-image: url('')
- rem 
- input text required property


### Continued development

Will be considering making the site more responsive for screens 376px < x 1439px 

### Useful resources

- [SVG positioning](https://stackoverflow.com/questions/34395930/add-icon-inside-a-search-input-tag) - How I positioned the SVG elements for submit, and for error if email isn't entered correctly.

- [Making the Arrow SVG the submit button](https://stackoverflow.com/questions/13649872/can-i-make-an-svg-image-button) - Very cool way to make SVG a pseudo-submit button. The solution has the svg enclosed in a label parent element.


- [CSS Gradient](https://css-tricks.com/css3-gradients/#:~:text=Just%20as%20you%20can%20declare,better%20for%20control%20and%20performance.) - This is a great overview on adding gradients to backgrounds!

- [selecting required input](https://www.w3schools.com/jsref/prop_text_required.asp)

- [::placeholder for email input](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)

- [regEx for Email!](https://regexr.com/3e48o)

- [email input focus outline](https://www.w3schools.com/css/css_outline_shorthand.asp)

- [more on the outline](https://stackoverflow.com/questions/1457849/how-to-remove-the-border-highlight-on-an-input-text-element)

- [CSS Grid](https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/)