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
const arrayOfQuestions = [{id: "0", question:"What does Michael Scott eat for lunch on The Office that makes him fall asleep?", options:["Whole Chicken Pot Pie ", "Pizza","Pasta","Pork"],correct: "Whole Chicken Pot Pie"},
{id: "1", question:"Michael Cera's character in Arrested Development shares a name with which pop legend?", options:["George Michael","Michael Bluth"," Gob Bluth", "Lucille Bluth"],correct: "George Michael"},
{id: "2", question:"Which Game of Thrones star was nominated for an Emmy for every single season?", options:["Peter Dinklage", "Sophie Turner", "Emilia Clarke", "Pedro Pascal"],correct: "Peter Dinklage"},
{id: "3", question:"What is Tim Taylor’s neighbor’s name in Home Improvement? ", options:["Wilson", "Tim Taylor", "Al Borland","Jill Taylor"], correct:"Wilson" },
{id: "4", question:"What is the longest continuously running game show on television? ", options:["Family Feud", "That's My Jam","The Voice", "The Price is Right"],correct: "The Price is Right" },
{id: "5", question:"What do the characters in M.A.S.H. call the senior staff members’ tent? ", options:["The Swamp","Capt. Benjamin Franklin Hawkeye Pierce", "Lt. Col. Henry Blake", "Capt. B.J. Hunnicutt"],correct:"The Swamp"},
{id: "6", question:"How many children were in the Brady family on The Brady Bunch? ", options:["5 ", "6", "8", "9"],correct: "6" },
{id: "7", question:"What is the name of the teacher on the Magic School Bus? ", options:["Ms. Frizzle","Keesha Franklin", "Wanda Li","Phoebe Terese"],correct: "Ms. Frizzle"},
{id: "8", question:"What is the nickname given to the haunted house featured in the series American Horror Story?", options:["Asylum","Hotel","Cult", "Murder House" ],correct:"Murder House"},
{id: "9", question:"What is the longest running prime time television show in history? ", options:["The Simpsons","Family Guy", "American Dad", "Futurama"],correct:"The Simpsons"},
{id: "10", question:"What is the name of the restaurant where Penny works as a waitress in The Big Bang Theory? ", options:["Cheesecake Factory","Olive Garden", "Texas Roadhouse", "Hard Rock Cafe"],correct: "Cheesecake Factory"},
{id: "11", question:"What cable network picked up Friday Night Lights after it was originally cancelled? ", options:["Amazon","PBS","CW Network","DirectTV"],correct:"DirectTV"},
{id: "12", question:"How much does a burger cost on Bob’s Burgers?", options:["$7.95", "$8.99", "$4.99","$5.95"],correct:"$5.95"},
{id: "13", question:"How many people were killed by Annalise Keating on How to Get Away with Murder? ", options:["1","4", "3", "0"],correct: "0"},
{id: "14", question:"What product is featured in Don’s final ad, which aired at the end of the Mad Men series finale?", options:["Pepsi", "Coca-Cola", "Fanta","Dasani"],correct:"Coca-Cola"},
{id: "15", question:"Where did the Simpson family live?", options:["Bakersfield", "Springfield", "Heartfield", "Steamfield"],correct:"Springfield"},
{id: "16", question:"It’s as easy as 1, 2, 3! The Big Three U.S. commercial broadcast television networks are CBS, NBC, and what Disney-owned third network?", options:["ABC","Netflix","Hulu","Paramount Plus"],correct:"ABC"},
{id: "17", question:"Who sings the theme to Drake and Josh?", options:["Drake Bell","Jennifer Lopez","Josh Peck","Miranda Cosgrove"],correct:"Drake Bell"},
{id: "18", question:"Why did Megan hand over the phone to Drake when she won tickets to a concert?", options:["Blackmail-He wanted the tickets so he had to do her homework","Cause she was being nice","Because He threatened her with a wedgie","Megan burnt his guitar so she owed him one"],correct: "Blackmail-He wanted the tickets so he had to do her homework"},
{id: "19", question:"What color was Tony Hawk's Viper? (Drake and Josh Go HollyWood)", options:["Red", "Blue", "Black", "Green"],correct:"Red" }];


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

      //Increment questionCount
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