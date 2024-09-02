const { Client } = require('pg');
const connectionString = "postgres://postgres:root@localhost:5500/Instagram-Main";

const client = new Client(connectionString);

async function connectClient() {
  try {
    client.connect();
    console.log(client)
    console.log("Connected successfully");
    const res = await client.query('SELECT * FROM users');
    console.log(res.rows); 
  } catch (err) {
    console.error("Connection error", err.stack);
  }
}

connectClient();
