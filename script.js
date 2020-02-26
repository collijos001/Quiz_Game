let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");

let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice) {
    option1 = document.getElementById("choice0");
    option1.innerText = choice1;
    option2 = document.getElementById("choice1");
    option2.innerText = choice2;
    option3 = document.getElementById("choice2");
    option3.innerText = choice3;
    option4 = document.getElementById("choice3");
    option4.innerText = choice4;
    question.innerText = questionText;


};


let OzymandiasPrime = function() {

    btn1.onclick = function(){checkCorrect(this)};
    btn2.onclick = function(){checkCorrect(this)};
    btn3.onclick = function(){checkCorrect(this)};
    btn4.onclick = function(){checkCorrect(this)};

    if (count === 0) {
        createQuestion("What is my name?", "Joseph", "Bob", "Anakin", "Obi-Wan", "Joseph");
        correctOne = btn1;
    }else if(count === 1){
        createQuestion("What is my favorite band?", "Chevelle", "Muse", "Slipknot", "Queen", "Muse");
        correctOne = btn2;
    }else if(count === 2){
        createQuestion("Who is the Master Chief?", "Anakin Skywalker", "John 117", "Sgt. Johnson", "Plot Device", "John 117");
        correctOne = btn2;
    }else if(count === 3){
        createQuestion("Have you heard the Tragedy of Darth Plagieus the Wise?", "What?", "It's not a tale the Jedi would tell you", "Star Wars sucks", "I don't think so", "It's not a tale the Jedi would tell you");
        correctOne = btn2;
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }

    document.getElementById("progress").innerText = "Question " + (count +1) + " of " + numQuestions;

};

let checkCorrect = function (button) {
    if(button === correctOne){
        numRight++;
    }
    count++;
    OzymandiasPrime();
};
