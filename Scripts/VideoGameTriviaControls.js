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


//Local Storage
let userStorageName = localStorage.getItem('Users');
let userDisplayName = document.getElementById("endscreen-holder");
let changeUserName = document.getElementById("change-User-Name");


//Creating Questions Array
const arrayOfQuestions = [{id: "0", question:"What year was the PlayStation 1 released?", options:["1990", "1997","2000","1995"],correct: "1995"},
{id: "1", question:"How many Pokèmon does Generation 1 feature?", options:["200","301"," 150", "151"],correct: "151"},
{id: "2", question:"What is the best-selling video game of all time?", options:["Minecraft", "GTA 5", "Pokemon GO", "World Of Warcraft"],correct: "Minecraft"},
{id: "3", question:"Who is Sega’s mascot?", options:["Sonic", "Knuckles", "Doctor Eggman","Miles 'Tails'"],correct:"Sonic" },
{id: "4", question:"What is Crash Bandicoot’s younger sister called?", options:["Tawna Bandicoot", "Coco Bandicoot","Nina Cortex", "Yaya Panda"],correct: "Coco Bandicoot" },
{id: "5", question:"What is the highest-selling arcade game of all time?", options:["1992","1995", "1980", "1999"],correct:"1992"},
{id: "6", question:"What is Kirby’s main ability?", options:["Copy ", "Ultra Sword", "Cook Stirs Up A Frenzy", "Sword Cuts Down"],correct: "Copy" },
{id: "7", question:"Which company owns Fortnite?", options:["Epic Games","Steam", "Battle.Net","Origin"],correct: "Epic Games"},
{id: "8", question:"How many protagonists are in Grand Theft Auto 5?", options:["1","5","7", "3" ],correct:"3"},
{id: "9", question:"How many playable characters are in the original Super Smash Bros?", options:["5","20", "25", "12"],correct:"12"},
{id: "10", question:"What came first, the original Silent Hill or Resident Evil?", options:["Resident Evil","Silent Hill"],correct: "Resident Evil"},
{id: "11", question:"What console did GoldenEye 007 release on?", options:["N64","Xbox","DS","PS1"],correct:"N64"},
{id: "12", question:"What year did the first Call of Duty game release?", options:["2003", "2005", "2000","2001"],correct:"2003"},
{id: "13", question:"What year is the main story of Fallout 3 set in?", options:["2277","2300", "2505", " 2900"],correct: " 2277"},
{id: "14", question:"What is the name of World of Warcraft’s 4th expansion?", options:["Mists of Pandaria", "The Burning Crusade", "Wrath of the Lich King","Warlords of Draenor"],correct:"Mists of Pandaria"},
{id: "15", question:"How many controller ports does the GameCube have?", options:["8", "4", "2", "1"],correct:"4"},
{id: "16", question:"What year was the first FIFA game released?", options:["1999","1993","2000","1990"],correct:"1993"},
{id: "17", question:"What was the US launch price of the Gameboy Color?", options:["$69.99","$79.99","$59.99","$49.99"],correct:"$69.99"},
{id: "18", question:"How many copies of Wii Sports were sold?", options:["82.90 million","70.00 million","65.80 million","50.21 million"],correct: "82.90 million"},
{id: "19", question:"What was the first home console to feature proper internet capabilities?", options:["Dreamcast", "Blizzcon"],correct:"Dreamcast" }];


//changeUserName
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
  window.location.href = "../SnowedIn-main/SnowedIn/MainMenu.html";
});

firstBtn.addEventListener("click", () => {
  window.location.href = "../SnowedIn-main/SnowedIn/MainMenu.html";
});

  //Next Button
  nextBtn.addEventListener(
    "click",
    (displayNext = () => {

      //increment questionCount
      questionCount += 1;
      //if last question
      if (questionCount == arrayOfQuestions.length) 
      {
        //hide question container and display score
        displayHolder.classList.add("hide");
        scoreHolder.classList.remove("hide");
        //user score
        userScore.innerHTML =
          "Your score: " + scoreCount + " out of " + questionCount;
        //user points
        userPoints.innerHTML =
            "Your points: " + scorePoints;
        //Username
        userDisplayName.innerHTML = userStorageName;

        minHolderDisplay.innerHTML = holdMins;
        secHolderDisplay.innerHTML = holdSecs;
      } 
      else 
      {
        countOfQuestion.innerHTML =
          questionCount + 1 + " of " + arrayOfQuestions.length + " Question";

        //display quiz
        NewDisplay(questionCount);
      }
    })
  );

//Display quiz
const NewDisplay = (questionCount) => {
    let otherCards = document.querySelectorAll(".container-mid");

    //hide other cards
    otherCards.forEach((card) => {
        card.classList.add("hide");
    });

    //display current card
    otherCards[questionCount].classList.remove("hide");
};
//Quiz Creation Function/Code
function quizMaker()
{
    //Randomly Sort The Questions
    arrayOfQuestions.sort(() => Math.random() - 0.5);

    //generate the quiz
    for(let i of arrayOfQuestions){
        //random sort the Options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let creationDiv = document.createElement("div");
        creationDiv.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + arrayOfQuestions.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        creationDiv.appendChild(question_DIV);
        //options
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
  
  //if user clicked answer == correct option stored in object
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
  //disable all options
  choices.forEach((element) => {
    element.disabled = true;
  });
}
//initial setup
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