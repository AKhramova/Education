const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
});

connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Successful connection!");
    }
});

//task 1
const getData = "SELECT COUNT(1) AS count FROM hwsql.person;"; 

//task 2
// const getData = "SELECT AVG(Age) AS Age FROM hwsql.person;"; 

//task 3
// const getData = "SELECT DISTINCT LastName FROM hwsql.person ORDER BY LastName;"; 

//task 4
// const getData = "SELECT LastName, COUNT(*) FROM hwsql.person GROUP BY LastName;";

//task 5
// const getData = "SELECT LastName FROM hwsql.person WHERE LastName LIKE '_%б%_' GROUP BY LastName;";

//task 6
// const getData = "SELECT * FROM hwsql.person WHERE Id_Street IS NULL;";

//task 7
// const getData = "SELECT * FROM hwsql.person WHERE AGE < 18 AND Id_Street = 1;";

//task 8
// const getData = `SELECT hwsql.street.id, hwsql.street.name, COUNT(hwsql.person.id) FROM hwsql.street 
//     JOIN hwsql.person ON hwsql.street.id = hwsql.person.id_street GROUP BY hwsql.street.id, hwsql.street.name;`;

//task 9
// const getData = "SELECT * FROM hwsql.street where length(name) = 6;";

//task 10
// const getData = `SELECT hwsql.street.id, hwsql.street.name FROM hwsql.street JOIN hwsql.person
//     ON hwsql.street.id = hwsql.person.id_street GROUP BY hwsql.street.id, hwsql.street.name HAVING COUNT(hwsql.person.id) < 3;`;

connection.query(getData, (err, res) => {
    if (!err) {
        console.log(res);
    }
})