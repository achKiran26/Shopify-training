export const domExcercise = () => {
  const globalDeclarations={
     value1: 'js-value1',
     value2: 'js-value2',
     error: 'js-error',
     sumit: 'js-submit',
     finalResult: 'js-result',
  }
  const calculationFunctions = [
    //add
    {
      name: 'add',
      container: 'js-op_block-add',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun(value1, value2){
        return parseInt(value1) + parseInt(value2)
      }
    },
    //sub
    {
      name: 'sub',
      container: 'js-op_block-sub',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1, value2) {
        return parseInt(value1) - parseInt(value2)
      }
    },
    // mul
    {
      name: 'mul',
      container: 'js-op_block-mul',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1, value2){ 
        return parseInt(value1) * parseInt(value2)
      }
    },
    //div
    {
      name: 'div',
      container: 'js-op_block-div',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1, value2) { 
        return value1 / value2
      }
    },
    //random
    {
      name: 'ran',
      container: 'js-op_block-ran',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1, value2) { 
        
        return Math.floor(Math.random() * (value2 - value1 + 1) + value1)
      }
    },
    //count str
    {
      name: 'str',
      container: 'js-op_block-str',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1) { 
        return value1.length
    }
    },
    //concat
    {
      name: 'con',
      container: 'js-op_block-con',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1, value2) { 
        return value1.concat(value2)
    }
    },
    //check of str
    {
      name: 'rep',
      container: 'js-op_block-rep',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1, value2) { 
        if (value1.includes(value2)) {
          return true
        }else{
          // container.classList.remove("success")
          // container.classList.add("error")
          return false
        } 
      }
    },
    //check for str count
    {
      name: 'repC',
      container: 'js-op_block-repC',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1, value2) { 
        const reg = new RegExp(value2,"g")
          const count = (value1.match(reg)|| []).length
          return count
      }
    },
    //reverse
    {
      name: 'rev',
      container: 'js-op_block-revStr',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1) { 
        const arr = value1.split("")
        const rev = arr.reverse()
        const addChar = rev.join("")
        return addChar
    }
    },
    //email validation
    {
      name: 'em',
      container: 'js-op_block-em',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      value2:globalDeclarations.value2,
      finalResult: globalDeclarations.finalResult,
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
      name: 'strCheck',
      container: 'js-op_block-strCheck',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      finalResult: globalDeclarations.finalResult,
      outputFun (value1) { 
        const errorCheck = document.querySelector(".js-result-strCheckerror")
        const errorArr =[]
        if (value1.length < 10) {
          errorCheck.innerHTML="<li>string needs to be at least 10 characters long</li>"
          const result = errorCheck.innerHTML
          errorArr.push(result)
        } 
        if(!/[A-Z]/.test(value1)){
          errorCheck.innerHTML="<li>string needs to include at least one uppercase character</li>"
          const result = errorCheck.innerHTML
          errorArr.push(result)
        }
        if(!/[a-z]/.test(value1)){
          errorCheck.innerHTML="<li>string needs to include at least on lowercase character</li>"
          const result = errorCheck.innerHTML
          errorArr.push(result)
        }
        if(!/\d/.test(value1)){
          errorCheck.innerHTML="<li>string needs to include at least one number</li>"
          const result = errorCheck.innerHTML
          errorArr.push(result)
        }
        else{
          return true
        }
        errorCheck.innerHTML=""
        return errorArr
      }
    },
    //show time
    {
      name: 'time',
      container: 'js-op_block-time',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      finalResult: globalDeclarations.finalResult,
      outputFun () { 
        const timeValue = new Date()
        const hours = timeValue.getHours()
        const minutes = timeValue.getMinutes()
        const seconds = timeValue.getSeconds()
        const format = (hours <10?'0'+hours:hours)+":"+
        (minutes <10?'0'+minutes:minutes)+":"+(seconds <10?'0'+seconds:seconds)
        return format
      }
    },
    //add input fields
    {
      name: 'newField',
      container: 'js-op_block-newField',
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      value1:globalDeclarations.value1,
      finalResult: globalDeclarations.finalResult,
      test(){
        const button = document.querySelector('.js-addButton')
        button.addEventListener('click',()=>{
          console.log('hel')
        })
      },
      outputFun () { 
        test()
        return true
      }
    },
     //time,entry,name
     {
      name: 'TEN',
      container: 'js-op_block-TEN',  
      value1: globalDeclarations.value1,
      value2: globalDeclarations.value2, 
      error: globalDeclarations.error,
      sumit: globalDeclarations.sumit,
      finalResult: globalDeclarations.finalResult,
      outputFun(){
        return true
      }
    },
  ]
  //creating looping to target each modules
  calculationFunctions.forEach(res => {
    const container = document.querySelector(`.${res.container}`)
    const parent = document.getElementById(`${res.name}`)
    const submit = parent.querySelector(`.${res.sumit}`)
    const value1 = parent.querySelector(`.${res.value1}`)
    const value2 = parent.querySelector(`.${res.value2}`)
    const result = parent.querySelector(`.${res.finalResult}`)
    const error = parent.querySelector(`.${res.error}`)
    
    submit.addEventListener("click", () => {
      if (`${res.name}`==="newField") {
        
       
      }
      //for name,entry and time task
      if (`${res.name}`==="TEN") {
        const num1 = value1.value
        const num2 = value2.value
        const table = document.querySelector('.table-block')
        const now = new Date()
        const time = now.toLocaleTimeString() 
        const row = document.createElement('tr')
        const errorEmptyFields = "Provide input for both the fields"
        row.innerHTML = `<td>${time}</td><td>${num1}</td><td>${num2}</td>`
        table.appendChild(row);
        if (errorHandleInputs(num1,num2,error,container,result)) {
          return
        }
        if(num1 == "" || num2 == ""){
          error.innerHTML = errorEmptyFields
          container.classList.remove('success')
          container.classList.add('errors')
          row.remove()
        }
        return value1.value,value2.value
      }
      //end
      if (value1 && value2) {
        const num1 = value1.value || 0 
        const num2 = value2.value || 0 
        if (errorHandleInputs(num1,num2,error,container,result)) {
          return
        }
        result.innerHTML = res.outputFun(num1,num2)
      }
      else if (value1) {
        const num1 = value1.value || ""
        if (errorHandleInput(num1,error,container,result)) {
          return
        }
        result.innerHTML = res.outputFun(num1)
      }
      else{
        result.innerHTML = res.outputFun()
        successState(container)
      }
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
  function hideBlock(res) {
    res.classList.add('none')
    res.classList.remove('block')
  }
  function showBlock(res) {
    res.classList.add('block')
    res.classList.remove('none')
  }
  function errorHandleInputs(num1, num2, error, container, res) {
    const errorEmptyFields = "Please input both numbers"
    if (num1 == "" && num2 == "") {
      error.innerHTML = errorEmptyFields
      res.classList.remove('block')
      res.classList.add('none')
      errorState(container)
      return true
    }
    if (num1 == "" || num2 == "") {
      successState(container)
    }
    if (num1 && num2) {
      successState(container)
    }
    if (typeof num1 === 'string' > typeof num2 === 'string') {
      errorState(container)
      error.innerHTML="Not valid"
      num1.value=''
      num2.value='' 
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
      num1=''
      num2='' 
    }
    res.classList.add('block')
    error.innerHTML = "Result"
    return false
  }
  function errorHandleInput(num1, error, container, res) {
    const errorEmptyField2 = "Input field cannot be empty"
    if(num1 == ""){
      error.textContent = errorEmptyField2
      errorState(container)
      hideBlock(res)
      return true
    }
    error.innerHTML="Result"
    showBlock(res)
    successState(container)
    return false
  }
}
domExcercise()
  
  