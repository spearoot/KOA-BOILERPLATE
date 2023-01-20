const {pool} = require('../../data')

exports.store = async (user_id, image_id, content) => {
    const query = `INSERT INTO feed
    (user_id, image_id, content)
    VALUES (?,?,?)`;
    return await pool(query, [user_id, image_id, content]);
}


exports.show = async (user_id) => {
    const query = `SELECT content FROM feed WHERE
    user_id = ?`;
    let result = await pool(query, [user_id]);
    return (result.length < 0)? null : result[0];
}

exports.del = async (user_id) => {
    const query = `DELETE FROM feed WHERE
    user_id = ?`;
    return await pool(query, [user_id]);
}

exports.update = async (content, image_id, user_id) => {
    const query = `UPDATE feed 
    SET content = ?, image_id = ?, updated_at = current_timestamp()
    WHERE
    user_id = ?`;
    return await pool(query, [content, image_id, user_id]);
}


exports.index = async () => {
    const query = `SELECT user_id, image_id, content, updated_at, created_at FROM feed`;
    let result = await pool(query, []);
    return (result.length < 0)? null : result;
}