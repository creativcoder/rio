import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
    if(err) {
        console.log("Oops! Something bad happened");
    }
    console.log(`Rio🗦🐤 @ localhost:${PORT}`)
});