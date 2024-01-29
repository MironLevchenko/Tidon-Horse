export const config ={
    development: {
    client: 'sqlite3',
    connection: {
        filename: './api/horsedb.db'
    },
    migrations: {
        directory: './api/migrations'
    },
    seeds: {
        directory: './api/seeds'
    },
    useNullAsDefault: true,
}
}