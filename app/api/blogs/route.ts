import mysql, { OkPacketParams, RowDataPacket } from 'mysql2/promise';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

type Data = {
    name: RowDataPacket[];
}

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("GET REQUEST")
    const connection = await mysql.createConnection({
        host: "localhost",
        database: "inventory",
        user: "root",
        password: ""
    });
    console.log("connected")
    try {
        const query = "SELECT * FROM gpc_inventory";
        const values: any[] = [];
        const [data] = await connection.execute(query, values)
        connection.end();
        console.log(data)
      res.json({ results: data })
      
    } catch (error) {
        console.error('Error fetching data:', error);
        res.json({ error: 'Internal server error' }); // Return an error response
    }
};