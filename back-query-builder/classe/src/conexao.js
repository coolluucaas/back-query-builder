const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'market_cubos_knexjs',
    password: 'cool$enh@',
    port: 5432,
})

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'cool$enh@',
        database: 'market_cubos_knexjs',
    },
})

const query = (text, param) => {
    return pool.query(text, param)
}

module.exports = {
    query,
    knex,
}
