//Declaring Variables
let addingUserScore = document.querySelector(".adding-score");
let quizHolder = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayHolder = document.getElementById("display-container");
let scoreHolder = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let backBtn = document.getElementById("back");
let firstBtn = document.getElementById("first-back");
let userScore = document.getElementById("user-score");
let userPoints = document.getElementById("user-points");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let scorePoints = 0;
let holdMins = 0;
let holdSecs = 0;
let minHolderDisplay = document.getElementById("min-holder");
let secHolderDisplay = document.getElementById("sec-holder");


//Declaring Local Storage 
let userStorageName = localStorage.getItem('Users');
let userDisplayName = document.getElementById("endscreen-holder");
let changeUserName = document.getElementById("change-User-Name");


//Creating Questions Array
const arrayOfQuestions = [{id: "0", question:"Who actually drew the sketch of Rose in Titanic?", options:["Leonardo DiCaprio", "Billy Zane","James Cameron","Kathy Bates"],correct: "James Cameron"},
{id: "1", question:"Freddy Krueger wears a striped sweater that is which colors?", options:["Red and blue","Orange and green"," Red and green", " Orange and brown"],correct: "Red and green"},
{id: "2", question:"If you watch the Marvel movies in chronological order, which movie would you watch first?", options:["Iron Man", "Captain America: The First Avenger", "Doctor Strange", "Captain Marvel"],correct: "Captain America: The First Avenger"},
{id: "3", question:"What is the name of the camp where counselors are terrorized by a slasher in Friday the 13th?", options:["Camp Holland Lake", "Camp Crystal Lake", "Camp Diamond Lake","Camp Green Lake"],correct:"Camp Crystal Lake" },
{id: "4", question:"The dog in The Sandlot is nicknamed “The Beast.” What’s the dog’s actual name?", options:["Hercules", "Goliath","Atlas", "Zeus"],correct: "Hercules" },
{id: "5", question:"A Harry Potter stunt double was paralyzed on the job. Which actor did the stunt double do stunts for?", options:["Rupert Grint","Emma Watson", "Alan Rickman", "Daniel Radcliffe"],correct:"Daniel Radcliffe"},
{id: "6", question:"Which actor plays Private Ryan in Saving Private Ryan?", options:["Tom Hanks", "Vin Diesel", "Edward Burns", "Matt Damon"],correct: "Matt Damon" },
{id: "7", question:"What is the name of Jeff Goldblum’s character in Jurassic Park?", options:["Dr. Ian Malcolm","Dr. Malcolm Stevens", "Dr. Evan Malcolm","Dr. Michael Ian"],correct: "Dr. Ian Malcolm"},
{id: "8", question:"What is the highest-grossing movie of all time?", options:["Titanic","Avatar","Avengers: Endgame","Star Wars: The Force Awakens"],correct:"Avatar"},
{id: "9", question:"What are the names of the two people behind Ghostface in Scream?", options:["Billy and Steve","Bobby and Stu", "Bobby and Steve", "Billy and Stu"],correct:"Billy and Stu"},
{id: "10", question:"What year was the first Die Hard movie released?", options:["1986","1988", "1990", "1991"],correct: "1988"},
{id: "11", question:"What is the name of the chainsaw-wielding maniac in The Texas Chainsaw Massacre?", options:["Leatherhead","Leatherface","Hideface","Leathercap"],correct:"Leatherface"},
{id: "12", question:"What was the highest-grossing movie of 2005?", options:["War of the Worlds", "Star Wars: Episode III: Revenge of the Sith", "Harry Potter and the Goblet of Fire","The Chronicles of Narnia: The Lion, The Witch, and the Wardrobe"],correct:"Harry Potter and the Goblet of Fire"},
{id: "13", question:"What movie is this famous quote from: “You can’t handle the truth!”", options:["Training Day","Saving Private Ryan", "A Few Good Men", "Armageddon"],correct: "A Few Good Men"},
{id: "14", question:"Which comedian makes a zombie cameo in Zombieland?", options:["Dan Aykroyd", "Chevy Chase", "Steve Martin","Bill Murray"],correct:"Bill Murray"},
{id: "15", question:"What’s the name of the planet Obi-Wan Kenobi and Anakin Skywalker duel on in Star Wars Episode III: Revenge of the Sith?", options:["Hoth", "Mustafar", "Yavin", "Tatooine"],correct:"Mustafar"},
{id: "16", question:"What year was The Dark Knight released?", options:["2003","2005","2008","2009"],correct:"2008"},
{id: "17", question:"What word completes this famous quote from Jerry McGuire: “Show me the ____.” ", options:["Love","Proof","Money","Man"],correct:"Money"},
{id: "18", question:"Who does Tim Curry play in Clue?", options:["Professor Plum","Wadsworth","Mr. Green","Colonel Mustard"],correct: "Wadsworth"},
{id: "19", question:"When was the last Twilight movie released?", options:["2010", "2012", "2014","2016"],correct:"2012" }];


