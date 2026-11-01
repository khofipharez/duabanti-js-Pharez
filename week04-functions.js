function isValidScore(score) {
    return score >= 0 && score <= 100;
}

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function formatCedis(amount) {
    return `GH₵${amount.toFixed(2)}`;
}

function formatPercentage(score) {
    return `${score}%`;
}

let scores = [72, 45, 91, 85, 105, -5];

if (process.argv.length > 2) {
    scores = process.argv.slice(2).map(Number);
}

for (let i = 0; i < scores.length; i++) {
    let currentScore = scores[i];
    if (isValidScore(currentScore)) {
        let grade = getGrade(currentScore);
        console.log(`Score: ${currentScore} - Grade: ${grade}`);
    } else {
        console.log(`Invalid score: ${currentScore}`);
    }
}

console.log(`Average: ${calculateAverage(scores)}`);

let passedCount = 0;
let failedCount = 0;

for (let i = 0; i < scores.length; i++) {
    let currentScore = scores[i];
    if (isValidScore(currentScore)) {
        let grade = getGrade(currentScore);
        if (grade === "F") {
            failedCount++;
        } else {
            passedCount++;
        }
    }
}

console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);