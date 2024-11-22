var questions = [
  // Childhood
  "What was your favorite childhood game?",
  "What's the most creative thing you built as a kid?",
  "Did you have any funny nicknames growing up?",

  // Embarrassing moments (funny way)
  "What's your funniest 'oh no, not again!' moment?",
  "Have you ever tripped or fallen in public in a hilarious way?",
  "Tell us about a time you accidentally said the wrong thing and it turned out funny?",

  // Random Fun
  "If you could have any superpower, what would it be and why?",
  "What fictional world would you love to visit?",
  "You win the lottery! What's the first thing you buy (besides the necessities)?",
  "What's the weirdest talent you (or someone you know) possesses?",
  "What's the most useless thing you've ever mastered?",
  "What board game always turns into a hilarious competition?",

  // Random Fun (continued)
  "What's the most embarrassing song on your playlist?",
  "What's a conspiracy theory you secretly find interesting?",
  "If you could have a pet mythical creature, what would it be?",
  "What's the funniest movie quote you can remember?",
  "What's a skill you wish you could master in an instant?",

// Serious

  "What's one thing you're really passionate about (outside of work)?",
  "What's a cause you truly believe in?",
  "What's the biggest life lesson you've learned so far?",
  "What advice would you give your younger self?",
  "What's your proudest accomplishment (outside of work)?",
  "What historical figure do you find most inspiring and why?",
  "What's one challenge you're currently trying to overcome?",
  "What does your dream future look like?",
  "What's something you're incredibly grateful for?",
  "What fictional character do you most identify with and why?",
  "What historical event do you find most fascinating?",
  "What's a cause you'd love to volunteer your time for?",
  "What quote inspires you to keep going?",
  "What does success mean to you?",
  "What's one fear you're working on overcoming?",
  "What historical event do you think has had the biggest impact on the world?",
  "What's a cause you're passionate about, even if it's not widely known?",
  "What historical event do you think will be most studied in the future?",
  "What does living a meaningful life mean to you?",
  "What keeps you optimistic about the future?",
  "What's the biggest challenge you've helped someone overcome?",
  "What's one positive change you'd like to see in your community?",
  "What historical figure do you find most misunderstood and why?",
  "What does personal growth mean to you?",
  "What keeps you motivated in life?",
  "What's the most valuable lesson you've learned from a mistake?",

// Travel
  "Dream vacation destination (anywhere in the world)?",
  "Best travel experience you've ever had?",
  "Funniest or most unexpected thing that happened on a trip?",
  "What's the one travel tip you swear by?",
  "Beach vacation, mountains, or city exploration? Why?",
  "What hidden gem (city, town, or natural wonder) would you recommend?",
  "Best travel souvenir you've ever brought back?",
  "Do you prefer to travel spontaneously or meticulously plan everything?",
  "What's the one cultural experience that left a lasting impression on you?",
  "Beach vacation with friends, romantic getaway, or solo adventure trip? Why?",
  "What's the most breathtaking natural landscape you've ever seen?",
  "What travel stereotype do you find most amusing (or annoying)?",
  "Have you ever gotten lost in a new city (and how did you find your way back)?",
  "What's one travel essential you never leave home without?",
  "What cultural experience are you most looking forward to having someday?",
  "What hidden gem (local park, museum, etc.) would you recommend in your city?",
  "Describe the most unexpected kindness you've received while traveling.",
  "What's the funniest thing that got lost in translation on a trip?",
  "What travel tip do you swear by that most people wouldn't expect?",
  "Imagine you have unlimited travel funds. Where would you go first and why?",
  "What's the most delicious local food you've tried on a trip?",
  "Describe a cultural experience that challenged your perspective in a positive way.",
  "What's the funniest souvenir you've ever picked up on a trip?",
  "What travel hack have you learned from experience that most people wouldn't know?",
  "Imagine you could teleport anywhere in the world for 24 hours. Where would you go and why?",

  // Creativity
  "If you could design your own amusement park ride, what would it be like?",
  "What's the silliest invention you can think of that might be surprisingly useful?",
  "Design your own flavor of potato chips and describe the crazy flavor combination!",

  // Miscellaneous Fun
  "Share a funny story about a time you got tongue-tied.",
  "What's the best way to unwind after a long day?",
  "Can you share a funny typo or autocorrect fail that happened to you?",
  "What's the best way to spend a rainy day indoors?",

// Date Night (Couples)
  "What's one thing about our relationship that makes you really happy?",
  "What's your favorite memory of us together?",
  "Is there a place you've always wanted to visit together?",
  "What small habit of mine do you find the most endearing?",
  "What's one thing you admire about me that I might not know?",
  "What's the best date we've ever had, in your opinion?",
  "If we could take a dream vacation, where would we go and what would we do?",
  "What do you think makes us a good team?",
  "Is there a hobby or activity you'd like us to try together?",
  "If we had a free day with no responsibilities, how would you want to spend it?",
  "What's one thing you'd like us to do more often as a couple?",
  "What's a silly or funny moment we've shared that still makes you laugh?",
  "If you could describe our relationship in three words, what would they be?",
  "What's a small thing I do that makes you feel loved?",
  "What do you think our life will look like in five years?",
  "If we wrote a book about our love story, what would the title be?",
  "What's one thing we can work on together to strengthen our relationship?",
  "What's a quality you think we bring out in each other?",
  "What's a dream or goal you'd love for us to accomplish together?",
  "If we could relive any moment from our time together, what would it be?",
  "What song reminds you of us and why?",
  "What's your favorite inside joke we share?",
  "Is there a skill or hobby you'd like to teach me someday?",
  "What's a random memory of us that pops into your head often?",
  "If we were to create a 'date night' tradition, what would it be?",
  "What's a piece of advice you'd give to a new couple starting out?",
  "What was the moment you first felt a strong connection between us?",
  "What's something you'd love to tell future 'us' about our current relationship?",
  "If we could only eat one type of cuisine for all future date nights, what would it be?",
  "What's a surprising way you've seen me grow since we've been together?",

];

var allQuestions = [...questions];

function newQuestion() {
  var randomNumber = Math.floor(Math.random() * allQuestions.length);
  document.getElementById("questionDisplay").innerHTML =
    allQuestions[randomNumber];
}
