let input = document.querySelector('.input');
let power = "";
let modal = document.querySelector('.modal'),
    frame = document.querySelector('.hide'),
    history = [];


function insert(num) {
    if  (input.textContent == 0) {
        input.textContent = "";
        input.textContent+= num;
    } else
        input.textContent+= num;
}

function clean() {
    input.textContent = "0";
    power = "";
}

function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

      
function percent() {
    input.textContent = eval(input.textContent)/100;
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
    input.textContent = factorial(+eval(input.textContent));
}

document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
        console.log('Градусы')
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
        console.log('Радианы')
    }
});

function f(name) {
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }        
    }
    if (name == 'cos') {
        if(document.querySelector('.type').textContent == "deg") {
           
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        } 
    }
    if (name == 'tan') {
        if(document.querySelector('.type').textContent == "deg") {
          
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }  
    }
    if (name == 'ctg') {
        if(document.querySelector('.type').textContent == "deg") {
            
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
        } 
    }
}

function operation(name) {
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}

function equal() {
    
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
    if(input.textContent == "NaN" || input.textContent == Infinity){
        input.textContent = "ошибка";
      }
    if(history.length > 3){
        history.shift();
      }
           
            frame.innerHTML = '';
            frame.innerHTML = '<p> 1: ' + history[2] + '</p>' +
                                '<p> 2: ' + history[1] + '</p>' +
                                '<p> 3: ' + history[0] + '</p>';
            if (history[2] == null && history[1] != null){
                frame.innerHTML = '<p> 1: ' + history[1] + '</p>' +
                                '<p> 2: ' + history[0] + '</p>';
            }else if (history[1] == null && history[0] != null){
                frame.innerHTML = '<p> 1: ' + history[0] + '</p>';
            }
   

}
modal.addEventListener('click', () => {
    frame.classList.toggle('show');
  })