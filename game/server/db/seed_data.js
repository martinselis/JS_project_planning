use scoreboard;
db.dropDatabase();
db.scoreboard.insertMany ([
{name: 'Steve',
clicks: 40,
time:100
},

{name: "Cathy",
clicks: 60,
time: 130
}

])
