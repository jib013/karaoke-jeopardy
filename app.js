const categories = [
    { name: "Pop Hits", questions: [
      { question: "Anti-hero - Taylor Swift", answer: "Taylor Swift", points: 100 },
      { question: "Wannabe - Spice Girls", answer: "Spice Girls", points: 200 },
      { question: "I Want It That Way - Backstreet Boys", answer: "Back Street Boys", points: 300 },
      { question: "Party in the U.S.A - Miley Cyrus", answer: "Miley Cyrus", points: 400 },
      { question: "I Will Survie - Gloria Gaynor's", answer: "Queen", points: 500 },
      { question: "Dancing Queen - ABBA", answer: "ABBA", points: 600 },
      { question: "Sweet Caroline - Neil Diamond", answer: "Neil Diamond", points: 700 },
      { question: "Someone Like You - Adele", answer: "Adele", points: 800 },
      { question: "I Wanna Dance with Somebody (Who Loves Me) - Whitney Houston", answer: "Whitney Houston", points: 900 },
      { question: "Oops!...I Did It Again - Brittany Spears", answer: "Brittany Spears", points: 1000 }
    ]},
    { name: "Rock Classics", questions: [
      { question: "Hotel California - Don Henley", answer: "Don Henley", points: 100 },
      { question: "Livin' On a Prayer - Bon Jovi", answer: "Bon Jovi", points: 200 },
      { question: "Don't Stop Believing - Journey", answer: "Journey", points: 300 },
      { question: "Bohemian Rhapsody - Queen", answer: "Queen", points: 400 },
      { question: "I Believe in a Thing Called Love - The Darkness", answer: "The Darkness", points: 500 },
      { question: "Simple Man - Lynyrd Skynyrd", answer: "Lynyrd Skynyrd", points: 600 },
      { question: "(You Gotta) Fight for Your Right to Party - Beastie Boys)", answer: "Beastie Boys", points: 700 },
      { question: "Teenage Dirtbag - Wheatus", answer: "Wheatus", points: 800 },
      { question: "Boys Are Back in Town - Thin Lizzy", answer: "Thin Lizzy", points: 900 },
      { question: "Santeria - Sublime", answer: "Sublime", points: 1000 }
    ]},
    { name: "R&B & Soul", questions: [
      { question: "No Scrubs - TLC", answer: "TLC", points: 100 },
      { question: "All of Me - John Legend", answer: "John Legend", points: 200 },
      { question: "Million Dollar Baby - Whitney Houston", answer: "Whitney Houston", points: 300 },
      { question: "Let's Stay Together - Al Green", answer: "Al Green", points: 400 },
      { question: "Respect - Aretha Franklin", answer: "Aretha Franklin", points: 500 },
      { question: "No One - Alicia Keys", answer: "Alicia Keys", points: 600 },
      { question: "Survivor - Destiny's Child", answer: "Destiny's Child", points: 700 },
      { question: "Rolling in the Deep - Adele", answer: "Adele", points: 800 },
      { question: "Single Ladies - Beyonce", answer: "Beyonce", points: 900 },
      { question: "Respect - Aretha Franklin", answer: "Aretha Franklin", points: 1000 }
    ]},
    { name: "Country Crooners", questions: [
      { question: "Jolene - Dolly Parton", answer: "Dolly Parton", points: 100 },
      { question: "Take Me Home, Country Roads - John Denver", answer: "John Denver", points: 200 },
      { question: "Tennessee Whiskey - Chris Stapleton", answer: "Chris Stapleton", points: 300 },
      { question: "Before He Cheats - Carrie Underwood", answer: "Carrie Underwood", points: 400 },
      { question: "Friends in Low Places - Garth Brooks", answer: "Garth Brooks", points: 500 },
      { question: "Wagon Wheel - Old Crow Medicine Show", answer: "Old Crow Medicine Show", points: 600 },
      { question: "The Devil Went Down to Georgia - Charlie Daniels Band", answer: "Charlie Daniels Band", points: 700 },
      { question: "All My Ex's Live in Texas - George Strait", answer: "George Strait", points: 800 },
      { question: "Ring of Fire - Johnny Cash", answer: "Johnny Cash", points: 900 },
      { question: "I Love This Bar - Toby Keith", answer: "Keith", points: 1000 }
    ]},
    { name: "Duets", questions: [
      { question: "Ain't No Mountain High Enough - Ashford & Simpson", answer: "Ashford & Simpson", points: 100 },
      { question: "Under Pressure - Queen", answer: "Queen", points: 200 },
      { question: "A Whole New World - Aladdin", answer: "Aladdin", points: 300 },
      { question: "You're the One That I Want - Grease", answer: "Grease", points: 400 },
      { question: "Empire State of Mind - Jay-Z & Alicia Keys", answer: "Jay-Z & Alicia Keys", points: 500 },
      { question: "I Got You Babe - Sonny & Cher", answer: "Sonny & Cher", points: 600 },
      { question: "Summer Nights - Grease", answer: "Grease", points: 700 },
      { question: "Don't Go Breaking My Heart - Elton John", answer: "Elton John", points: 800 },
      { question: "The Boy Is Mine - Brandy & Monica", answer: "Brandy & Monica", points: 900 },
      { question: "Somebody That I Used To Know - Gotye & Kimbra", answer: "Gotye & Kimbra", points: 1000 }
    ]},

    { name: "Disney & Musicals", questions: [
        { question: "Can you feel the love tonight? - Lion King", answer: "Lion King", points: 100 },
        { question: "Under the Sea - The Little Mermaid", answer: "The Little Mermaid", points: 200 },
        { question: "The Bare Necessities - The Jungle Book", answer: "The Jungle Book", points: 300 },
        { question: "How Far I'll Go - Moana", answer: "Moana", points: 400 },
        { question: "Hakuna Matata - The Lion King", answer: "The Lion King", points: 500 },
        { question: "Gaston - Beauty and the Beast", answer: "Beauty and the Beast", points: 600 },
        { question: "You've Got a Friend in Me - Randy Newman", answer: "Randy Newman", points: 700 },
        { question: "Do You Want to Build a Snowman - Frozen", answer: "Frozen", points: 800 },
        { question: "Go the Distance - Hercules", answer: "Hercules", points: 900 },
        { question: "Friend Like Me - Aladdin", answer: "Aladdin", points: 1000 }
      ]}
  ];
  
  let players = {}; // Store player scores in empty array
  let activePlayer = null; // Track the current player
  let currentQuestion = null;

  function setupPlayers() {
    const playerSelect = document.getElementById("players"); //grab the player select dropdown element

    // Populate dropdown with up to 20 players
    for (let i = 1; i <= 20; i++) {
        const option = document.createElement("option");
        option.value = `Player ${i}`;
        option.textContent = `Player ${i}`;
        playerSelect.appendChild(option);

        // Initialize each player's score at 0
        players[`Player ${i}`] = 0;
    }

    // Set event listener to change active player
    playerSelect.addEventListener("change", (e) => {
        activePlayer = e.target.value;
        document.getElementById("active-player").textContent = activePlayer;
        document.getElementById("score").textContent = players[activePlayer];
    });

    // Default active player
    activePlayer = "Player 1";
    playerSelect.value = activePlayer;
    document.getElementById("active-player").textContent = activePlayer;
    document.getElementById("score").textContent = players[activePlayer];
  }

  // let score = 0;
  
  function setupBoard() {
    const gameBoard = document.getElementById("game-board");
  
    categories.forEach(category => {
      // Create a container for the category and its questions
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container");
  
      // Create and style the category cell as a header for the category
      const categoryCell = document.createElement("div");
      categoryCell.classList.add("category");
      categoryCell.innerText = category.name;
      categoryContainer.appendChild(categoryCell);
  
      // Create a cell for each question and add it to the category container
      category.questions.forEach(question => {
        const questionCell = document.createElement("div");
        questionCell.classList.add("question");
        questionCell.innerText = `$${question.points}`;
        questionCell.onclick = () => openQuestionModal(question, questionCell);
        question.answered = false; // Track if the question was answered correctly

        categoryContainer.appendChild(questionCell);
      });
  
      // Add the entire category container to the game board
      gameBoard.appendChild(categoryContainer);
    });
  }

  function openQuestionModal(question, questionCell) {
    if (!question.answered) {
        currentQuestion = {...question, element: questionCell };
        document.getElementById("question").innerText = question.question;
        document.getElementById("question-modal").classList.remove("hidden");
    }
  }
  
  function revealAnswer() {
    document.getElementById("answer").innerText = currentQuestion.answer;
    document.getElementById("answer-modal").classList.remove("hidden");
  }
  
  function closeModal(correct) {
    if (activePlayer) {
      if (correct) {
        players[activePlayer] += currentQuestion.points;
        currentQuestion.answered = true; // Mark question as answered
        currentQuestion.element.classList.add("answered"); // Style to indicate it's been answered
        currentQuestion.element.onclick = null; // Disable click event
      } else {
        players[activePlayer] -= currentQuestion.points;
      }
  
      document.getElementById("score").textContent = players[activePlayer];
    }
    document.getElementById("question-modal").classList.add("hidden");
  }

  function closeAnswerModal() {
    document.getElementById("answer-modal").classList.add("hidden");
  }
  
  function closeModalWindow() {
    document.getElementById("question-modal").classList.add("hidden");
  }

  function playerScores () {
    document.getElementById("player-scores").innerHTML.players;
  }
  
  setupPlayers();
  setupBoard();


