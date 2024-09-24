const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
//middleware
app.use(morgan(`dev`)) 

//route handlers
app.get('/greetings/:username', (req, res) => {
  const username = req.params.username;
 return res.send(`Hello there, ${username}!`)
})


//listen port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 2. Rolling the Dice
app.get('/roll/:number', (req, res) => {
  const number = parseInt(req.params.number);

  // Checking if the parameter is a number
  if (isNaN(number)) {
      res.send("You must specify a number.");
  } else {
      // pick a random number between 0 and 6
      const randomNumber = Math.floor(Math.random() * (number + 1));
      res.send(`You rolled a ${randomNumber}.`);
  }
});


// 3. I Want THAT One!
app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
});

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
const foundItem = collectibles[index]

if(!foundItem){
  return res.send('This item is not yet in stock. Check back soon!')
} else {
  return res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
}


//   // Validation: Check if the index is valid
//   if (isNaN(index) || index < 0 || index >= collectibles.length) {
//       res.send("This item is not yet in stock. Check back soon!");
//   } else {
//       const item = collectibles[index];
//       res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
//   }
// });



