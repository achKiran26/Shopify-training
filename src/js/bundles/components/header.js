/* eslint-disable */
export const header = () => {
    const header = document.querySelector(".header__hamburger-block");
    const overlay = document.querySelector(".header__nav-overlay");
  
    // switching classess
    header.addEventListener('click', (e) => {
        document.querySelector('.header').classList.toggle('nav-active')
      })
    // remove class overlay
    overlay.addEventListener('click', (e) => {
        document.querySelector('.header').classList.remove('nav-active')
      })
}

header()