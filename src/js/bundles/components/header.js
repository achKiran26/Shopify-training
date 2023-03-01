/* eslint-disable */
export const header = () => {
  const navBurgerButton = document.querySelector(".header__hamburger-block");
  const overlayDiv = document.querySelector(".header__nav-overlay");
  const openCart = document.querySelector('.js-cartToggle')
  const sideDrawer = document.querySelector('.header__cart-drawer')
  const closeCart = document.querySelector('.header__cart-close')
  const headerSelector = document.querySelector('.header')
  const activeNav = 'nav-active'

  // switching classess
  navBurgerButton.addEventListener('click', (e) => {
    headerSelector.classList.toggle(activeNav)
  })

  // remove class overlay
  overlayDiv.addEventListener('click', (e) => {
    headerSelector.classList.remove(activeNav)
  })

  openCart.addEventListener('click', (e) => {
    sideDrawer.style.width = "30%"
  })

  closeCart.addEventListener('click', (e) => {
    sideDrawer.style.width = "0"
  })
}

header()