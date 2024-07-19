const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];
   
let score = 0;
let currentQuestion = 0;
const TotalScore = quesJSON.length;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

const nextEl = document.getElementById('next');

showQues();

nextEl.addEventListener("click", () => {
     scoreEl.textContent = `Score : ${score}/${TotalScore}`
  nextQues();
});

function showQues() {
  
  // Destructuring the object
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  

  //Setting question text content
  questionEl.textContent = question; // directly accessing 'question' due to destructuring.

  const shuffled = suffleOption(options);

  shuffled.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionEl.appendChild(btn);
  
        
    //Event HAndling on the button
    btn.addEventListener('click', () => {
      if (opt == correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      scoreEl.textContent = `Score : ${score}/${TotalScore}`
      nextQues();
    });
  });
}

function nextQues() {
  currentQuestion++;
  optionEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = "Quiz compelete !!";
    nextEl.remove();
  } else {
    showQues();
  }
}
    


 

    
// suffling the option

function suffleOption(option) {
  for (let i = option.length - 1; i >= 0; i--){
    const j = Math.floor(Math.random() * i + 1);
    [option[i], option[j]] = [option[j], option[i]];

  }
  return option;
}
// suffleOption([1, 2, 3, 4, 5, 6]);


