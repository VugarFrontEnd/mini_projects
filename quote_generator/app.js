const quotes = [
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    author: "Albert Einstein",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    author: "Bernard M. Baruch",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
    author: "William W. Purkey",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "Dr. Seuss",
  },
  {
    quote:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author: "J.K. Rowling",
  },
  {
    quote:
      "“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself...'",
    author: "C.S. Lewis",
  },
  {
    quote:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    author: "Maya Angelou",
  },
  {
    quote:
      "“A friend is someone who knows all about you and still loves you.” ",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "Andre Gide",
  },
  {
    quote:
      "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
    author: "H. Jackson Brown Jr.",
  },
  {
    quote:
      "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
    author: "J.K. Rowling",
  },
  {
    quote:
      "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",
    author: "Jane Austen",
  },
  {
    quote:
      "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
    author: "Albert Einstein",
  },
];

const button = document.querySelector("div.button > .btn");

button.addEventListener("click", () => {
  const quote = document.querySelector("div.quote");
  const author = document.querySelector("div.author");
  let random = Math.round(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
});
