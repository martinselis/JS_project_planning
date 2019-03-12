use scoreboard;
db.dropDatabase();

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
