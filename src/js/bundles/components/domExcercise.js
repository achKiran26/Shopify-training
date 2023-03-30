export const domExcercise = () => {
  const value1 = document.querySelector('.js-value1')
  const value2 = document.querySelector('.js-value2')
  const add = document.querySelector('.js-submit-add')
  const subtract = document.querySelector('.js-submit-sub')
  const multiply = document.querySelector('.js-submit-mul')
  const divide = document.querySelector('.js-submit-div')
  const result = document.querySelector('.js-result')
  const container = document.querySelector('.js-op_block')  

  const arithmaticOp = [add,subtract,multiply,divide]
  //exe
  arithmaticOp.forEach(e => {
    e.addEventListener('click',()=>{
    const msg = "Please add the input value"

    if(value1.value == '' || value2.value == ''){
      container.textContent = msg
      container.classList.remove('success')
      container.classList.add('error')
    }
    else if(value1.value && value2.value){
      const output = [addition(value1,value2), sub(value1,value2), mul(value1,value2), div(value1,value2)];
      result.innerHTML = output
      container.classList.remove('error')
      container.classList.add('success')
    }
    else{
      
    }
  })
})
// logic for add,sub,mul,div
  function addition(){
    return parseInt(value1.value )+parseInt(value2.value)
  }

  function sub(){
    return parseInt(value1.value)-parseInt(value2.value)
  }

  function mul(){
    return parseInt(value1.value)*parseInt(value2.value)
  }

  function div(){
    return parseInt(value1.value)/parseInt(value2.value)
  }
}
domExcercise()