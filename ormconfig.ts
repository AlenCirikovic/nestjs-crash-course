import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [User],
    synchronize: true, // Set to false in the production development
    extra: {
        trustServerCertificate: true }  // Add this for Windows systems
};

export default config;

// const config: PostgresConnectionOptions = {
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "postgres",
//     database: "testDB",
//     logging: true  // Enable to see raw SQL queries
// };

