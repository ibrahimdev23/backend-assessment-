
   
const taskList = [];
let globalId = 1;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A good friendship is often more important than a passionate romance.",
      "A fresh start will put you on your way.",
      "Advice, when most needed, is least heeded.",
      "Believe it can be done.",
      "Do you know that the busiest person has the largest amount of time?",
      "Help! I’m being held prisoner in a chinese bakery!"
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  displayText: (req, res) => {
    const { text } = req.body;

    const newTask = {
      text,
      id: globalId
    }

    taskList.push(newTask);
    
    res.status(200).send(taskList)
  },

  deleteTask: (req, res) => {
    const {id} = req.params;

    const index = taskList.findIndex(e => e.id === +id)

    taskList.splice(index, 1)
    
    res.status(200).send(taskList)
  },



  getQuote: (req, res) => {
    const quotes = [
      "You can't be great if you don't feel great. Make exceptional health your number one priority.",
      "Impossible is just an opinion.",
      "If you think you are too small to make a difference, try sleeping with a mosquito.",
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
      "When I had nothing to lose, I had everything. When I stopped being who I am, I found myself.",
      "In the middle of every difficulty lies opportunity.",
    ];

    // choose random quote
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuotes = quotes[randomIndex];

    res.status(200).send(randomQuotes);
  },
}