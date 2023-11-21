var questions = [
    {prompt: "What team won the UCL in 2008?\n (a)Manchester United\n\
    (b)DC United\n(c)Chelsea",
    answer: "a"
    },
    {prompt: "Who is the president of Tanzania?\n(a)Raila Odinga\n\
    (b)Pombe Magufuli\n(c)Samia Suluhu",
     answer: "c"}
];
var score = 0;

for (var i = 0; i< questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    score++;
    alert("Correct");
  } else{
    alert("Wrong!");
  }
    }
    alert("You got" + score + "/" + questions.length);