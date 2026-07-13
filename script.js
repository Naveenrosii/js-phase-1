function numberGuessingGame() {

    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;

    console.log("🎮 Welcome to the Number Guessing Game!");
    console.log("Guess a number between 1 and 10.");
    console.log("You have 3 attempts.");

    while (attempts > 0) {

        let guess = Number(prompt("Enter a number between 1 and 10"));

        if (guess === secretNumber) {
            console.log("🎉 Congratulations! You guessed the correct number.");
            return;
        } else {

            attempts--;

            if (attempts > 0) {
                if (guess < secretNumber) {
                    console.log("📉 Too low!");
                } else {
                    console.log("📈 Too high!");
                }

                console.log(`Attempts remaining: ${attempts}`);
            }
        }
    }

    console.log(`😢 Game Over!`);
    console.log(`The correct number was ${secretNumber}`);
}

numberGuessingGame();
