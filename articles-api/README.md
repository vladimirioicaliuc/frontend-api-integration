# Simple Articles API

## Prerequisites
node >= 14.16.7

## How to start the app

```
cd articles-api
npm install
node index.js
```

The Articles API will be accessible on [localhost:3000/articles](http://localhost:3000/articles).

## Available endpoints

### Get all articles
*GET /articles*

### Get article by ID
*GET /articles/:articleId*

### Add new article
*POST /articles*

Request body:
```
{ "author": "Author name", "title": "Article title" }
```

### Update article by ID
*PUT /articles/:articleId*

Request body:
```
{ "author": "Author name", "title": "Article title" }
```

### Delete article by ID
*DELETE /articles/:articleId*