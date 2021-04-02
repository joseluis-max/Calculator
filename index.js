class Calculator{
  constructor(){
    
  }
  sum(a , b){

  }
  subtraction(a ,b){

  }
  division(d, n){
    
  }
  multiplication(a, b){

  }
  module(num , n){

  }
}


document.addEventListener('DOMContentLoaded', ()=> {
  const calculator = new Calculator();

const display = document.querySelector('.calculator__display');
const number = document.querySelectorAll('.number');
const ac = document.getElementById('ac');
const c = document.getElementById('c');
c.addEventListener('click', (ev) => {
  display.value = ''
})
ac.addEventListener('click', (ev) => {
   let str = display.value;
   str = str.split('');
   str.pop()
   display.value = str.join('')
   console.log(str)
})
number.forEach( button => {
  button.addEventListener("click", (ev)=>{
    setValueInDisplay(ev.target.value)
  })
});
function setValueInDisplay( value ){
  display.value += value
}

})








