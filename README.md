# memory_matching_game

This is a memory game built using JavaScript, Node.JS, Express.JS, MongoDB, HTML5, CSS3.

Game is written using OOP principles, Publish-Subscribe pattern and Model-View relationship. It's a memory game where you  have to match two identical pictures until you've found all pairs. Difficulty level is adjustable which increases count of pictures to match. When game is completed, it saves your click-count # and time to leaderboard (MongoDB).

Installation:

First, install MongoDb. Use official documentation to see how to install it.

Then:

```
npm install
createdb scoreboard
mongo < server/db/seed_data.js -> this will seed the database with some entries in leaderboard.
mongod -> runs database
npm run build
npm start
```

With more time, I would do the following:

1. Refactor, refactor, refactor. Some of the code is super lengthy and many functions do way too much.
2. Update CSS to scale up/down based on screen size.
3. Change how the cards are hidden/made visible. Cards are hidden taking into consideration that there are only 2 of them "visible" at a time. With setTimeout being used, if user clicks too fast, array is larger than designed for and this may break the game.
