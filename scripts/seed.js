const mysql = require('mysql2/promise')
require('dotenv').config();

async function handler(){
    const db= await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    try {
        const queries = [`
        CREATE TABLE IF NOT EXISTS gpc_inventory (
            id INT AUTO_INCREMENT PRIMARY KEY,
            pc_name VARCHAR(255),
            mac_address VARCHAR(255),
            computer_type VARCHAR(255),
            specs VARCHAR(255),
            supplier VARCHAR(255),
            date_purchase VARCHAR(255)
        )
        `,
        `
        CREATE TABLE IF NOT EXISTS lsi_inventory (
            id INT AUTO_INCREMENT PRIMARY KEY,
            pc_name VARCHAR(255),
            mac_address VARCHAR(255),
            computer_type VARCHAR(255),
            specs VARCHAR(255),
            supplier VARCHAR(255),
            date_purchase VARCHAR(255)
        )
        `,
        `
        CREATE TABLE IF NOT EXISTS gkc_inventory (
            id INT AUTO_INCREMENT PRIMARY KEY,
            pc_name VARCHAR(255),
            mac_address VARCHAR(255),
            computer_type VARCHAR(255),
            specs VARCHAR(255),
            supplier VARCHAR(255),
            date_purchase VARCHAR(255)
        )
        `,
        `
        CREATE TABLE IF NOT EXISTS gsrc_inventory (
            id INT AUTO_INCREMENT PRIMARY KEY,
            pc_name VARCHAR(255),
            mac_address VARCHAR(255),
            computer_type VARCHAR(255),
            specs VARCHAR(255),
            supplier VARCHAR(255),
            date_purchase VARCHAR(255)
        )
        `,
        ]
        for(const query of queries){
            await db.query(query);
        }
        
        console.log("Table created Successfully");
    } catch (error){
        console.log("Error creating table", error)
    } finally {
        await db.end();
    }
}
handler();