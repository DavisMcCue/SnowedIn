//Declaring Variables
let timeLeft = document.querySelector(".timer-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 26;
let countdown;

//Creating Questions Array

const quizArray = [{id: "0", question:"Who actually drew the sketch of Rose in Titanic?", options:["Leonardo DiCaprio", "Billy Zane","James Cameron","Kathy Bates"],correct: "James Cameron"},
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




//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    //hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });

    //display current question card
    quizCards[questionCount].classList.remove("hide");
};


//Quiz Creation Function/Code
function quizCreator()
{
    //Randomly Sort The Questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate the quiz
    for(let i of quizArray){
        //random sort the Options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[4]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[5]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[6]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[7]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[8]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[9]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[10]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[11]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[12]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[13]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[14]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[15]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[16]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[17]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[18]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[19]}</button>
        `;
        quizContainer.appendChild(div);
    }
}

//initial setup
function initial()
{
    quizContainer.innerHTML ="";
    questionCount = 0;
    scoreCount = 0;
    count = 26;
    quizCreator();
    quizDisplay(questionCount);
}

//when user clicks on start button do this -->
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();

});
//hide quiz and display on start screen
window.onload= () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}

