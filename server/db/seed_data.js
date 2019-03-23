use scoreboard;
db.dropDatabase();

db.entries.insertMany([
  {name: 'Steve',
  clicks: 40,
  time:100,
  difficulty: "easy"
  },

  {name: "Cathy",
  clicks: 60,
  time: 130,
  difficulty: "medium"
},
{name: 'Bob',
clicks: 50,
time:70,
difficulty: "hard"
},

{name: "Jennifer",
clicks: 20,
time: 130,
difficulty: "medium"
},
{name: 'Roger',
clicks: 10,
time:100,
difficulty: "easy"
},

{name: "Tim",
clicks: 25,
time: 130,
difficulty: "hard"
},
{name: 'Stevo',
clicks: 10,
time:100,
difficulty: "easy"
},

{name: "Charlie",
clicks: 80,
time: 110,
difficulty: "hard"
}

])
