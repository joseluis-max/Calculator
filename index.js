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

  const display = document.querySelector('.calculator__display');
  const numbers = document.querySelectorAll('.number');
  const ac = document.getElementById('ac');
  const c = document.getElementById('c');
  const operations = document.querySelectorAll('.operation');
  const submit = document.getElementById('submit');

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
      x = new Number(display.value);
      y = 0;
    console.log(x,y)
  });
  operations.forEach( operation => {
    operation.addEventListener('click', ( ev ) => {
      o = operation.value;
      saveInputs(display.value)
      display.value = ''
    });
  });
  numbers.forEach( number => {
    number.addEventListener('click', ( ev )=>{
      setValueInDisplay(ev.target.value)
    });
  });

  function setValueInDisplay( value ){
    display.value += value
  };
  function saveInputs(value) {
    if( x == 0){
      x = new Number(value);
    }else{
      y = new Number(value);
    }
    console.log(x,y)
  };
  function restart() {
    display.value = ''
    x = 0;
    y = 0;
    o = 0;  
    emptyValues = false;
  };
});
//x, y, o






