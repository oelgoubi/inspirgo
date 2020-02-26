



// EXPERT Solution of the challenge 

(function() {
  // function contsructor
  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }
// adding methods to the prototype contructor ( methods are not attached to each object but they can ba called in case of need)
  Question.prototype.displayQuestion = function() {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }
// method that checks the user's answer and update the score ( the callback function == KeepScore)
  Question.prototype.checkAnswer = function(ans,callback) {
    var sc;
      if (ans === this.correct) {
          console.log('Correct answer!');
          sc=callback(true);

      } else {
          console.log('Wrong answer. Try again :)')
          sc=callback(false);
      }

      this.displayScore(sc);
  }
// method to dispkay the score 
  Question.prototype.displayScore = function(sc)
  {
    console.log('your Current score is '+sc);
    console.log('__________________________________');
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                        ['Yes', 'No'],
                        0);

  var q2 = new Question('What is the name of this course\'s teacher?',
                        ['John', 'Micheal', 'Jonas'],
                        2);

  var q3 = new Question('What does best describe coding?',
                        ['Boring', 'Hard', 'Fun', 'Tediuos'],
                        2);

  var questions = [q1, q2, q3];


  // Closure concept my 1st Use Case 
  function score(){
     var sc=0 ;
     return function(correct)
     {
       if(correct)
       {
         sc++;
       }
       return sc;
     }
  }

  // 1st Call sc -> 0 then we update the last value of sc by calling only the anonymous function 
  var keepScore = score(); 


   function nextQuestion(){

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

     if(answer!== 'exit')
     {
       // check the Answer and update the score 
      questions[n].checkAnswer(parseInt(answer),keepScore);
      
        nextQuestion();// call the function again 
     }
    

   }                    
  
   nextQuestion();
  

})();



