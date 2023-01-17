const { pool } = require('../../data')
/**
 * 회원가입
 * @param {string} email 메일(아이디) 
 * @param {string} password 비밀번호
 * @param {string} name 이름
 * @returns 
 */
exports.register = async (email, password, name) => {
    const query = `INSERT INTO user 
    (email, password, name)
    VALUES (?,?,?)`;
    return await pool(query, [email, password, name]);
}
