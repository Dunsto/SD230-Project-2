//first calc build don't upload to project 2

function buildProblemArray1(stringInput) {

    let index = 0;
    let problemArray = new Array(); //indexed problem
    problemArray[0] = '';

    //i = index of string problem
    // returns an array that looks like this
    // problemArray[num, operator, num, operator, num, operator]
    for (let i = 0; i < stringInput.length; i++) {
        if (stringInput[i] == '=') {
            return problemArray;
        } else if (stringInput[i] == '*' || stringInput[i] == '/' || stringInput[i] == '+' || stringInput[i] == '-') {
            index++;
            problemArray[index] = stringInput[i];
            index++;
            problemArray[index] = '';
        } else {
            problemArray[index] = problemArray[index] + '' + stringInput[i];
        }
    }
}

function solveProblemArray1(problemArray) {
    let result;

    for (let i = 0; i < problemArray.length; i++) {
        switch (problemArray[i]) {
            case '*':

                result = parseInt(problemArray[i - 1]) * parseInt(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
            case '/':

                result = parseInt(problemArray[i - 1]) / parseInt(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
            case '+':

                result = parseInt(problemArray[i - 1]) + parseInt(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
            case '-':

                result = parseInt(problemArray[i - 1]) - parseInt(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
        }
    }
    return problemArray;
}