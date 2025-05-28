import pool from "../config/db.js";

const createUserTable = async () => {
  const query = `
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT now()
        );
    `;

    try {
        pool.query(query);
        console.log("User table created successfully if not exists.");
    }catch(err){
        next(err);
    }
};

export default createUserTable;