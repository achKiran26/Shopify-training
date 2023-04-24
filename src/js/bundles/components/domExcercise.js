export const domExcercise = () => {
  const globalDeclarations={
     value1: 'js-value1',
     value2: 'js-value2',
     error: 'js-error',
     sumit: 'js-submit',
     finalResult: 'js-result',
     listErrors:'js-result-strCheckerror',
  }
  const calculationFunctions = [
    //add
    {
      name: 'add',
      container: 'js-op_block-add',
      outputFun(value1, value2){
        return parseInt(value1) + parseInt(value2)
      }
    },
    //sub
    {
      name: 'sub',
      container: 'js-op_block-sub',
      outputFun (value1, value2) {
        return parseInt(value1) - parseInt(value2)
      }
    },
    // mul
    {
      name: 'mul',
      container: 'js-op_block-mul',
      outputFun (value1, value2){ 
       
        return parseInt(value1) * parseInt(value2)
      }
    },
    //div
    {
      name: 'div',
      container: 'js-op_block-div',
      outputFun (value1, value2) { 
        test(value1,value2)
        return value1 / value2
      }
    },
    //random
    {
      name: 'ran',
      container: 'js-op_block-ran',
      outputFun (value1, value2) {
        const blockCont =  document.querySelector('.js-op_block-ran')
        if (value1 > value2) {
          console.log('hi')
          const error = document.querySelector('.js-error') 
          error.innerHTML="Not valid"
          const result = error.innerHTML
          blockCont.classList.remove('success')
          blockCont.classList.add('error')
          return result
          
        }
        let random = Math.floor(Math.random() * (value2 - value1 + 1) + value1)
        while (random === 0) {
          random = Math.floor(Math.random() * (value2 - value1 + 1) + value1)
        }
        return random
      }
    },
    //count str
    {
      name: 'str',
      container: 'js-op_block-str',
      outputFun (value1) { 
        return value1.length
    }
    },
    //concat
    {
      name: 'con',
      container: 'js-op_block-con',
      outputFun (value1, value2) { 
        return value1.concat(value2)
    }
    },
    //check of str
    {
      name: 'rep',
      container: 'js-op_block-rep',
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
        if (errorArr.length) {
          const cont = document.querySelector('.js-op_block-strCheck')
          cont.classList.remove('success')
          cont.classList.add('errors')
        }
        return errorArr.join("")
      }
    },
    //show time
    {
      name: 'time',
      container: 'js-op_block-time',
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
      outputFun () { 
        return true
      }
    },
     //time,entry,name
     {
      name: 'TEN',
      container: 'js-op_block-TEN',
      outputFun(){
        return true
      }
    },
  ]
  //creating looping to target each modules
  calculationFunctions.forEach(res => {
    const container = document.querySelector(`.${res.container}`)
    const parent = document.getElementById(`${res.name}`)
    const submit = parent.querySelector(`.${globalDeclarations.sumit}`)
    const value1 = parent.querySelector(`.${globalDeclarations.value1}`)
    const value2 = parent.querySelector(`.${globalDeclarations.value2}`)
    const result = parent.querySelector(`.${globalDeclarations.finalResult}`)
    const error = parent.querySelector(`.${globalDeclarations.error}`)
    const listError = parent.querySelector(`.${globalDeclarations.listErrors}`)
    //for adding new i/p field dynamically
    if (`${res.name}`==="newField") {
      const addField = document.querySelector('.js-addButton')
      const inputFieldContainer = document.querySelector('.input-field_container')
      const entryList = document.querySelector('.js-entry-list')
      const form = document.querySelector('.js-form')
      
      let countValue = 1;
      addField.addEventListener('click',()=>{
        countValue++
        const createField = document.createElement('input');
        createField.type = 'text';
        createField.className = `inputResult js-value-${countValue}`;
        createField.id = `field-${countValue}`;
        inputFieldContainer.appendChild(createField)
      })
      form.addEventListener('submit',(e)=>{
        e.preventDefault()
        entryList.innerHTML = '';
        for (let i = 1; i <= countValue; i++) {
          const value1 = document.querySelector(`.js-value-${i}`)
          const result = value1.value
          const list = document.createElement('li')
          list.innerText = `field-${i} - ${result}`
          entryList.appendChild(list)
        }
      })
    }
    if (`${res.name}`!=="strCheck") {
      
    
    submit.addEventListener("click", () => {
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
        if (errorHandleInputs(num1,num2,error,container,result,row)) {
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
  }
  if (`${res.name}`==="strCheck") {
    submit.addEventListener('click',()=>{
      const num1 = value1.value || ""
      if (errorHandleInputEmail(num1,error,container,result)) {
        return
      }
      if (listError) {
        listError.innerHTML = res.outputFun(num1)
      }  
      result.style.display="none"
    })
  }
})
//error handling
function test(v1,v2){
  const blockCont =  document.querySelector('.js-op_block-mul')
  if (v1.length && v2 == '') {
    const error = document.querySelector('.js-error') 
    error.innerHTML="Not valid"
    const result = error.innerHTML
    blockCont.classList.remove('success')
    blockCont.classList.add('error')
    return result
  }
}
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
function errorHandleInputs(num1, num2, error, container, res,row) {
  const errorEmptyFields = "Please input both numbers"
  if (num1 == "" && num2 == "") {
    error.innerHTML = errorEmptyFields
    res.classList.remove('block')
    res.classList.add('none')
    errorState(container)
    row.remove()
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
  if (typeof num1 == 'string' && typeof num2 == 'string') {
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
function errorHandleInputEmail(num1, error, container, res) {
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