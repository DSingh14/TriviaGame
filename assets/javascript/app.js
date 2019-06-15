$(document).ready(function () {
    var questions = [{
        question: "Who is president of USA?",
        answers: ["Bush", "Trump", "Obama", "Myself"],
        correctAnswer: "Trump"
    },
    {
        question: "How many quarters are there in an NFL football game?",
        answers: [4, 9, 23, 21],
        correctAnswer: 4
    },
    {
        question: "Which was on the air first?",
        answers: ["Mtv", "ABC", "NBC", "CNN"],
        correctAnswer: "NBC"
    },
    {
        question: "Nickel has how many Pennies?",
        answers: [100, 50, 10, 5],
        correctAnswer: 10
    },
    {
        question: "Distance of SMU to Frisco in miles?",
        answers: [10, 25, 30, 27],
        correctAnswer: 27
    },
    {
        question: "Diamond main composition is?",
        answers: ["Nickel", "Carbon", "Helium", "Iron"],
        correctAnswer: "Carbon"
    },
    {
        question: "Diamond main composition doesn't have?",
        answers: ["methane", "Carbon", "Hydrogen", "oxygen"],
        correctAnswer: "oxygen"
    },
    {
        question: "The single “Papa Don’t Preach” came from which Madonna album?",
        answers: ["Ocean", "LifeValue", "True Blue", "Gun&Roses"],
        correctAnswer: "True Blue"
    },
    {
        question: "How is 77 represented in Roman numerals?",
        answers: ["XXXD", "LXXVII", "CDIII", "DDIX"],
        correctAnswer: "LXXVII"
    },
    {
        question: "Which swimming stroke is named after an insect?",
        answers: ["Backstroke", "Back Butterfly", "Free Bird", "Butterfly"],
        correctAnswer: "Butterfly"
    }]
    // hidden elements when page start
    $("#countdown").hide();
    $("#question").hide();
    $(".results").hide();

    // Declare Variables
    var correctCount = 0;
    var incorrectCount = 0;
    var timerCount = 90;//unit in sec
    var intervalId;
    var currentQ = 0;


    //function to show
    function showQuestions() {
        $("#countdown").show();
        $("#question").show();
        $("#game-done").show();
        pq(currentQ);
    }

    //function to hide
    function hide() {
        $("#countdown").hide();
        $("#question").hide();
        $("#game-done").hide();
        $("#button").hide();

    }

    //click start button
    $("#game-start").on("click", function () {
        $("#game-start").hide();
        showQuestions();
        countdownTimer();
    });

    // display question and answers
    function pq(a) {
        $("#question").empty();
        $("#button").empty();
        var h1 = $("<h1>");
        h1.text(questions[a].question)
        $("#question").append(h1)
        var answersArray = questions[a].answers;
        var correctAnswer = questions[a].correctAnswer;

        for (var i = 0; i < answersArray.length; i++) {
            var button = $("<button>");
            button.text(answersArray[i]);
            button.addClass("btn btn-primary btn-lg  shadow p-3 mb-5 bg-secondary rounded btn-trivia");
            button.attr("data-answer", answersArray[i])
            button.attr("data-correctanswer", correctAnswer)
            $("#button").append(button);
        }
    }
    // function for timer
    function countdownTimer() {
        intervalId = setInterval(decrement, 1000);
    }
    //// function to decrement timer
    function decrement() {
        timerCount--;
        $('#timer').html(" " + timerCount + " " + "seconds");
        if (timerCount === 1) {
            $('#timer').html(" " + timerCount + " " + "second");
        }
        else if (timerCount === 0) {
            stop();
            hide();
            displayResult();
        }
    }


    // match answers
    $(document).on("click", ".btn-trivia", function () {
        var choosenAnswer = $(this).attr('data-answer');
        var userCorrectAnswer = $(this).attr("data-correctanswer");
        console.log(userCorrectAnswer);
        console.log(choosenAnswer);
        if (userCorrectAnswer === choosenAnswer) {
            console.log("yeiiiiii");
            correctCount++;
            currentQ++
            pq(currentQ)
        } else {
            incorrectCount++;
            currentQ++
            pq(currentQ);
            console.log('noooooooo');
        }
    });
    //clicking done button
    $("#game-done").on("click", function () {
        $("#game-start").hide();
        hide();
        displayResult();
    });
    //function to clear timer
    function stop() {
        clearInterval(intervalId);
    }
    //function for showing result
    function displayResult() {
        $(".results").show();
        wrongAnswers = (10 - correctCount);
        $("#correctScore").text("Correct Answers: " + "" + correctCount);
        $("#wrongScore").text("Incorrect Answers:" + "" + wrongAnswers);
    }
});



// var j = 0


// if(j < 10){
//     pq(1);
//     setInterval(function(){
//         j++;
//     }, 1000)

// 
