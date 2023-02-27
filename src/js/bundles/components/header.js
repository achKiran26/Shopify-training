/* eslint-disable */
export const header = () => {
  const navBurgerButton = document.querySelector(".header__hamburger-block");
  const overlayDiv = document.querySelector(".header__nav-overlay");
  const openCart = document.querySelector('.js-cartToggle')
  const sideDrawer = document.querySelector('.header__cart-drawer')
  const closeCart = document.querySelector('.header__cart-close')

  // switching classess
  navBurgerButton.addEventListener('click', (e) => {
      document.querySelector('.header').classList.toggle('nav-active')
    })
  // remove class overlay
  overlayDiv.addEventListener('click', (e) => {
      document.querySelector('.header').classList.remove('nav-active')
    })

  openCart.addEventListener('click', (e) => {
    // console.log('click', e.target)
    sideDrawer.style.width = "30%"
  })

  closeCart.addEventListener('click', (e) => {
    sideDrawer.style.width = "0"
  })
}



header()