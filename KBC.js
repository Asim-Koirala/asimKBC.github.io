let introvid = document.querySelector('.container .intro_vid_play video'),
start_btn = document.querySelector('.container .start_btn button'),
logo = document.querySelector('.container .logo_main'),
game = document.querySelector('.container .game'),
questionnaire = document.querySelector('.container .game .questionnaire'),
money_tier = game.querySelector('.money_tier ul'),
question_KBC = questionnaire.children[0],
option_1 = questionnaire.children[1],
option_2 = questionnaire.children[2],
option_3 = questionnaire.children[3],
option_4 = questionnaire.children[4],
next_btn = game.querySelector(".next_btn button"),
all_options = questionnaire.querySelectorAll('button'),
correct_audio = new Audio(),
wrong_audio = new Audio(),
counter_tag = game.querySelector('.timer'),
abba,
harmonium,
timeValue = 30,
widthValue = 0,
crore_winner_audio = new Audio,
timeLine = game.querySelector('.time_line'),
timer_audio = new Audio,
prize_info = document.querySelector('.container .prize_info'),
quit_btn = document.querySelector('.container .prize_info .quit'),
play_again_btn = document.querySelector('.container .prize_info .play_again');
correct_audio.src = "correct.mp3";
wrong_audio.src = "wrong.mp3";
timer_audio.src = "timer.mp3";
crore_winner_audio.src = "1crore.mp3"

// When start button is clicked
start_btn.onclick = function playintro(e){
    logo.style.display = "none";
    start_btn.style.display="none";
    introvid.style.display ="block";
    introvid.play();
    setTimeout(apb, 37000)
    function apb(){
        introvid.style.display ="none";
        game.style.display="block";
        logo.style.display="block";
        showQuestions(0);
        clearInterval(abba);
        counterTime(timeValue);
        clearInterval(harmonium);
        counterLine(widthValue);
    }
}
// declaration of the question number
var que_num = 0;


// When next button is clicked
next_btn.onclick =()=>{
    next_btn.style.display = "none";
    option_1.classList.remove('correct_ans');
    option_2.classList.remove('correct_ans');
    option_3.classList.remove('correct_ans');
    option_4.classList.remove('correct_ans');
    option_1.classList.remove('disabled');
    option_2.classList.remove('disabled');
    option_3.classList.remove('disabled');
    option_4.classList.remove('disabled');
    

    if(que_num < questions.length - 1){
        clearInterval(abba);
    counterTime(timeValue);
    clearInterval(harmonium);
    counterLine(widthValue);
        que_num++;
        showQuestions(que_num);
    }else{
        prize_info.style.display = "block";
        play_again_btn.style.display = "none";
        prize_info.children[1].textContent = "Congrats, you won Rs.1 CRORE";
        crore_winner_audio.play();
    }
    if(15 - que_num > 0){
        money_tier.children[15 - que_num].style.background = 'cyan';
    }
    
    
    
}


