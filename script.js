// Alphabets A-Z with animals
const alphabets = [
    {letter: "A", animal: "A.png"},
    {letter: "B", animal: "B.png"},
    {letter: "C", animal: "C.png"},
    // ... up to Z
];

const alphabetContainer = document.getElementById("alphabet-cards");

alphabets.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${item.letter}</h3>
        <img src="assets/images/${item.animal}" alt="${item.letter}">
        <audio id="audio-${item.letter}" src="assets/audio/${item.letter}.mp3"></audio>
    `;
    card.addEventListener("click", () => {
        document.getElementById(`audio-${item.letter}`).play();
    });
    alphabetContainer.appendChild(card);
});

// Numbers 1-100
const numberContainer = document.getElementById("number-cards");
for(let i=1; i<=100; i++){
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${i}</h3>
        <audio id="audio-${i}" src="assets/audio/${i}.mp3"></audio>
    `;
    card.addEventListener("click", () => {
        document.getElementById(`audio-${i}`).play();
    });
    numberContainer.appendChild(card);
}

// English counting practice
function startCounting(){
    const output = document.getElementById("count-output");
    output.innerHTML = "";
    for(let i=1; i<=10; i++){
        const audio = document.createElement("audio");
        audio.src = `assets/audio/${i}.mp3`;
        audio.autoplay = true;
        output.appendChild(audio);
    }
}
