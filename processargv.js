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

  client.query('SELECT * FROM famous_people;', (err, result) => {
    if (err) throw err;
    console.log(result.rows);
})


// check if argv[2] exists if not raise error
const last_name_query = process.argv[2]
if (!last_name_query) {
  console.log("please enter a last name")
  process.exit(1)
}

console.log("Searching ...")

client.query("SELECT * FROM famous_people WHERE last_name = $1", [last_name_query], (err, res) => {
  if (err) {
    console.error(err.stack)
  } else {
    console.log(`Found ${res.rows.length} person(s) by the name '${last_name_query}':`)
    for(let i = 0; i < res.rows.length; i++) {
      //console.log(res.rows[i])
    console.log(res.rows[i].id + ": " + res.rows[i].first_name + " " + res.rows[i].last_name + ", born '" +
      res.rows[i].birthdate.getFullYear() + "-"
      + res.rows[i].birthdate.getMonth() + "-"
      + res.rows[i].birthdate.getDate() + "'")
    }

  }
  client.end();
})

  });
