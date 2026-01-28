// Example Alphabet Game
function playAlphabetGame() {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G"];
    const randomLetter = alphabets[Math.floor(Math.random() * alphabets.length)];
    document.getElementById("game-output").innerHTML = `
        <p>Guess the Letter: <strong>${randomLetter}</strong></p>
        <audio controls>
            <source src="assets/audio/${randomLetter}.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    `;
}
