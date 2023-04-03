export const domExcercise = () => {
  const value1 = document.querySelector('.js-value1')
  const value2 = document.querySelector('.js-value2')
  const addSubmit = document.querySelector('.js-submit-add')
  const subSubmit = document.querySelector('.js-submit-sub')
  const mulSubmit = document.querySelector('.js-submit-mul')
  const divSubmit = document.querySelector('.js-submit-div')
  const ranSubmit = document.querySelector('.js-submit-ran')
  const addResult = document.querySelector('.js-result-add')
  const subResult = document.querySelector('.js-result-sub')
  const mulResult = document.querySelector('.js-result-mul')
  const divResult = document.querySelector('.js-result-div')
  const ranResult = document.querySelector('.js-result-ran')
  const input = document.querySelector('h5')
  const error = document.querySelector('.js-error')
  const container = document.querySelector('.js-op_block')

  function toggleClass() {
    container.classList.remove('success')
    container.classList.add('error')
  }

  function errorHandle(){
    const errorEmptyFields = "Both inputs cannot be empty."
    const errorEmptyField1 = "Please add the input value for 1st input field"
    const errorEmptyField2 = "Please add the input value for 2nd input field"
    

    if (value1.value === 0 && value2.value === 0) {
      error.innerText = errorEmptyFields
      input.innerText = ""
      toggleClass()
      return
    }
    else if (!Number.isInteger(value1.value) || !Number.isInteger(value2.value)) {
      error.innerText = errorEmptyFields
      input.innerText = ""
      toggleClass()
      return;
    }
    else if(value1.value == ''){
      error.textContent = errorEmptyField1
      toggleClass()
    }else if(value2.value == ''){
      error.textContent = errorEmptyField2
      toggleClass()
    }else if(value1.value && value2.value){
      error.textContent = "Result"
      container.classList.remove('error')
      container.classList.add('success')
    }
  }
  // exe
  addSubmit.addEventListener("click", () => {
    const errorForm = addSubmit.parentElement
    console.log(errorForm)
    const selector = errorForm.querySelector('.js-error')
    let result = add(value1.value,value2.value);
    console.log(result)
    addResult.innerHTML = result
    errorHandle(selector)
  })

  subSubmit.addEventListener("click", () => {
    const errorForm = subSubmit.parentElement
    const selector = errorForm.querySelector('.js-error')
    let result = subtract(value1.value, value2.value)
    subResult.innerHTML = result
    errorHandle(selector)
  })

  // mulSubmit.addEventListener("click", () => {
  //   errHandle()
  //   let result = multiply(value1.value, value2.value)
  //   mulResult.innerHTML = result
  // })

  // divSubmit.addEventListener("click", () => {
  //   errHandle()
  //   let result = divide(value1.value, value2.value)
  //   divResult.innerHTML = result
  // })

  // ranSubmit.addEventListener("click", () => {
  //   errHandle()
  //   let result = random(value1.value, value2.value)
  //   console.log(result)
  //   ranResult.innerHTML = result
  // })
  // Logic
  const add = (value1,value2) => {
    return parseInt(value1)+parseInt(value2)
  }

  const subtract = (value1,value2) => {
    return parseInt(value1)-parseInt(value2)
  }

  const multiply = (value1,value2) => {
    return parseInt(value1)*parseInt(value2)
  }

  const divide = (value1,value2) => {
    return parseInt(value1)/parseInt(value2)
  }

  const random = (value1,value2) => {
    return Math.floor(Math.random() * value1 + value2) + 1
  }

  const charStr = (value1) => {
    return value1.length
  }
}
domExcercise()

