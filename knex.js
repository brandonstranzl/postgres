
const settings = require('./settings');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : "localhost",
    user : "development",
    password : "development",
    database : "vagrant"
  }
});

// test connection
knex.select('last_name').from('famous_people')
.asCallback(function(err, results) {
  if (err) return console.error(err);
  console.log(results);
})

// last name query from command line
const last_name_query = process.argv[2]
// if (!last_name_query) {
//   console.log("please enter a last name")
//   process.exit(1)
// }

console.log("Searching ...")

knex.select('last_name').from('famous_people').where('last_name', 'Lincoln')
.asCallback(function(err, results) {
  if (err) return console.error(err);
  console.log(results);
})

knex('famous_people').where({
  last_name: last_name_query
}).select()
.asCallback(function(err, results) {
  if (err) return console.error(err);
  console.log(`Found ${results.length} person(s) by the name '${last_name_query}':`);
    for(let i = 0; i < results.length; i++) {
    console.log(results[i].id + ": " + results[i].first_name + " " + results[i].last_name + ", born '" +
      results[i].birthdate)
    }
    // process.exit(1)
});

// insert new record
const first_name_query = process.argv[2]
const last_name_query2 = process.argv[3]
const birthdate_query = process.argv[4]

knex('famous_people').insert([
  {first_name: first_name_query,
    // last_name: last_name_query2,
  birthdate: birthdate_query}
  ])
.asCallback(function(err, results) {
  if (err) return console.error(err);
  console.log(results);

knex.select().from('famous_people')
.asCallback(function(err, results) {
  if (err) return console.error(err);
  console.log(results);
   process.exit(1);
});

});







