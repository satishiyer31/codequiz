// When Start Quiz button is clicked Create elements in the DOM and append

// Start Timer and display 

//Load question from the array of Objects

var startQuiz = document.querySelector("#startquiz");
var quizIndex = 0;
var question = document.createElement("p");
var nextBtn = document.createElement("input");
var timeEl = document.querySelector("#timer");
var timeLeft = 100;
// var rootEl = document.querySelector("body");
var divEl = document.createElement("div");



var quizQuestions = [];
var radiobtn = [];
var choiceText= [];

quizQuestions[0] = {
    question: "What is the first index of an array?",
    choices: ["0","1","2","3"],
    answer:0,
    served:false,

};

quizQuestions[1] = {
    question: "What does the === operator do?",
    choices: ["Compares 2 values", "Compares type and value", "Assignment operator", "Its a tertiary Operator"],
    answer:1,
    served:false,
};

quizQuestions[2] = {
    question: "Which of the following expressions equates to a false?",
    choices: ["isNaN(NaN)","isNaN(undefined", "isNan(abab)", "isNaN(null)"],
    answer:3,
    served: false,
};



startQuiz.addEventListener("click", function(){

    setTime();
     question.textContent= quizQuestions[quizIndex].question;
    document.body.appendChild(question);
    document.body.appendChild(divEl);
    for (let index = 0; index < 4; index++) {
        
       
        radiobtn[index] = document.createElement("input");
        radiobtn[index].type ="radio";
        radiobtn[index].name="radioAnswer";
        radiobtn[index].id =index;
        // radiobtn.setAttribute("data-index",index);
        // document.body.appendChild(radiobtn[index]);
        divEl.appendChild(radiobtn[index]);
    
        choiceText[index] = document.createElement("label");
        // choiceText[index].textContent= quizQuestions[quizIndex].choices[index];
        // document.body.appendChild(choiceText[index]);
        divEl.appendChild(choiceText[index]);
        startQuiz.style.visibility="hidden";
    
        
    }
   
    
    nextBtn.type ="button";
    nextBtn.value = "Confirm & Next";
    document.body.appendChild(nextBtn);

    


    getQuizQuestionandChoices();




});

// radiobtn.addEventListener("click", function(){
//     console.log("Hello there" + radiobtn.index);
// })

divEl.addEventListener("click", function(event){
 
 if ((event.target.matches("input")) && (event.target.id==quizQuestions[quizIndex].answer )){
     console.log("Correct Answer");
 }
else {
    console.log("Wrong Answer");
    timeLeft -=10;
}

 
// console.log(event.target.id);

})

function getQuizQuestionandChoices() {

question.textContent= quizQuestions[quizIndex].question;

for (let i = 0; i < quizQuestions[quizIndex].choices.length; i++) {
    
    choiceText[i].textContent= quizQuestions[quizIndex].choices[i];
    radiobtn[i].checked =false;
}

}

nextBtn.addEventListener("click", function(){
    // console.log(quizQuestions.length)
    
    if (nextBtn.getAttribute("data-state")=="done")
    {
        displayscores();
        


    }
    
    if (quizIndex < (quizQuestions.length -1)) {
        quizIndex ++;
        getQuizQuestionandChoices();
        
    }
    if (quizIndex== (quizQuestions.length-1)) {
        nextBtn.value ="Finish";
        nextBtn.setAttribute("data-state","done");
    }
    
    

})

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
  
      if(timeLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
  
  // Function to create and append colorsplosion image
  function sendMessage() {
    timeEl.textContent = "Time is up";
    
  
  }

  function displayscores() {

        console.log ("Thanks for taking thq quiz");
        nextBtn.style.visibility="hidden";
        var score = document.createElement("p");
        score.textContent = "Your score is: " + timeLeft;
        document.body.appendChild (score);
        timeLeft = 0;
  }
  
  

