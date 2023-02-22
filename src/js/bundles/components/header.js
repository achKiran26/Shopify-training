/* eslint-disable */
export const header = () => {
    const header = document.querySelector(".header__hamburger-block");
    const overlay = document.querySelector(".header__nav-overlay");
    const openCart = document.querySelector('.js-cartToggle')
    const sideDrawer = document.querySelector('.header__cart-drawer')
    const cartClose = document.querySelector('.header__cart-close')
  
    // switching classess
    header.addEventListener('click', (e) => {
        document.querySelector('.header').classList.toggle('nav-active')
      })
    // remove class overlay
    overlay.addEventListener('click', (e) => {
        document.querySelector('.header').classList.remove('nav-active')
      })

    openCart.addEventListener('click', (e) => {
      // console.log('click', e.target)
      sideDrawer.style.width = "30%"
    })

    cartClose.addEventListener('click', (e) => {
      sideDrawer.style.width = "0"
    })
}



header()