// Show another question when next button is pressed
function showQuestions(index){
    let question_tag = `${questions[index].question}`;
    option_1.innerHTML = `${questions[index].options[0]}`;
    option_2.innerHTML = `${questions[index].options[1]}`;
    option_3.innerHTML = `${questions[index].options[2]}`;
    option_4.innerHTML = `${questions[index].options[3]}`;
    question_KBC.innerHTML = question_tag;

    let option = questionnaire.querySelectorAll('button');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')        
    }
}
//When the user ticks on certain option, decide whether it's correct or not
function optionSelected(answer) {
    clearInterval(abba);
    clearInterval(harmonium);
    timer_audio.pause();
    let userAns = answer.textContent;
    let correctAns = questions[que_num].answer;
    let opt_length = questionnaire.children.length;
    console.log(opt_length)
    if(userAns == correctAns){
        answer.classList.add("correct_ans");
        correct_audio.play();
        setTimeout(() => {
            next_btn.style.display = "block";
        }, 600);
    }else{
        answer.classList.add("wrong_ans");
        
        wrong_audio.play();
        for(let i = 0; i < questionnaire.children.length; i++){
            if(questionnaire.children[i].textContent == correctAns){
                questionnaire.children[i].classList.add("correct_ans");
            }
        };
        setTimeout(()=>{
            for (let i = 0; i < money_tier.children.length; i++) {
                money_tier.children[i].removeAttribute('style');
                
            }
            prize_info.style.display = 'block';
            if(que_num == 1){
                prize_info.children[1].textContent = "Congrats, you won Rs.1000"
            }else if(que_num == 2){
                prize_info.children[1].textContent = "Congrats, you won Rs.1000"
            }else if(que_num == 3){
                prize_info.children[1].textContent = "Congrats, you won Rs.3000"
            }else if(que_num == 4){
                prize_info.children[1].textContent = "Congrats, you won Rs.5000"
            }else if(que_num == 5){
                prize_info.children[1].textContent = "Congrats, you won Rs.10000"
            }else if(que_num == 6){
                prize_info.children[1].textContent = "Congrats, you won Rs.20000"
            }else if(que_num == 7){
                prize_info.children[1].textContent = "Congrats, you won Rs.40000"
            }else if(que_num == 8){
                prize_info.children[1].textContent = "Congrats, you won Rs.80000"
            }else if(que_num == 9){
                prize_info.children[1].textContent = "Congrats, you won Rs.160000"
            }else if(que_num == 10){
                prize_info.children[1].textContent = "Congrats, you won Rs.320000"
            }else if(que_num == 11){
                prize_info.children[1].textContent = "Congrats, you won Rs.640000"
            }else if(que_num == 12){
                prize_info.children[1].textContent = "Congrats, you won Rs.1250000"
            }else if(que_num == 13){
                prize_info.children[1].textContent = "Congrats, you won Rs.2500000"
            }else if(que_num == 14){
                prize_info.children[1].textContent = "Congrats, you won Rs.5000000"
            }
            clearInterval(abba);
            counterTime(timeValue);
            que_num = 0;
            showQuestions(que_num);
            option_1.classList.remove('correct_ans');
            option_2.classList.remove('correct_ans');
            option_3.classList.remove('correct_ans');
            option_4.classList.remove('correct_ans');

            option_1.classList.remove('wrong_ans');
            option_2.classList.remove('wrong_ans');
            option_3.classList.remove('wrong_ans');
            option_4.classList.remove('wrong_ans');

            option_1.classList.remove('disabled');
            option_2.classList.remove('disabled');
            option_3.classList.remove('disabled');
            option_4.classList.remove('disabled');
        }, 2500);
    }
    for (let i = 0; i < opt_length; i++) {
        questionnaire.children[i].classList.add("disabled")
    }
}
//30s Timer
function counterTime(time) {
    timer_audio.load();
    timer_audio.play();
    abba = setInterval(() => {
        counter_tag.textContent = time;
        if(!time==0){
            time--;
        }else{
            prizeReveal();
        }

    }, 1000);
}
// 30s counterLine on top
function counterLine(w){
    harmonium = setInterval(() => {
        w += 1;
        
        if(w > 1530){
            timeLine.style.width = `100%`;
        }else{
            timeLine.style.width = `${w}px`;
        }
    }, 20);
}

function prizeReveal(){
    prize_info.style.display = 'block';
            if(que_num == 1){
                prize_info.children[1].textContent = "Congrats, you won Rs.1000"
            }else if(que_num == 2){
                prize_info.children[1].textContent = "Congrats, you won Rs.1000"
            }else if(que_num == 3){
                prize_info.children[1].textContent = "Congrats, you won Rs.3000"
            }else if(que_num == 4){
                prize_info.children[1].textContent = "Congrats, you won Rs.5000"
            }else if(que_num == 5){
                prize_info.children[1].textContent = "Congrats, you won Rs.10000"
            }else if(que_num == 6){
                prize_info.children[1].textContent = "Congrats, you won Rs.20000"
            }else if(que_num == 7){
                prize_info.children[1].textContent = "Congrats, you won Rs.40000"
            }else if(que_num == 8){
                prize_info.children[1].textContent = "Congrats, you won Rs.80000"
            }else if(que_num == 9){
                prize_info.children[1].textContent = "Congrats, you won Rs.160000"
            }else if(que_num == 10){
                prize_info.children[1].textContent = "Congrats, you won Rs.320000"
            }else if(que_num == 11){
                prize_info.children[1].textContent = "Congrats, you won Rs.640000"
            }else if(que_num == 12){
                prize_info.children[1].textContent = "Congrats, you won Rs.1250000"
            }else if(que_num == 13){
                prize_info.children[1].textContent = "Congrats, you won Rs.2500000"
            }else if(que_num == 14){
                prize_info.children[1].textContent = "Congrats, you won Rs.5000000"
            }
}

quit_btn.onclick = ()=>{
    window.location.reload();
}
play_again_btn.onclick = ()=>{
    prize_info.style.display = 'none';
}