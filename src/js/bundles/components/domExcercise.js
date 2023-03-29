/* eslint-disable */
export const domExcercise = () => {
    const value1 = document.querySelector('.js-value1')
    const value2 = document.querySelector('.js-value2')
    const submit = document.querySelector('.js-submit')
    const result = document.querySelector('.js-result')
    const error = document.querySelector('.js-error')
    const container = document.querySelector('.js-op_block')

    // //func to add 2 num
    submit.addEventListener('click',()=>{
      let msg = "Please add the input value"
      const sum = parseInt(value1.value)+parseInt(value2.value)
      
      if(value1.value == '' || value2.value == ''){
        error.textContent = msg
        error.style.backgroundColor = "red"
        error.style.color = "white"
      }else{
        container.style.backgroundColor = "green"
        error.style.color = "white"
      }
      result.innerHTML = sum
    })

    
}
  
domExcercise()