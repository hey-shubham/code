const quotes = [
  "Stay hungry, stay foolish. - Steve Jobs",
  "Do what you can, with what you have. - Theodore Roosevelt",
  "Dream big and dare to fail. - Norman Vaughan",
  "Turn your wounds into wisdom. - Oprah Winfrey",
  "Action is the foundational key to success. - Pablo Picasso",
  "What we think, we become. - Buddha",
  "Happiness depends upon ourselves. - Aristotle",
  "Knowledge is power. - Francis Bacon",
  "Well done is better than well said. - Benjamin Franklin",
  "If you judge people, you have no time to love them. - Mother Teresa",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "Whatever you are, be a good one. - Abraham Lincoln",
  "Try to be a rainbow in someone's cloud. - Maya Angelou",
  "Do one thing every day that scares you. - Eleanor Roosevelt",
  "Wherever you go, go with all your heart. - Confucius",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "That which does not kill us makes us stronger. - Friedrich Nietzsche",
  "He who has a why can endure any how. - Friedrich Nietzsche",
  "You must be the change you wish to see. - Mahatma Gandhi",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Stay consistent. - James Clear"
];

// function repeat(){
// const text = document.getElementById("quote");
// const index = Math.floor(Math.random()*quotes.length);   
// text.textContent = quotes[index];
// }

// setInterval(repeat,3000);


// for background random color
function getRandomGradient() {
    const colors = ["#ff9a9e", "#fad0c4", "#a18cd1", "#fbc2eb", "#84fab0", "#8fd3f4"];
    
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    
    return `linear-gradient(45deg, ${color1}, ${color2})`;
}

setInterval(() => {
    document.body.style.background = getRandomGradient();
}, 2000);


const button = document.querySelector('button');
button.addEventListener('click', ()=>{

const text = document.getElementById("quote");

const index = Math.floor(Math.random()*quotes.length);   
text.textContent = quotes[index];
})