# News Article API

This repository contains a simple API which stores and retrieves news articles and their summaries from a SQLite database.

The API is built using Express.js and uses the Better-SQLite3 library to interact with the database.

The API is split into three endpoints:

- `GET /articles`: Returns all articles in the database

- `GET /articles/:id`: Returns a single article by its ID

- `GET /articles?category=<category>`: Returns all articles with the specified category


## Installation 

To install the dependencies, run the following command:

```bash
npm install
```        

## Usage                

To start the API, run the following command:

```bash
npm start
``` 

The API will be available at http://localhost:3004/

    


