const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
        INSERT INTO posts(
            title,
            body,
            created_at
        )
        VALUES(
           '${this.title}',
           '${this.body}',
           '${createdAtDate}'
        )
        `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "Select * FROM posts;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;

    return db.execute(sql);
  }

  static removeById(id) {
    let sql = `DELETE FROM posts WHERE id = ?;`;
    return db.execute(sql, [id]);
  }

  static updateById(id, updatedData) {
    const { title, body, created_at } = updatedData;

    let sql = `UPDATE posts SET`;

    sql += ` title = '${title}',`;
    sql += ` body = '${body}'`;
    sql += ` WHERE id = ${id};`;

    return db.execute(sql, [updatedData, id]);
  }
}
module.exports = Post;
