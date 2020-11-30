const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("./dist/itla-med"));
app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/itla-med/" })
);

app.listen(PORT, () => console.log(`Server up::${PORT}`));
