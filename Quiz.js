// first to add questions for that lets make a array which have objects 
const questions =[
    {   // this is the first question 
        'que' : 'Which of the following is the markup language ?',
        'a':'HTML',
        'b':'CSS',
        'c': 'JavaScript',
        'd':'Java',

        'correct':'a'
    },
    {   // this is the first question 
        'que' : 'In which year javascript was launched ?',
        'a':'1998',
        'b':'1989',
        'c': '1995',
        'd':'1997',

        'correct':'c'
    },
    {    
        'que' : 'For what css is used ?',
        'a':'Styling HTML page',
        'b':'For styling javascript',
        'c': 'To build web page',
        'd':'For writing logic of the webpage',

        'correct':'a'
    }
    ,
    {    
        'que' : ' Javascript is an ____ language?',
        'a':'Object-Oriented',
        'b':'Object-based',
        'c': 'Procedural',
        'd':'none of the above',

        'correct':'a'
    }
    ,
    {    
        'que' : 'Which of the following is used in Javascript',
        'a':'var',
        'b':'let',
        'c': 'Both a and b',
        'd':'none of the above',

        'correct':'c'
    }
    ,
    {    
        'que' : 'Which of the following is not a JS framework ',
        'a':'Node',
        'b':'React',
        'c': 'Vue',
        'd':'Cassandra',

        'correct':'d'
    }
    ,
    {    
        'que' : 'Which of the following are closures in the JS ?',
        'a':'Objects',
        'b':'Functions',
        'c': 'Variables',
        'd':'All of the above',

        'correct':'d'
    }
    ,
    {    
        'que' : 'Which function is used to serialize an object into a JSON string in JS ?',
        'a':'Stringify()',
        'b':'parse()',
        'c': 'convert',
        'd':'none',

        'correct':'a'
    }
    ,
    {    
        'que' : 'Which keyword is used to check whether a given property is valid or not ? ',
        'a':'in',
        'b':'is in',
        'c': 'exist',
        'd':'lies',

        'correct':'a'
    }
    ,
    {    
        'que' : 'How can a datatype be declared to be a constant type ? ',
        'a':'var',
        'b':'let',
        'c': 'const',
        'd':'int',

        'correct':'c'
    }
    
    
]
// to write the question in the html 
const questBox = document.getElementById('question-box');
//for options
const optionsInput= document.querySelectorAll('.options');
// function 2 for questions
let index = 0;
let right =0;
let wrong=0;
let total = questions.length;
const loadQuestion =()=>{

    if(index===total){
        return endQuiz(); // this is the function to end the quiz and to display the marks
    }
    reset();
    const data = questions[index];// variable for data
    questBox.innerText = `${index+1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText=data.a;
    optionsInput[1].nextElementSibling.innerText=data.b;
    optionsInput[2].nextElementSibling.innerText=data.c;
    optionsInput[3].nextElementSibling.innerText=data.d;
}

// logic for the submit 
const submitQuiz= ()=>{
    const data=questions[index];
    const ans = getAnswer(); // get ans is the function of for getting the selected and from the user
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion(); // call the function again on the second question 
     return;
}

const getAnswer=()=>{
    let answer;
    optionsInput.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value
            }
        }
    )
    return answer;
}

// this function is to clear the answers and we will use it to clear the selected ans 
const reset=()=>{
    optionsInput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

// function to end the quiz and to display the result to the user
const endQuiz=()=>{
    document.getElementById('box').innerHTML=
    
   `<div style="text-align:center"
    <h3> Thakyou for playing the quiz <h3>
    <h2>  ${right} / ${total} are correct
    </div> `
    

}
loadQuestion();