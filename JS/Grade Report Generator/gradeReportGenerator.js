function getLetterGrade(score) {
    let letter_score;
    if (score < 60) {
        letter_score = 'F';
    } else if (score < 70) {
        letter_score = 'D';
    } else if (score < 80) {
        letter_score = 'C';
    } else if (score < 90) {
        letter_score = 'B';
    } else if (score <= 100) {
        letter_score = 'A';
    };
    return letter_score;
};

function hasPassed(score) {
    return score >= 60;
};

function getFeedback(grade) {
    let text_grade;
    switch (grade) {
        case 'A':
            text_grade = "Excellent work";
            break;
        case 'B':
            text_grade = "Good work";
            break;
        case 'C':
        case 'D':
            text_grade = "You passed";
            break;
        case 'F':
            text_grade = "Keep practicing";
            break;
    };
    return text_grade;
};

function createGradeReport(name, score) {
    let grade = getLetterGrade(score);
    return {
        "name": name,
        "score": score,
        "grade": grade,
        "passed": hasPassed(score),
        "feedback": getFeedback(grade)
    };
};

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));