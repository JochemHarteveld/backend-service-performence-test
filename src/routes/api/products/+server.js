
import mysql from "mysql2/promise";
import mysqlConfig from "$lib/config/mysqlConfig";

const connection = await mysql.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  database: mysqlConfig.database,
  password: mysqlConfig.password,
});

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const result = await connection.execute(
    `SELECT * FROM products
    LIMIT 1;`
  );
  return new Response(JSON.stringify({result}));
}

export async function POST({ request }) {
  const data = await request.json();
  const { title, description, price, inStock, imageUrl } = data;
  let response = null;

  try {
    const [result] = await connection.query(
      "INSERT INTO products(title, description, price, inStock, imageUrl ) VALUES (?,?,?,?,?)",
      [title, description, price, inStock, imageUrl]
    );
    response = new Response(JSON.stringify({ id: result.insertId }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.log(error);
    response = new Response(JSON.stringify({ message: "Error creating product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  return response;

}

