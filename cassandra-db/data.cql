CREATE KEYSPACE IF NOT EXISTS articles_db WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};

USE articles_db;

CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT,
  price FLOAT,
  imageUrl TEXT
);