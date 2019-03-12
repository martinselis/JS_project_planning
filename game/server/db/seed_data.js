use scoreboard;
db.dropDatabase();

<<<<<<< HEAD
db.entries.insertMany([
{name: 'Steve',
clicks: 40,
time:100
},

{name: "Cathy",
clicks: 60,
time: 130
}

])
=======
db.entry.insertMany([
  {
    name: 'Steve',
    clicks: 45,
    time: 100
  },
  {
    name: 'Cathy'
    clicks: 64,
    time: 250
  },
  {
    name: 'Andy'
    clicks: 30,
    time: 45
  },
]);
>>>>>>> f398a7ee6046e1ad99b3d14ebfd915c4d36b3e4f
