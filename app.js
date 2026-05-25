// grab the button of quotes
let quoteBtn = document.getElementById("newQuoteBtn");
console.log(quoteBtn);

// all the quotes
const quotes = [
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", tag: "wisdom" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", tag: "motivation" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", tag: "persistence" },
  { text: "Life is what happens when you are busy making other plans.", author: "John Lennon", tag: "life" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", tag: "work" },
  { text: "In three words I can sum up everything I have learned about life — it goes on.", author: "Robert Frost", tag: "life" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", tag: "courage" },
  { text: "Whether you think you can or you think you can't, you are right.", author: "Henry Ford", tag: "mindset" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", tag: "happiness" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West", tag: "life" },
  { text: "Success is not final, failure is not fatal — it is the courage to continue that counts.", author: "Winston Churchill", tag: "courage" },
  { text: "Believe you can and you are halfway there.", author: "Theodore Roosevelt", tag: "mindset" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", tag: "inspiration" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa", tag: "kindness" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt", tag: "persistence" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead", tag: "humor" },
  { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats", tag: "action" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt", tag: "wisdom" },
  { text: "If life were predictable it would cease to be life and be without flavor.", author: "Eleanor Roosevelt", tag: "life" },
  { text: "If you look at what you have in life, you will always have more.", author: "Oprah Winfrey", tag: "gratitude" },
];

// this is the easy way to display the quote randomly
// so when someone click on the button
// let currentIndex = 0;
// quoteBtn.addEventListener("click", function(){
//     const quote = quotes[currentIndex]; // starting from index 0 

    // display the quote
    // document.getElementById("quoteText").textContent = quote.text;
    // document.getElementById("quoteAuthor").textContent = "- " + quote.author;
    // document.getElementById("quoteTag").textContent = quote.tag;

    // currentIndex++; // move to the next quote

    // when reaching to zero start from the beginning
    // if(currentIndex >= quotes.length){
    //     currentIndex = 0;

    // }



// })


// a better way to display the quote randomly
quoteBtn.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById("quoteText").textContent = quote.text;
    document.getElementById("quoteAuthor").textContent = "- " + quote.author;
    document.getElementById("quoteTag").textContent = quote.tag;
});