'use strict';

function isAnswerCorrect(question, userAnswer) {
    return question === userAnswer;
};

function countCorrectAnswers(questions, userAnswers) {
    let countCorrectAnsw = 0;
    for (const question of questions){
        for (const userAnser of userAnswers){
            if (question.id === userAnser.questionId && question.correctAnswer === userAnser.answer){
                countCorrectAnsw++;
                break;
            };
        };
    };
    return countCorrectAnsw;
};

function calculatePercentage(correctCount, totalQuestions) {
    return correctCount/totalQuestions*100;
};

function getResultMessage(percentage) {
    let resultMessage;
    if (percentage >= 60){
        resultMessage = 'You passed';
    } else {
        resultMessage = 'Keep practicing';
    };
    return resultMessage;
};

function createQuizResult(questions, userAnswers) {
    const countCorrectAnsw = countCorrectAnswers(questions, userAnswers);
    const percentage = calculatePercentage(countCorrectAnsw, questions.length);
    return {
        'correctCount': countCorrectAnsw,
        'totalQuestions': questions.length,
        'percentage': percentage,
        'message': getResultMessage(percentage)
    };
};

const questions = [
  { id: 1, correctAnswer: 'B' },
  { id: 2, correctAnswer: 'A' },
  { id: 3, correctAnswer: 'D' },
  { id: 4, correctAnswer: 'C' },
];

const userAnswers = [
  { questionId: 1, answer: 'B' },
  { questionId: 2, answer: 'C' },
  { questionId: 3, answer: 'D' },
  { questionId: 4, answer: 'C' },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));