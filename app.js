// js -> tootsoolol hiih
// html, css -> text zurag gargaj ireh
// for -> neg uildliig olon davtah uyd
// function -> olon kodnii tsugluulga, dahij ashiglah bolomjte
// massive/arrray -> [], index (0,1,2, ..., 99) / olon utga zereg hadgalah
// object -> {}, key:value 
// api -> tusgai beldsen datag holboh
// .innerText -> tag dotorh vgiig oorchlih
// document -> html deerh bvh code
// addEventListener -> websited hiigdeh uildel
const questionEl = document.querySelector('.question');
const result = document.querySelector('.result');
const choiceEl = document.querySelector('.choice');
const nextBtn = document.querySelector('.next');
var score=0;
let quizData = [
    {
        "question":"What is capital of United kingdom",
        "choice": ["Berlin", "Madrid", "Paris", "London"],
        "result":"London",
    },
    {
        "question":"Where does Kyoto city located",
        "choice":["Korea", "China", "Japan", "Russia"],
        "result":"Japan",
    },
    {
        "question":"Where did 2024 olympics happened",
        "choice":["Paris", "London", "Tokyo", "Shanghai"],
        "result":"Paris",
    },
    {
        "question":"When was genghis khan born",
        "choice":[1162, 1174, 1168, 1165],
        "result":1162,
    },
    {
        "question":"What continent Mongolia located",
        "choice":["Asia", "Europe", "America", "Eurasia"],
        "result":"Asia",
    }
];
let now=0;
console.log(quizData[now].question);
    function display(){
    nextBtn.style.display="none";
    questionEl.innerText = quizData[now].question;
    quizData[now].choice.forEach(data=>{
        console.log(data)
        let btn = document.createElement('button');
        console.log(btn)
        btn.innerText = data;
        choiceEl.append(btn)
        btn.addEventListener('click', ()=> checkAnswer(data))
    });
}
function checkAnswer(data){
    console.log(data);
    nextBtn.style.display="block";
    if(data==quizData[now].result){
        result.innerText="Correct answer";
        score++;
    }else{
        result.innerText="Wrong answer, the correct answer was " +  quizData[0].result;
    }
}
nextBtn.addEventListener('click', ()=>{
    questionEl.innerText="";
    result.innerText="";
    choiceEl.innerHTML="";
    now++;
    if(now==quizData.length){
        result.innerText="Your score is " +score+ "/" + quizData.length;
        nextBtn.style.display="none";
    }else{
        display();
    }
})
display()