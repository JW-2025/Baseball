const Questions = [
    {
        q: "Fill in the blank: who won the most world series _____.",
        a: [{text: "RED SOX.", isCorrect: false},
            {text: "ANGELS.", isCorrect: false},
            {text: "YANKEES.", isCorrect: true},
            {text: "DODGERS.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: What team scored the most in one game _____.",
        a: [{text: "WHITE SOX.", isCorrect: false},
            {text: "CUBS.", isCorrect: true},
            {text: "BREWERS.", isCorrect: false},
            {text: "MARLINS.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: Who is the most famous baseball player _____.",
        a: [{text: "BABE RUTH.", isCorrect: true},
            {text: "JACKIE ROBINSON.", isCorrect: false},
            {text: "MIKE TROUT.", isCorrect: false},
            {text: "SHOHEI OHTANI.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: What baseball player had the shortest carrer _____.",
        a: [{text: "EDDIE GAEDEL.", isCorrect: false},
            {text: "PAUL WANER.", isCorrect: false},
            {text: "GEORGE SISLER.", isCorrect: false},
            {text: "WILLIE KEELER.", isCorrect: true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
