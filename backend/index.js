const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect('mongodb+srv://explorroad:unqHVpzpUB73iEHU@douyin-trending.hezprvp.mongodb.net/?retryWrites=true&w=majority&appName=douyin-trending')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
