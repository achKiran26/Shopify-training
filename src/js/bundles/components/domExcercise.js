
export const domExcercise = () => {
const calculationFunctions = [
  //add
  {
    name: 'add',
    container: 'js-op_block-add',
    error: 'js-error-add',
    sumit: 'js-submit-add',
    value1: 'js-addValue1',
    value2: 'js-addValue2',
    finalResult: 'js-result-add',
    outputFun(value1, value2){
      return parseInt(value1) + parseInt(value2)
    }
  },
  //sub
  {
    name: 'sub',
    container: 'js-op_block-sub',
    error: 'js-error-sub',
    sumit: 'js-submit-sub',
    value1: 'js-subValue1',
    value2: 'js-subValue2',
    finalResult: 'js-result-sub',
    outputFun (value1, value2) {
      return parseInt(value1) - parseInt(value2)
    }
  },
  // mul
  {
    name: 'mul',
    container: 'js-op_block-mul',
    error: 'js-error-mul',
    sumit: 'js-submit-mul',
    value1: 'js-mulValue1',
    value2: 'js-mulValue2',
    finalResult: 'js-result-mul',
    outputFun (value1, value2){ 
      return parseInt(value1) * parseInt(value2)
    }
  },
  //div
  {
    name: 'div',
    container: 'js-op_block-div',
    error: 'js-error-div',
    sumit: 'js-submit-div',
    value1: 'js-divValue1',
    value2: 'js-divValue2',
    finalResult: 'js-result-div',
    outputFun (value1, value2) { 
      return value1 / value2
    }
  },
  //random
  {
    name: 'ran',
    container: 'js-op_block-ran',
    error: 'js-error-ran',
    sumit: 'js-submit-ran',
    value1: 'js-ranValue1',
    value2: 'js-ranValue2',
    finalResult: 'js-result-ran',
    outputFun (value1, value2) { 
      if (value1 > value2) {
        const error = document.querySelector('.js-error-ran') 
        error.innerHTML="Not valid"
        value1=""
        value2=""
      }
      return Math.floor(Math.random() * (value2 - value1 + 1) + value1)
  }
  },
  //count str
  {
    name: 'count str',
    container: 'js-op_block-str',
    error: 'js-error-str',
    sumit: 'js-submit-str',
    value1: 'js-strValue1',
    finalResult: 'js-result-str',
    outputFun (value1) { 
      return value1.length
  }
  },
  //concat
  {
    name: 'concat',
    container: 'js-op_block-con',
    error: 'js-error-con',
    sumit: 'js-submit-con',
    value1: 'js-conValue1',
    value2: 'js-conValue2',
    finalResult: 'js-result-con',
    outputFun (value1, value2) { 
      return value1.concat(value2)
  }
  },
  //check of str
  {
    name: 'repeat',
    container: 'js-op_block-rep',
    error: 'js-error-rep',
    sumit: 'js-submit-rep',
    value1: 'js-repValue1',
    value2: 'js-repValue2',
    finalResult: 'js-result-rep',
    outputFun (value1, value2) { 
      if (value1.includes(value2)) {
        return true
      }else{
        error.classList.remove("success")
        error.classList.add("error")
        return false
      } 
    }
  },
  //check for str count
  {
    name: 'rep str count',
    container: 'js-op_block-repC',
    error: 'js-error-repC',
    sumit: 'js-submit-repC',
    value1: 'js-repCValue1',
    value2: 'js-repCValue2',
    finalResult: 'js-result-repC',
    outputFun (value1, value2) { 
      const reg = new RegExp(value2,"g")
        const count = (value1.match(reg)|| []).length
        return count
    }
  },
  //reverse
  {
    name: 'reverse',
    container: 'js-op_block-revStr',
    error: 'js-error-revStr',
    sumit: 'js-submit-revStr',
    value1: 'js-revStrValue1',
    finalResult: 'js-result-revStr',
    outputFun (value1) { 
      const arr = value1.split("")
      const rev = arr.reverse()
      const addChar = rev.join("")
      return addChar
  }
  },
  //email validation
  {
    name: 'email',
    container: 'js-op_block-em',
    error: 'js-error-em',
    sumit: 'js-submit-em',
    value1: 'js-emValue1',
    finalResult: 'js-result-em',
    outputFun (value1) { 
      const regValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      function errorState() {
        container.classList.remove("success")
        container.classList.add("error")
      }
      const container = document.querySelector('.js-op_block-em')
      if(value1.match(regValue))
      {
        return true
      }else{
        errorState()
        return false
      }
    }
  },
  //input fields validation
  {
    name: 'str check',
    container: 'js-op_block-strCheck',
    error: 'js-error-strCheck',
    sumit: 'js-submit-strCheck',
    value1: 'js-strCheckValue1',
    finalResult: 'js-result-strCheck',
    outputFun (value1) { 
      const errorCheck = document.querySelector(".js-result-strCheckerror")
      const errorArr =[]
      if (value1.length < 10) {
        errorCheck.innerHTML="<li>string needs to be at least 10 characters long</li>"
        const test = errorCheck.innerHTML
        errorArr.push(test)
      } 
      if(!/[A-Z]/.test(value1)){
        errorCheck.innerHTML="<li>string needs to include at least one uppercase character</li>"
        const test = errorCheck.innerHTML
        errorArr.push(test)
      }
      if(!/[a-z]/.test(value1)){
        errorCheck.innerHTML="<li>string needs to include at least on lowercase character</li>"
        const test = errorCheck.innerHTML
        errorArr.push(test)
      }
      if(!/\d/.test(value1)){
        errorCheck.innerHTML="<li>string needs to include at least one number</li>"
        const test = errorCheck.innerHTML
        errorArr.push(test)
      }
      errorCheck.innerHTML=""
      return errorArr
    }
  },
]
//creating looping to target each modules
calculationFunctions.forEach(res => {
  const submit = document.querySelector(`.${res.sumit}`)
  const value1 = document.querySelector(`.${res.value1}`)
  const value2 = document.querySelector(`.${res.value2}`)
  const result = document.querySelector(`.${res.finalResult}`)
  const error = document.querySelector(`.${res.error}`)
  const container = document.querySelector(`.${res.container}`)
  submit.addEventListener("click", () => {
    const num1 = value1.value || 0
    // const num2 = value2.value || 0
    if (errorHandleInputs(num1,error,container,result)) {
      return
    }
    result.innerHTML = res.outputFun(num1)
  })
})
//error handling
function errorState(container) {
  container.classList.remove('success')
  container.classList.add('error')
}
function successState(container) {
  container.classList.remove('error')
  container.classList.add('success')
}
function errorHandleInput(num1, num2, error, container, res) {
  const errorEmptyFields = "Please input both numbers"
  if (num1 == "" && num2 == "") {
    error.innerHTML = errorEmptyFields
    res.classList.remove('block')
    res.classList.toggle('none')
    errorState(container)
    return true
  }
  if (num1 == "" || num2 == "") {
    successState(container)
  }
  if (num1 && num2) {
    successState(container)
  }
  res.classList.add('block')
  error.innerHTML = "Result"
  return false
}
function errorHandleInputs(num1, error, container, res) {
  const errorEmptyField2 = "Input field cannot be empty"
      if(num1 == ""){
      error.textContent = errorEmptyField2
      errorState(container)
      res.classList.add('none')
      return true
    }
    res.classList.add('block')
    error.innerHTML="Result"
    container.classList.add('success')
    return false
  }
}
domExcercise()

