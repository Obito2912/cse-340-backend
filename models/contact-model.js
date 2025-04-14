const pool = require("../database/");

async function saveMessage(name, email, message) {
  try {
    const sql = `INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *`;
    const result = await pool.query(sql, [name, email, message]);
    return result.rows[0];
  } catch (error) {
    return error.message;
  }
}

module.exports = { saveMessage };
