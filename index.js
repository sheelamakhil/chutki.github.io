const num1 = Math.ceil(Math.random()*1000)
const num2 = Math.ceil(Math.random()*100)

const questionEl = document.
getElementById("question");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

const inputEl = document.getElementById("input")

if(!score){
  score = 0;
}

scoreEl.innerText = `score:${score}`

questionEl.innerText = `what is ${num1} Multiply by ${num2} ?`

const correctAns = num1 * num2;

formEl.addEventListener("submit" , ()=>{
        const userAns = +inputEl.value 
        if(userAns === correctAns) {
            score++;
             updateLocalStorage()
        }
        else {
            score--;
             updateLocalStorage()
           

        }
        

});


function updateLocalStorage(){
   localStorage.setItem("score", JSON.stringify(score))
}
                  