//ChangeUserName
changeUserName.addEventListener("click", () => {
  let playersName = localStorage.getItem("Users");
  let personName = prompt("Please enter a new name:", playersName);
  if (personName == null || personName == "") 
  {
    alert("User cancelled the prompt.");
    location.reload()
  } 
  else 
  {
    localStorage.setItem("Users", personName);
    alert("Name Changed! Page is going to refresh!");
    location.reload()
  }
});

//Timer Variables
var newseconds = 0
var second = 0;
var min = 0;
var hour = 0;

var timer = setInterval(upTimer, 1000);
function upTimer() {
    ++newseconds;
    hour = Math.floor(newseconds / 3600);
    minute = Math.floor((newseconds - hour * 3600) / 60);
    second = newseconds - (hour * 3600 + minute * 60);

    holdMins = minute;
    holdSecs = second;
}
  
//Restart Quiz
restart.addEventListener("click", () => {
    New_Game();
    scorePoints = 0;
    holdMins = 0;
    holdSecs = 0;
    displayHolder.classList.remove("hide");
    scoreHolder.classList.add("hide");
  });

//Back Button
backBtn.addEventListener("click", () => {
  window.location.href = "../SnowedIn-main/MainMenu.html";
});

firstBtn.addEventListener("click", () => {
  window.location.href = "../SnowedIn-main/MainMenu.html";
});

  //Next Button
  nextBtn.addEventListener(
    "click",
    (displayNext = () => {

      //increment questionCount
      questionCount += 1;
      //If last question
      if (questionCount == arrayOfQuestions.length) 
      {
        //Hide question container and display score
        displayHolder.classList.add("hide");
        scoreHolder.classList.remove("hide");
        //User score
        userScore.innerHTML =
          "Your score: " + scoreCount + " out of " + questionCount;
        //User points
        userPoints.innerHTML =
            "Your points: " + scorePoints;

        localStorage.setItem("Movie Trivia Points", scorePoints);
        
        //Username
        userDisplayName.innerHTML = userStorageName;

        minHolderDisplay.innerHTML = holdMins;
        secHolderDisplay.innerHTML = holdSecs;
      } 
      else 
      {
        countOfQuestion.innerHTML =
          questionCount + 1 + " of " + arrayOfQuestions.length + " Question";

        //Display quiz
        NewDisplay(questionCount);
      }
    })
  );

//Display quiz
const NewDisplay = (questionCount) => {
    let otherCards = document.querySelectorAll(".container-mid");

    //Hide other cards
    otherCards.forEach((card) => {
        card.classList.add("hide");
    });

    //Display current card
    otherCards[questionCount].classList.remove("hide");
};
//Quiz Creation Function/Code
function quizMaker()
{
    //Randomly Sort The Questions
    arrayOfQuestions.sort(() => Math.random() - 0.5);

    //Generate the quiz
    for(let i of arrayOfQuestions){
        //Random sort the Options
        i.options.sort(() => Math.random() - 0.5);
        //Quiz card creation
        let creationDiv = document.createElement("div");
        creationDiv.classList.add("container-mid", "hide");
        //Question number
        countOfQuestion.innerHTML = 1 + " of " + arrayOfQuestions.length + " Question";
        //Question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        creationDiv.appendChild(question_DIV);
        //Options
        creationDiv.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
        quizHolder.appendChild(creationDiv);
    }
}
//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let choices = question.querySelectorAll(".option-div");
  
  //If user clicked answer == correct option stored in object
  if (userSolution === arrayOfQuestions[questionCount].correct) 
  {
    userOption.classList.add("correct");
    scorePoints += 100;
    addingUserScore.innerHTML = scorePoints;
    scoreCount++;
  } 
  else 
  {
    userOption.classList.add("incorrect");
    scorePoints -= 50;
    addingUserScore.innerHTML = scorePoints;
    //For marking the correct option
    choices.forEach((element) => {
      if (element.innerText == arrayOfQuestions[questionCount].correct) 
      {
        element.classList.add("correct");
      }
    });
  }
  //Disable all options
  choices.forEach((element) => {
    element.disabled = true;
  });
}
//Initial setup
function New_Game() {
  quizHolder.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  addingUserScore.innerHTML = 0;
  seconds = 0;
  newseconds = 0
  upTimer();
  quizMaker();
  NewDisplay(questionCount);
}
//Activiates the start button either on refresh of windows or restart button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayHolder.classList.remove("hide");
  New_Game();
});

//Quiz hidden till user clicks on start
window.onload = () => {
  startScreen.classList.remove("hide");
  displayHolder.classList.add("hide");
};