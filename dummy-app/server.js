const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.send('pong');
});

app.post('/api/echo', (req, res) => {
    res.json({ received: req.body });
});

const port = 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://localhost:${port}`);
});
