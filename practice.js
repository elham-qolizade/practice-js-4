function generatePattern(rowNumber, colNumber) {
    for (let i = 0; i < rowNumber; i++) {
        let line = "";
        for (let j = 0; j < colNumber; j++) {
            if (i === 0 || j === colNumber - 1 || (i % 2 === 0 && j % 2 === 0)) {
                line += "*";
            }
            else if (i === 2) {
                line += j === 3 ? 4 : "*"
            }
            else if (i === 3) {
                line += (j === 2 || j === 4) ? "*" : j + 1
            }
            else {
                line += j + 1;
            }
        }
        console.log(line);
    }
}


generatePattern(5, 5);
