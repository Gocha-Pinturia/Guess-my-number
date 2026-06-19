Project Requirements

Figma:
https://www.figma.com/design/zNJmtOWHaVCBjCIJgjgkAL/Untitled?node-id=2-16&t=blZV811zHJrnwPil-1

1. Random Number Generation
When the game loads, generate a random number between 1 and 20.


Save the number to be used for comparisons.


2. Input Field
Provide an <input type="number"> where the player can enter a number between 1 and 20.


3. Check Button
Add a "Check" button.


When clicked, it should:


Read the value from the input.


Compare it with the secret number.


Show feedback:


"📈 Too high!" if guess is too high.


"📉 Too low!" if guess is too low.


"🎉 Correct Number!" if guess is correct.


4. Score System
Start with a score of 20.


Each incorrect guess decreases the score by 1.


If score reaches 0, display "💥 You lost the game!".


5. Feedback Message
Display messages dynamically in a <p class="message">...</p> element.


Change the message based on the result of each guess.


6. Correct Guess Styling
If the guess is correct:


Change the background color of the page.


Reveal the secret number in the UI.


7. High Score
Keep track of the highest score across sessions using a highscore variable.


Update it if the current score is higher after a correct guess.


8. Play Again Button
Add a "Play Again" button.


When clicked:


Reset the score to 20.


Generate a new secret number.


Reset messages, background color, input, and displayed number.
9. Game Should Stop After Correct Guess
When the user guesses the correct number:


Disable the Check button so the user can’t guess again.


Disable the input field so no more numbers can be entered.


This ensures the game ends and does not continue until "Play Again" is clicked.

