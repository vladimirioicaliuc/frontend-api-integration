const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Client } = require("cassandra-driver");

let articles = require("./articles.json");

const app = express();

const PORT = 3000;

const cassandraClient = new Client({
  contactPoints: ["localhost:9042"], // Cassandra node(s)
  localDataCenter: "datacenter1",
  keyspace: "articles_db",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const updateArticlesFile = (content) =>
  fs.writeFile("./articles.json", JSON.stringify(content, null, 2), (err) => {
    if (err) throw err;
    console.log("Articles file has been updated.");
    articles = content;
  });

app.get("/articles2", async (req, res) => {
  try {
    cassandraClient
      .connect()
      .then(() => console.log("Connected to Cassandra"))
      .catch((err) => console.error("Error connecting to Cassandra", err));
    const query = "SELECT * FROM articles_db.articles";
    const result = await cassandraClient.execute(query);

    res.json(result.rows);
  } catch (err) {
    console.error("Error retrieving products", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/articles", (req, res) => {
  return res.json(articles);
});

app.get("/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return res.status(404).send(`Article with ID ${articleId} not found.`);
  }

  return res.json(article);
});

app.post("/articles", (req, res) => {
  const { price, title, imageUrl } = req.body;

  if (
    !price ||
    typeof price !== "number" ||
    !title ||
    typeof title !== "string" ||
    !imageUrl ||
    typeof imageUrl !== "string"
  ) {
    return res.status(400).send("Missing or invalid data.");
  }

  const id = uuid.v4();
  const newArticle = { id, price, title, imageUrl };
  const newArticles = [...articles, newArticle];

  try {
    updateArticlesFile(newArticles);
  } catch (e) {
    return res.status(500).send("A server error occured.");
  }

  return res.json(newArticle);
});

app.put("/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  const index = articles.findIndex((a) => a.id === articleId);

  if (index < 0) {
    return res.status(404).send(`ARTICLE with ID ${articleId} not found.`);
  }

  const { price, title, imageUrl } = req.body;

  if (
    !imageUrl ||
    typeof imageUrl !== "string" ||
    !price ||
    typeof price !== "number" ||
    !title ||
    typeof title !== "string"
  ) {
    return res.status(400).send("Missing or invalid data.");
  }

  const newArticle = { ...articles[index], price, imageUrl, title };
  const newArticles = [...articles];
  newArticles.splice(index, 1, newArticle);

  try {
    updateArticlesFile(newArticles);
  } catch (e) {
    return res.status(500).send("A server error occured.");
  }

  return res.json(newArticle);
});

app.delete("/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  const index = articles.findIndex((a) => a.id === articleId);

  if (index < 0) {
    return res.status(404).send(`Article with ID ${articleId} not found.`);
  }

  const newArticles = [...articles];
  newArticles.splice(index, 1);

  try {
    updateArticlesFile(newArticles);
  } catch (e) {
    return res.status(500).send("A server error occurred.");
  }

  return res.send(`Article with ID ${articleId} was deleted.`);
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));

module.exports = app;
