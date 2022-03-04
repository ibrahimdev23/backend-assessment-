
let globalId = 1;
let toDoList = []

const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});




app.get('/api/fortune', (req, res) => {  
  const fortunes = [
        "A lifetime of happiness lies ahead of you.", 
        "A pleasant surprise is waiting for you.", 
        "Accept something that you cannot change, and you will feel better.", 
       "Everywhere you choose to go, friendly faces will greet you.",
        "Miles are covered one step at a time.", 
  ]

  let randomNum = Math.floor(Math.random() * fortunes.length)

  let randomFortune = fortunes[randomNum]
  res.status(200).send(randomFortune)

})

// app.post('/api/showlist', (req, res) => {
//   const {item} = req.body

  // const newItem = {
  //   item, 
  //   id: globalId
  // }
  // toDoList.push(newItem)
//   res.status(200).send(toDoList)

// }

// app.delete('/api/showlist/:id', (req, res) => {
//   const {id} 
  
//   const {id} = req.params;

//   const index = taskList.findIndex(e => e.id === +id)

//   taskList.splice(index, 1)
  
//   res.status(200).send(taskList)
// })





app.listen(4000, () => console.log("Server running on 4000"));

