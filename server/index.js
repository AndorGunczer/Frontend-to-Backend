const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; // AUTOSET BY HOSTING SERVICE OR SET TO 3000 for local hosting

app.get('/', (req, res) => {
    res.send("Try /api as path");
    console.log("Directed user to /api path");
});

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});