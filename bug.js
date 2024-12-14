const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // Here should be a proper error handling
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});