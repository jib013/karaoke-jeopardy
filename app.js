const categories = [
    { name: "History", questions: [
      { question: "Who was the first president of the USA?", answer: "George Washington", points: 100 },
      { question: "In what year did World War II end?", answer: "1945", points: 200 },
      { question: "What year was the Declaration of Independence signed?", answer: "1776", points: 300 },
      { question: "What is the capital of ancient Egypt?", answer: "Memphis", points: 400 }
    ]},
    { name: "Science", questions: [
      { question: "What planet is known as the Red Planet?", answer: "Mars", points: 100 },
      { question: "What is the chemical symbol for water?", answer: "H2O", points: 200 },
      { question: "What gas do plants absorb?", answer: "Carbon Dioxide", points: 300 },
      { question: "Who developed the theory of relativity?", answer: "Albert Einstein", points: 400 }
    ]},
    { name: "Geography", questions: [
      { question: "What is the largest ocean?", answer: "Pacific Ocean", points: 100 },
      { question: "What is the capital of France?", answer: "Paris", points: 200 },
      { question: "What country has the most natural lakes?", answer: "Canada", points: 300 },
      { question: "Which continent is the Sahara Desert in?", answer: "Africa", points: 400 }
    ]},
    { name: "Literature", questions: [
      { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare", points: 100 },
      { question: "What is the title of the first Harry Potter book?", answer: "Harry Potter and the Philosopher's Stone", points: 200 },
      { question: "Who wrote 'The Odyssey'?", answer: "Homer", points: 300 },
      { question: "Who wrote 'Pride and Prejudice'?", answer: "Jane Austen", points: 400 }
    ]},
    { name: "Math", questions: [
      { question: "What is the value of pi to two decimal places?", answer: "3.14", points: 100 },
      { question: "What is 12 x 12?", answer: "144", points: 200 },
      { question: "What is the square root of 81?", answer: "9", points: 300 },
      { question: "What is 8 cubed?", answer: "512", points: 400 }
    ]}
  ];
  
  let score = 0;
  let currentQuestion = null;
  
  function setupBoard() {
    const gameBoard = document.getElementById("game-board");
  
    categories.forEach(category => {
      const categoryCell = document.createElement("div");
      categoryCell.classList.add("category");
      categoryCell.innerText = category.name;
      gameBoard.appendChild(categoryCell);
  
      category.questions.forEach(question => {
        const questionCell = document.createElement("div");
        questionCell.classList.add("question");
        questionCell.innerText = `$${question.points}`;
        questionCell.onclick = () => openQuestionModal(question);
        gameBoard.appendChild(questionCell);
      });
    });
  }
  
  function openQuestionModal(question) {
    currentQuestion = question;
    document.getElementById("question").innerText = question.question;
    document.getElementById("question-modal").classList.remove("hidden");
  }
  
  function revealAnswer() {
    document.getElementById("answer").innerText = currentQuestion.answer;
    document.getElementById("answer-modal").classList.remove("hidden");
  }
  
  function closeModal(correct) {
    if (correct) {
      score += currentQuestion.points;
    } else {
      score -= currentQuestion.points;
    }
    document.getElementById("score").innerText = score;
    currentQuestion = null;
    document.getElementById("question-modal").classList.add("hidden");
  }
  
  function closeAnswerModal() {
    document.getElementById("answer-modal").classList.add("hidden");
  }
  
  setupBoard();