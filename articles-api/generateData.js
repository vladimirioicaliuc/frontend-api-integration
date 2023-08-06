const { Client } = require("cassandra-driver");
var { faker } = require("@faker-js/faker");

const cassandraClient = new Client({
  contactPoints: ["localhost"],
  localDataCenter: "datacenter1",
  keyspace: "articles_db",
});

async function generateAndInsertData() {
  try {
    await cassandraClient.connect();

    const insertQuery =
      "INSERT INTO articles_db.articles (id, title, price, imageUrl) VALUES (?, ?, ?, ?)";

    for (let i = 0; i < 100; i++) {
      const id = faker.string.uuid();
      const title = faker.commerce.productName();
      const price = parseFloat(faker.commerce.price());
      const imageUrl = faker.image.urlLoremFlickr({ category: "product" });

      const query = `INSERT INTO articles_db.articles (id, title, price, imageUrl) VALUES ('${id}', '${title}', ${price}, '${imageUrl}')`;
      await cassandraClient.execute(query);
      console.log(`Inserted article with id ${id}`);
    }

    console.log("Data insertion completed.");
  } catch (err) {
    console.error("Error inserting data", err);
  } finally {
    cassandraClient.shutdown();
    console.log("Disconnected from Cassandra");
  }
}

generateAndInsertData();
