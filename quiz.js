let question = document.querySelector('#question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let scoreText = document.querySelector('#score');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0;
let questionCounter = 0
let avaiableQuestions = []

let questions = [
    {
        question:'is this working?',
        choice1:'yes',
        choice2:'no',
        choice3:'no',
        choice4:'no',
        answer:1
    },
    {
        question:'is this a question',
        choice1:'it is not',
        choice2:'yes',
        choice3:'it is not',
        choice4:'it is not',
        answer:2
    },
    {
        question:'what is this',
        choice1:'idk',
        choice2:'idk',
        choice3:'idk',
        choice4:'question',
        answer:4
    },
    {
        question:'I ran out of ideas',
        choice1:'???',
        choice2:'????????',
        choice3:'click this ',
        choice4:'????',
        answer:3
    },
    {
        question:'Is this a Quiz',
        choice1:'yes',
        choice2:'no',
        choice3:'idk',
        choice4:'I dont think so',
        answer:1
    },{
        question:'did this take a lot of time',
        choice1:'ara rogor gekadreba',
        choice2:'ver dagetanxmebi',
        choice3:'diax aucileblad',
        choice4:'dzaan advilia',
        answer:3
    },
    {
        question:'romelia swori pasuxi',
        choice1:'es',
        choice2:'es ara',
        choice3:'amas ar daachiro',
        choice4:'airchie pirveli',
        answer:1
    },
    {
        question:'gtxovt airchiet meotxe',
        choice1:'airchiet meotxe pasuxi',
        choice2:'gtxooov',
        choice3:'midi mandve xar airchie pasuxi',
        choice4:'amas daachire',
        answer:4
    },
    {
        question:'amomewura kitxvebi',
        choice1:'es airchie',
        choice2:'es ara',
        choice3:'amas ar daachiro',
        choice4:'airchie pirveli',
        answer:1
    },
    {
        question:'meorea pasuxi',
        choice1:'meore',
        choice2:'ES',
        choice3:'amas ar daachiro',
        choice4:'dzaan qvemot xar',
        answer:2
    },
    {
        question:'codingi sainteresoa',
        choice1:'ARAAA',
        choice2:'MEH',
        choice3:'DZALIAN SAINTERESOA',
        choice4:'ravi',
        answer:3
    },
    {
        question:'davigale kitxvebis werit',
        choice1:'airchie meotxe',
        choice2:'es ara',
        choice3:'amas ar daachiro',
        choice4:'ME AMIRCHIE',
        answer:4
    },
    {
        question:'RUSETI OKUPANTIA?',
        choice1:'KI(ogond swori)',
        choice2:'KI',
        choice3:'KI',
        choice4:'KI',
        answer:1,
    },
    {
        question:'imedia kitxvebi momafiqrdeba',
        choice1:'ar momafiqrda',
        choice2:'momafiqrda',
        choice3:'es kitxva araa',
        choice4:'meorea pasuxi',
        answer:2
    },{
        question:'pasuxebshi swori romelia',
        choice1:'romelic gagixardeba',
        choice2:'albat mesame',
        choice3:'me ar var',
        choice4:'chemi azritac mesamea',
        answer:3
    },
    
]

const SCORE_POINTS = 3;
const MAX_QUESTIONS =15;

startGame = ()=>{
    questionCounter = 0;
    score = 0;
    avaiableQuestions = [...questions]
    getNewQuestion()
} 

getNewQuestion = ()=>{
    if(avaiableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }

    questionCounter++
    const questionsIndex = Math.floor(Math.random()* avaiableQuestions.length)
    currentQuestion = avaiableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]

    })

    avaiableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}


choices.forEach(choice =>{ 
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        },1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
} 
startGame();


let finalscore = document.querySelector('#finalscore');
finalscore.innerText = `${scoreText}`;