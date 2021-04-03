class Calculator{
  sum(a, b){
    return a + b
  }
  subtraction(a, b){
    return a - b;
  }
  division(d, n){
    return d/n
  }
  multiplication(a, b){
    return a * b
  }
  module(num, n){
    return num%n
  }
};


document.addEventListener('DOMContentLoaded', ()=> {
  let x = 0;
  let y = 0;
  let o = 0;
  let clear = false;
  

  const display = document.querySelector('.calculator__display');
  const numbers = document.querySelectorAll('.number');
  const ac = document.getElementById('ac');
  const c = document.getElementById('c');
  const operations = document.querySelectorAll('.operation');
  const minus = document.getElementById('minus');
  const submit = document.getElementById('submit');


  minus.addEventListener('click', ( ev ) => {
    display.value += '-'
  })
  c.addEventListener('click', restart);

  ac.addEventListener('click', ( ev ) => {
    let str = display.value;
    str = str.split('');
    str.pop()
    display.value = str.join('')
  });
  submit.addEventListener('click', ( ev ) => {
    let calculator = new Calculator();
    saveInputs(display.value)
    switch (o) {
      case "+":
        display.value = calculator.sum(x,y);
        break;
      case "-":
        display.value = calculator.subtraction(x,y);
        break;
      case "*":
        display.value = calculator.multiplication(x,y);
        break;
      case "/":
        display.value = calculator.division(x,y);
        break;
      case "%":
        display.value = calculator.module(x,y);
        break;
    }
      x = parseFloat(display.value);
      y = 0;
      clear = true;
    console.log(x,y)
  });
  operations.forEach( operation => {
    operation.addEventListener('click', ( ev ) => {
      clear = false;
      o = operation.value;
      saveInputs(display.value)
      display.value = ''
    });
  });
  numbers.forEach( number => {
    number.addEventListener('click', ( ev )=>{
      if(clear){
        restart();
      }
      setValueInDisplay(ev.target.value)
    });
  });

  function setValueInDisplay( value ){
    display.value += value
  };
  function saveInputs(value) {
    if( x == 0){
      x = parseFloat(value);
    }else{
      y = parseFloat(value);
    }
    console.log(x,y)
  };
  function restart() {
    display.value = ''
    x = 0;
    y = 0;
    o = 0;  
    clear = false;
  };
});
