// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hii from Node.js App!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
/ /   t e s t i n g   f i x e d   s e c r e t s  
 