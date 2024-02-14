const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const path = require("path");
const { open } = require("sqlite");
const cors = require("cors");
app.use(cors()); //used to access the urls in any domains

const dbPath = path.join(__dirname, "articles.db");

app.use(express.json());

let db = null;

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () =>
      console.log("Server running at http://localhost:3000/")
    );
  } catch (e) {
    console.log(`DB Error : ${e.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

//API for returning all articles
app.get("/articles/", async (request, response) => {
  const dbQuery = `select * from article;`;
  const articlesArray = await db.all(dbQuery);
  response.send(articlesArray);
});

//API for returning articles based on its id
app.get("/articles/:articleId", async (request, response) => {
  const { articleId } = request.params;
  const dbQuery = `select * from article where id = ${articleId};`;
  const article = await db.get(dbQuery);
  response.send(article);
});

//API for returning articles based on its category
app.get("/articles/", async (request, response) => {
  const { category } = request.query;
  const dbQuery = `select * from article where category = '${category}';`;
  const article = await db.all(dbQuery);
  response.send(article);
});
