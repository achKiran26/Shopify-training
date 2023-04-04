export const domExcercise = () => {
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
  const error = document.querySelector('.js-error')
  const container = document.querySelector('.js-op_block')

  function toggleClass() {
    container.classList.remove('success')
    container.classList.add('error')
  }

  function errorHandle(num1,num2){

    const errorEmptyFields = "Enter valid input"
    const errorEmptyField2 = "Please input both numbers"
   
     if(num1==="" || num2===""){
      num1 = 0
      num2 = 0
      error.innerHTML = errorEmptyField2
      // res.innerText = ""
      toggleClass()
      return true
    }
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    error.innerHTML="Result"
    container.classList.add('success')
    return false
  }
  // exe add
  
  addSubmit.addEventListener("click", () => {
    const add1 = document.querySelector('.js-addValue1').value
  const add2 = document.querySelector('.js-addValue2').value
    if (errorHandle(add1,add2)) {
      return
    }
    let result = add(add1,add2);
    addResult.innerHTML = result
    error.innerHTML =""
  })
  //exe sub
  
  subSubmit.addEventListener("click", () => {
    const sub1 = document.querySelector('.js-subValue1').value
  const sub2 = document.querySelector('.js-subValue2').value
    if (errorHandle(sub1,sub2)) {
      return
    } 
    let result = subtract(sub1, sub2)
    subResult.innerHTML = result
    error.innerHTML=""
  })
  //exe mul
  const mul1 = document.querySelector('.js-mulValue1')
  const mul2 = document.querySelector('.js-mulValue2')
  mulSubmit.addEventListener("click", () => {
    
    let result = multiply(mul1.value, mul2.value)
    mulResult.innerHTML = result
  })
  //exe div
  const div1 = document.querySelector('.js-divValue1')
  const div2 = document.querySelector('.js-divValue2')
  divSubmit.addEventListener("click", () => {
    let result = divide(div1.value, div2.value)
    divResult.innerHTML = result
  })
  //exe random number
  ranSubmit.addEventListener("click", () => {  
    let result = random(ran1.value, ran1.value)
    console.log(result)
    ranResult.innerHTML = result
  })
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

