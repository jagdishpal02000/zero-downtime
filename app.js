const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/**
 * Where you want to upload files need to use upload.single('file') middleware.
 * Where you just want req.body data need to use forms.array() middleware if data is passed with header  'content-type': 'multipart/form-data;
 *
 */

app.get("/", (req, res) => {
  res.send("Welcome to APIs with docker 1");
});

app.get("/health", (req, res) => {
  res.json({ message: "server is working with zero downtime test 1" });
});

module.exports = app;
