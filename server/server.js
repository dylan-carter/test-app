
// -------------------------
// ---- (SET UP SCRIPT) => {
// -------------------------

// A) LOAD MODULES - BUILT IN
// -------------------------
const path = require('path');
const express = require('express');
// -------------------------

// B) LOAD MODULES - APP SPECIFIC
// -------------------------

// -------------------------

// C) LOAD MODULES - APP SPECIFIC
// -------------------------

// -------------------------



// -------------------------
// ---- };
// -------------------------



// ESTABLISH LISTENING SERVER
// -------------------------
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));
app.listen(port, () => {
    console.log(`Server has been established on port ${port}`);
});
// -------------------------
