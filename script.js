const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const response = await fetch('https://raw.githubusercontent.com/EdLetshuma/Website-Power-Bi/master/credentials.json');
        const credentials = await response.json();
        const user = credentials.find(user => user.username === username && user.password === password);
        if (user) {
            res.send('Login successful');
        } else {
            res.send('Invalid login credentials');
        }
    } catch (error) {
        res.status(500).send('Error fetching credentials');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
