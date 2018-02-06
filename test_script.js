const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT $1::int AS number", ["1"], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result); //output: 1
    client.end();
  });
});

client.query(famous_people, process.argv[2], (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(result)
  }
})
