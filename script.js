// JavaScript Code starts here 
              
              function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});



                        (function(){
                            // Functions
                            function functionBuildQuiz(){
                                // variable for value storage
                                const solution = [];

                                // each question...
                                questionSet.forEach(
                                (faceValue, questionCount) => {

                                    // variable to store the list of possible solutionOutput
                                    const solutionOutput = [];

                                    // and for each available answer...
                                    for(letter in faceValue.solutionOutput){

                                    // HTML radio button
                                    solutionOutput.push(
                                        `<label>
                                        <input type="radio" name="question${questionCount}" value="${letter}">
                                        ${letter} :
                                        ${faceValue.solutionOutput[letter]}
                                        </label>`
                                    );
                                    }

                                    // add this question and its solutionOutput to the solution
                                    solution.push(
                                    `<div class="slide">
                                        <div class="question"> ${faceValue.ask} </div>
                                        <div class="solutionOutput"> ${solutionOutput.join("")} </div>
                                    </div>`
                                    );
                                }
                                );

                                // finally combine our solution list into one string of HTML and put it on the page
                                quizContainer.innerHTML = solution.join('');
                            }

                            function showResults(){

                                // gather answer containers from our quiz
                                const answerContainers = quizContainer.querySelectorAll('.solutionOutput');

                                // keep track of user's solutionOutput
                                let numCorrect = 0;

                                // for each question...
                                questionSet.forEach( (faceValue, questionCount) => {

                                // find selected answer
                                const answerContainer = answerContainers[questionCount];
                                const selector = `input[name=question${questionCount}]:checked`;
                                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                                // if answer is correct
                                if(userAnswer === faceValue.bestResponse){
                                    // add to the number of correct solutionOutput
                                    numCorrect++;

                                    // color the solutionOutput green
                                    answerContainers[questionCount].style.color = 'lightgreen';
                                }
                                // if answer is wrong or blank
                                else{
                                    // color the solutionOutput red
                                    answerContainers[questionCount].style.color = 'red';
                                }
                                });

                                // show number of correct solutionOutput out of total
                                resultsContainer.innerHTML = `${numCorrect} out of ${questionSet.length}`;
                            }

                            function showSlide(n) {
                                slides[currentSlide].classList.remove('active-slide');
                                slides[n].classList.add('active-slide');
                                currentSlide = n;
                                if(currentSlide === 0){
                                previousButton.style.display = 'none';
                                }
                                else{
                                previousButton.style.display = 'inline-block';
                                }
                                if(currentSlide === slides.length-1){
                                nextButton.style.display = 'none';
                                submitButton.style.display = 'inline-block';
                                }
                                else{
                                nextButton.style.display = 'inline-block';
                                submitButton.style.display = 'none';
                                }
                            }

                            function showNextSlide() {
                                showSlide(currentSlide + 1);
                            }

                            function showPreviousSlide() {
                                showSlide(currentSlide - 1);
                            }

                            // Variables
                            const quizContainer = document.getElementById('quiz');
                            const resultsContainer = document.getElementById('results');
                            const submitButton = document.getElementById('submit');
                            const questionSet = [
                                    {
                                        ask: "Why so JavaScript and Java have similar name?",
                                        solutionOutput: {
                                        A:  "JavaScript is a stripped-down version of Java",
                                        B:  "JavaScript's syntax is loosely based on Java's",
                                        C:  "They both originated on the island of Java",
                                        D: "None of the above",
                                        },
                                        bestResponse: "B",
                                    },
                                    
                                    {
                                        ask: " When a user views a page containing a JavaScript program, which machine actually executes the script?",
                                        solutionOutput: {
                                        A:  " The User's machine running a Web browser",
                                        B:  "The Web server",
                                        C:  "They both originated on the island of Java",
                                        D: "A central machine deep within Netscape's corporate offices",
                                        },
                                        bestResponse: "A",
                                    },
                                    
                                    {
                                        ask: "Why so JavaScript and Java have similar name?",
                                        solutionOutput: {
                                        A:  "JavaScript is a stripped-down version of Java",
                                        B:  "JavaScript's syntax is loosely based on Java's",
                                        C:  "They both originated on the island of Java",
                                        D: "None of the above",
                                        },
                                        bestResponse: "A",
                                    },
                                    
                                    {
                                        ask: "Which one of these is a JavaScript package manager?",
                                        solutionOutput: {
                                        A: "Node.js",
                                        B: "TypeScript",
                                        C: "npm"
                                        },
                                        bestResponse: "C"
                                    },
                                    
                                    {
                                        ask: "Why so JavaScript and Java have similar name?",
                                        solutionOutput: {
                                        A:  "JavaScript is a stripped-down version of Java",
                                        B:  "JavaScript's syntax is loosely based on Java's",
                                        C:  "They both originated on the island of Java",
                                        D: "None of the above",
                                        },
                                        bestResponse: "A",
                                    },
                                    

                                    
                                    {
                                        ask: "Who invented JavaScript?",
                                        solutionOutput: {
                                        A: "Douglas Crockford",
                                        B: "Sheryl Sandberg",
                                        C: "Brendan Eich"
                                        },
                                        bestResponse: "c"
                                    },
                                ];


                                console.log(questionSet);

                            // Kick things off
                            functionBuildQuiz();

                            // Pagination
                            const previousButton = document.getElementById("previous");
                            const nextButton = document.getElementById("next");
                            const slides = document.querySelectorAll(".slide");
                            let currentSlide = 0;

                            // Show the first slide
                            showSlide(currentSlide);

                            // Event listeners
                            submitButton.addEventListener('click', showResults);
                            previousButton.addEventListener("click", showPreviousSlide);
                            nextButton.addEventListener("click", showNextSlide);
                            })();

                        