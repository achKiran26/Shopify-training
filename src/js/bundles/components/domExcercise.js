export const domExcercise = () => {
  const addSubmit = document.querySelector('.js-submit-add')
  const subSubmit = document.querySelector('.js-submit-sub')
  const mulSubmit = document.querySelector('.js-submit-mul')
  const divSubmit = document.querySelector('.js-submit-div')
  const ranSubmit = document.querySelector('.js-submit-ran')
  const strSubmit = document.querySelector('.js-submit-str')
  const concatSubmit = document.querySelector('.js-submit-concat')
  const repeatSubmit = document.querySelector('.js-submit-repeat')
  const repeatCountSubmit = document.querySelector('.js-submit-repeatCount')
  const revStrSubmit = document.querySelector('.js-submit-revStr')
  const emailSubmit = document.querySelector('.js-submit-email')
  const strCheckSubmit = document.querySelector('.js-submit-strCheck')
  const addResult = document.querySelector('.js-result-add')
  const subResult = document.querySelector('.js-result-sub')
  const mulResult = document.querySelector('.js-result-mul')
  const divResult = document.querySelector('.js-result-div')
  const ranResult = document.querySelector('.js-result-ran')
  const strResult = document.querySelector('.js-result-str')
  const concatResult = document.querySelector('.js-result-concat')
  const repeatResult = document.querySelector('.js-result-repeat')
  const repeatCountResult = document.querySelector('.js-result-repeatCount')
  const revStrResult = document.querySelector('.js-result-revStr')
  const emailResult = document.querySelector('.js-result-email')
  const strCheckResult = document.querySelector('.js-result-strCheck')
  

  function toggleClass(container) {
    container.classList.remove('success')
    container.classList.add('error')
  }

  function errorHandleInput(num1,num2,error,container){

    const errorEmptyFields = "Enter valid input"
    const errorEmptyField2 = "Please input both numbers"
     if(num1 === "" || num2 === ""){
      num1 = 0
      num2 = 0
      error.innerHTML = errorEmptyField2
      return true
    }
    error.innerHTML="Result"
    container.classList.add('success')
    return false
  }
  function errorHandleInputs(num1,error,container){

    const errorEmptyFields = "Enter valid input"
    const errorEmptyField2 = "Please input both numbers"
     if(num1 === ""){
      error.textContent = errorEmptyField2
      return true
    }
    error.innerHTML="Result"
    container.classList.add('success')
    return false
  }
  // exe add
  addSubmit.addEventListener("click", () => {
    const add1 = document.querySelector('.js-addValue1').value
    const add2 = document.querySelector('.js-addValue2').value
    const error = document.querySelector('.js-error-add')
    const container = document.querySelector('.js-op_block-add')
    if (errorHandleInput(add1,add2,error,container)) {
      toggleClass(container)
      return
      
    }
    let result = add(add1,add2);
    addResult.innerHTML = result
  })
  //exe sub  
  subSubmit.addEventListener("click", () => {
    const sub1 = document.querySelector('.js-subValue1').value
    const sub2 = document.querySelector('.js-subValue2').value
    const error = document.querySelector('.js-error-sub')
    const container = document.querySelector('.js-op_block-sub')
    if (errorHandleInput(sub1,sub2,error,container)) {
      toggleClass(container)
      return
    } 
    let result = subtract(sub1, sub2)
    subResult.innerHTML = result
  })
  //exe mul
  mulSubmit.addEventListener("click", () => {
    const mul1 = document.querySelector('.js-mulValue1').value
    const mul2 = document.querySelector('.js-mulValue2').value
    const error = document.querySelector('.js-error-mul')
    const container = document.querySelector('.js-op_block-mul')
    if (errorHandleInput(mul1,mul2,error,container)) {
      toggleClass(container)
      return
    } 
    let result = multiply(mul1, mul2)
    mulResult.innerHTML = result
  })
  //exe div
  divSubmit.addEventListener("click", () => {
    const div1 = document.querySelector('.js-divValue1').value
    const div2 = document.querySelector('.js-divValue2').value
    const error = document.querySelector('.js-error-div')
    const container = document.querySelector('.js-op_block-div')
    if (errorHandleInput(div1,div2,error,container)) {
      toggleClass(container)
      return
    } 
    let result = divide(div1, div2)
    divResult.innerHTML = result
  })
  //exe random number
  ranSubmit.addEventListener("click", () => { 
    const ran1 = document.querySelector('.js-ranValue2').value
    const ran2 = document.querySelector('.js-ranValue2').value
    const error = document.querySelector('.js-error-ran') 
    const container = document.querySelector('.js-op_block-ran')
    if (errorHandleInput(ran1,ran2,error,container)) {
      toggleClass(container)
      return
    } 
    let result = random(ran1, ran2)
    ranResult.innerHTML = result
  })
  //count str
  strSubmit.addEventListener("click", () => { 
    const str1 = document.querySelector('.js-strValue1').value
    const trimStr = str1.trim()
    const error = document.querySelector('.js-error-str') 
    const container = document.querySelector('.js-op_block-str')
    if (errorHandleInputs(str1,error,container)) {
      toggleClass(container)
      return
    } 
    let result = charStr(trimStr)
    strResult.innerHTML = result
  })
  //concat str
  concatSubmit.addEventListener("click", () => { 
    const con1 = document.querySelector('.js-conValue1').value
    const con2 = document.querySelector('.js-conValue2').value
    const error = document.querySelector('.js-error-con') 
    const container = document.querySelector('.js-op_block-con')
    if (errorHandleInput(con1,con2,error,container)) {
      toggleClass(container)
      return
    } 
    let result = concatStr(con1, con2)
    concatResult.innerHTML = result
  })
  //repeat str
  repeatSubmit.addEventListener("click", () => {
    const rep1 = document.querySelector('.js-repValue1').value
    const rep2 = document.querySelector('.js-repValue2').value
    const error = document.querySelector('.js-error-rep')
    const container = document.querySelector('.js-op_block-rep')
    if (errorHandleInput(rep1,rep2,error,container)) {
      toggleClass(container)
      return
    } 
    let result = repeatStr(rep1, rep2)
    repeatResult.innerHTML = result
  })
  //repeat count str
  repeatCountSubmit.addEventListener("click", () => {
    const rep1 = document.querySelector('.js-repCountValue1').value
    const rep2 = document.querySelector('.js-repCountValue2').value
    let trim = rep2.trim()
    const error = document.querySelector('.js-error-repCount')
    const container = document.querySelector('.js-op_block-repC')
    if (errorHandleInput(rep1,rep2,error,container)) {
      toggleClass(container)
      return
    } 
    let result = repeatCountStr(rep1, trim)
    
    repeatCountResult.innerHTML = result
  })
  //reverse str
  revStrSubmit.addEventListener("click", () => { 
    const str1 = document.querySelector('.js-revStrValue1').value
    const trimStr = str1.trim()
    const error = document.querySelector('.js-error-revStr') 
    const container = document.querySelector('.js-op_block-rev')
    if (errorHandleInputs(str1,error,container)) {
      toggleClass(container)
      return
    } 
    let result = reverseStr(trimStr)
    console.log(result)
    revStrResult.innerHTML = result
  })
  //email validation
  emailSubmit.addEventListener("click", () => { 
    const str1 = document.querySelector('.js-emailValue1').value
    const trimStr = str1.trim()
    const error = document.querySelector('.js-error-emailVal') 
    const container = document.querySelector('.js-op_block-em')
    if (errorHandleInputs(str1,error,container)) {
      toggleClass(container)
      return
    } 
    let result = emailValidator(trimStr)
    emailResult.innerHTML = result
  })
  //String checker
  strCheckSubmit.addEventListener("click", () => { 
    const str1 = document.querySelector('.js-strCheckValue1').value
    const trimStr = str1.trim()
    const error = document.querySelector('.js-error-strCheck') 
    const container = document.querySelector('.js-op_block-check')
    if (errorHandleInputs(str1,error,container)) {
      toggleClass(container)
      return
    } 
    let result = strChecker(trimStr)
    strCheckResult.innerHTML = result
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
  const concatStr = (value1,value2) => {
    return value1.concat(value2);
  }
  const repeatStr = (value1,value2) => {
    if (value1.includes(value2)) {
      return true
    }else{
      return false
    } 
  }
  const repeatCountStr = (value1,value2) => {
    if (value1.includes(value2)) {
      return value2.length
    }
  }
  const reverseStr = (value1) => {
    const arr = value1.split("");
    const rev = arr.reverse()
    const addChar = rev.join("");
    return addChar
  }
  const emailValidator = (value1)=>{
    const regValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value1.match(regValue))
    {
      return true;
    }else{
      return false
    }
  }
  const strChecker = (value1)=>{
    if (value1.length < 10) {
      return false
    } 
    if(!/[A-Z]/.test(value1)){
      return false
    }
    if(!/[a-z]/.test(value1)){
      return false
    }
    if(!/\d/.test(value1)){
      return false
    }
    return true
  }
}
domExcercise()

