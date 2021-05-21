const express = require("express");

const app = express();

const facilitatorList = [
  { name: "santhosh", status: "done" },
  { name: "kumar", status: "notdone" },
  { name: "someone", status: "inprogress" },
  { name: "anyone", status: "done" },
];

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/api/getFacilitatorList", (req, res) => res.json(facilitatorList));
app.listen(8000, () => console.log("listening on port 8000..."));
