const Question = document.querySelector(".heading3");
const Answer = document.querySelector(".answer");
const Btn = document.querySelector(".btn");
 
let allWords = [ "aardvark",
    "ant", "anteater", "antelope", "ape", "armadillo", "donkey", "baboon", "badger", "barracuda", "bat", "bear", "beaver", "bee", "bison", "boar", "buffalo", "butterfly", "camel", "cat", "caterpillar", "cattle", "chamois", "cheetah", "chicken", "chimpanzee", "cobra", "cockroach", "crocodile", "crow", "curlew", "deer", "dinosaur", "dog", "dove", "dragonfly", "duck", "elephant", "fox", "frog", "giraffe", "gnat", "gnu", "goat", "gorilla", "goshawk", "hamster", "hare", "hippopotamus", "horse", "hyena", "jackal", "jaguar", "kangaroo", "koala", "lemur", "leopard", "lion", "monkey", "moose", "mouse", "mule", "panther", "parrot", "partridge", "pig", "pigeon", "pony", "porcupine", "rabbit", "raccoon", "rat", "reindeer", "rhinoceros", "rook", "salamander", "scorpion", "sheep", "skunk", "snake", "sparrow", "spider", "squirrel", "starling", "stingray", "stinkbug", "stork", "tiger", "toad", "turtle", "weasel", "wildcat", "wolf", "wolverine", "woodpecker", "yak", "zebra"];

    // let newword = ""
    // let randomword = ""
    // let suffleword = ""
    
   

const createword = ()=>{
    let randum = Math.floor(Math.random()*allWords.length);
    let tempword = (allWords[randum])
    return tempword
}
 
const scramble=(arr)=>{
    randomword = arr.split("")
    randomword= randomword.sort((a,b)=>0.5-Math.random())
    return randomword

}
const suffle = (ar)=>{
    suffleword = ar.join("")
    return suffleword
    
    

}


let play = false;
Btn.addEventListener("click",function(){
    if (play==false){
        play=true;
        Btn.innerHTML = "Guess"; 
        Answer.classList.toggle("hidden");
        newword =  createword();
        console.log(newword)
        
        randomword = scramble(newword);
        
        suffleword = suffle(randomword)
        
        Question.innerHTML = `Guess the Animal name:     <span>  "${suffleword}"</span>`
     }
    else{
        
        if(Answer.value==newword){
            Question.innerHTML = ` yaay !!!  <span>${Answer.value}</span> is the right answer`
            Answer.classList.toggle("hidden");

            Btn.innerHTML = "Next"; 

            play=false
            Answer.value=null

        }
        else if((Answer.value=="") || (Answer.value == " ")){
            Question.innerHTML = `Kindly enter you answer <br>
            Guess the Animal name:  <span>  "${suffleword}"</span>`
        }
        else{
            Question.innerHTML = `OOPS !!! <span>${Answer.value}</span> is the wrong. Right answer is <span> ${newword}</span>`
            Answer.classList.toggle("hidden");


            Btn.innerHTML = "Start Again"; 

            play=false
            Answer.value=null
        }
    } 

})

