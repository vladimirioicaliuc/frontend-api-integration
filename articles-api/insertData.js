const fs = require("fs");
const { Client } = require("cassandra-driver");

// Cassandra connection setup
const cassandraClient = new Client({
  contactPoints: ["localhost:9042"], // Cassandra node(s)
  localDataCenter: "datacenter1",
  keyspace: "articles_db",
});

async function insertData() {
  try {
    cassandraClient
      .connect()
      .then(() => console.log("Connected to Cassandra"))
      .catch((err) => console.error("Error connecting to Cassandra", err));

    // Read and parse the JSON file
    const data = fs.readFileSync("./articles.json", "utf8");
    const article = JSON.parse(data);

    // Insert the data into the "articles" table
    const { id, title, price, imageUrl } = article[1];
    const query =
      "INSERT INTO articles_db.articles (id, title, price, imageUrl) VALUES (?, ?, ?, ?)";
    await cassandraClient.execute(query, [id, title, price, imageUrl]);
    console.log(`Inserted article with id ${id}`);

    console.log("Data insertion completed.");
  } catch (err) {
    console.error("Error inserting data", err);
  } finally {
    cassandraClient.shutdown();
    console.log("Disconnected from Cassandra");
  }
}

insertData();
