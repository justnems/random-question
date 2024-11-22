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

  // Would you rather...
  "Would you rather be able to fly or be invisible?",
  "Would you rather have super strength or super speed?",
  "Would you rather travel back in time or visit the future?",
  "Would you rather be able to talk to animals or read minds?",
  "Would you rather live in a giant treehouse or a luxurious underwater dome?",

  // This or That
  "Beach bum or mountain climber?",
  "Singing in the shower or dancing in the rain?",
  "Early morning sunrise or late-night stargazing?",
  "Reading a book or watching a movie?",
  "Team player or independent worker?",

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

// Food & Drinks
  "Favorite comfort food?",
  "What's the weirdest food combination you actually enjoy?",
  "Tell us about your worst (but funny) cooking disaster story!",
  "What cuisine would you love to try someday?",
  "Coffee, tea, or something else? Why?",
  "What's your go-to meal when you need a pick-me-up?",
  "Do you have any special family recipes you love?",
  "What's the most delicious thing you've ever eaten?",
  "Coffee brewing ritual or tea-making ceremony? Describe yours!",
  "If you could create a new flavor of ice cream, what would it be?",
  "What's the most challenging dish you've ever attempted to cook?",
  "Do you have any cultural food traditions you celebrate?",
  "What's your favorite childhood snack?",
  "If you could have a never-ending supply of one food, what would it be?",
  "What's the most exotic food you've ever tried (and did you like it)?",
  "What's the most memorable meal you've ever shared with loved ones?",
  "Do you have a favorite comfort food recipe you'd love to share (without measurements)?",
  "What's the most unique or interesting ingredient you've ever cooked with?",
  "If you could invent a new kitchen gadget, what would it do?",
  "What's your favorite way to enjoy a cup of coffee or tea (special additions, brewing method)?",

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

// Pop Culture
  "Favorite genre of TV shows to binge-watch?",
  "Guilty pleasure movie you secretly love?",
  "What book genre could you get lost in for hours?",
  "What's a musician you'd love to see live in concert?",
  "What kind of music gets you pumped up?",
  "What instrument have you always wanted to learn?",
  "Favorite childhood cartoon you still enjoy secretly?",
  "What fictional TV couple has the best relationship?",
  "What book series could you reread countless times?",
  "What's a song that always gets you singing along?",
  "What movie genre always makes you cry?",
  "What video game holds a special place in your memories?",
  "What's a movie you can watch over and over again without getting tired of it?",
  "What's the TV show that everyone should watch at least once?",
  "What fictional villain do you secretly admire (and why)?",
  "What's a book genre you completely avoid?",
  "Do you have a favorite podcast or audiobook you recommend?",
  "What's a classic book or video game you've never experienced but are curious about?",
  "What fictional villain do you find strangely relatable (and why)?",
  "What historical figure do you think would be a fantastic guest on a talk show?",
  "Do you have a favorite guilty pleasure song you secretly love to belt out?",
  "What fictional world would you love to have the soundtrack of in your daily life?",
  "What's a classic movie or TV show you've never seen but everyone keeps recommending?",
  "What fictional character's fashion sense do you secretly admire?",
  "What board game or card game adaptation of a movie/TV show would be amazing?",
  "Do you have a favorite artist or band you discovered recently?",
  "What's a song lyric that resonates deeply with you and why?",


// Other

  "What's a random fact you know that always impresses people?",
  "Early bird or night owl? Why?",
  "What's your favorite way to spend a free weekend?",
  "If you could learn a new language instantly, which would it be?",
  "What are you currently learning outside of work?",
  "What's your spirit animal and why?",
  "What historical period would you love to live in (if you could survive)?",
  "What's a hobby you'd love to try but haven't gotten around to yet?",
  "What's the best piece of advice you've ever received?",
  "What skill do you think is most underrated in today's world?",
  "If you could have dinner with any historical figure, who would it be?",
  "What are you most optimistic about for the future?",
  "What's a skill you're surprisingly good at that no one would guess?",
  "What's the one thing you would change about the world if you could?",
  "What fictional world would you love to have super powers in?",
  "If you could travel back in time and give your younger self one piece of advice, what would it be?",
  "What are you secretly curious about learning more about?",
  "What's the biggest challenge facing humanity today (and what can we do about it)?",
  "What unsolved scientific mystery fascinates you the most?",
  "What skill are you working on developing outside of work?",
  "If you could have a superpower that would make you a terrible superhero, what would it be?",
  "What fictional creature do you think might actually exist?",
  "What's the biggest personal risk you've ever taken (and what was the outcome)?",
  "What small act of kindness have you witnessed that brightened your day?",

  // Party Games
  "What's the board game you always win at?",
  "Have you ever participated in a hilarious game fail (explain!)",
  "What's your go-to karaoke song (if you're brave enough to admit it)?",
  "What's the board game that always brings out everyone's competitive spirit?",
  "Describe your dream charades act-out (person, place, or thing)",
  "What's the funniest thing you've ever seen happen during a game night?",

  // Creativity
  "If you could design your own amusement park ride, what would it be like?",
  "What's the silliest invention you can think of that might be surprisingly useful?",
  "Imagine you have a pet dragon. What wacky adventures would you have together?",
  "If you could create a new emoji, what would it represent?",
  "Design your own flavor of potato chips and describe the crazy flavor combination!",
  "Imagine you could build a giant sandcastle. What fantastical elements would it have?",
  

  // Miscellaneous Fun
  "What's the most interesting website you've stumbled upon recently?",
  "Share a funny story about a time you got tongue-tied.",
  "What's the best way to unwind after a long day?",
  "What's the most interesting fact you learned recently (completely random)?",
  "Can you share a funny typo or autocorrect fail that happened to you?",
  "What's the best way to spend a rainy day indoors?",
  

  

// Other (continued)

  "What historical mystery would you love to see solved?",
  "What's the one thing you're most proud of learning on your own?",
  "If you could have a superpower that wouldn't directly help you, but would benefit society, what would it be?",
  "What fictional language would you love to be able to speak fluently?",
  "What's the biggest challenge you've overcome in your life (doesn't have to be work-related)?",
  "What small act of kindness can make a big difference in someone's day?",


  // Party Games (continued)
  "What's the board game that sparks the most hilarious debates?",
  "Describe your dream dance move you'd love to bust out at a party.",
  "What's the funniest thing you've ever witnessed during a game of Pictionary?",

  // Creativity (continued)
  "Design your own board game concept and explain the rules!",
  "Imagine you have a pet robot. Describe its unique features and personality.",
  "Invent a new holiday and explain its traditions and how it would be celebrated.",

  // Miscellaneous Fun (continued)


// Serious (continued)



// Food & Drinks (continued)

  "What's the most delicious meal you've ever cooked for yourself (and what made it special)?",
  "Do you have a favorite childhood dessert you still crave?",
  "What's the most visually stunning dish you've ever seen?",
  "If you could open a restaurant with a unique theme, what would it be?",
  "What's the most heartwarming food tradition you celebrate?",

// Travel (continued)

  



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
