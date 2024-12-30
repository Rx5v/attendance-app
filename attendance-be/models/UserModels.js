import pool from '../db.js';
import bcrypt from 'bcrypt'

export const createUserModel = async (name, role, phone, email, password, foto) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        'INSERT INTO users (name, role, phone, email, password, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [name, role, phone, email, hashedPassword, foto]
      );
    return result;
}

export const updateUserModel = async (name, role, phone, email, id) => {
    const result = await pool.query(
        'UPDATE users SET name = $1, role = $2, phone = $3, email = $4, updated_at = NOW() WHERE id = $5 AND deleted_at IS NULL RETURNING *',
        [name, role, phone, email, id]
      );
    return result;
}

export const getAllUserModel = async (limit, offset, filter) => {
    const { name, role, email } = filter;
    const result = await pool.query(`SELECT id, name, email, phone, role, photo, created_at FROM users WHERE deleted_at IS NULL ${name ? 'AND name ILIKE %' + name + '%' : ''} ${role ? 'AND role ILIKE %' + role + '%' : ''} ${email ? 'AND email ILIKE %' + email + '%' : ''} LIMIT $1 OFFSET $2`, [limit, offset]);
    return result;
}

export const getUserByIdModel = async (id) => {
    const result = await pool.query('SELECT id, name, email, phone, role, photo, created_at FROM users WHERE id = $1 AND deleted_at IS NULL', [id]);
    return result;
}

export const getSingleUser = async (key, value) => {
    const result = await pool.query(`SELECT * FROM users WHERE ${key} = $1`, [value]);
    return result;
}

export const getTotalUserModel = async (filter) => {
    const { name, role, email } = filter;
    const result = await pool.query(`SELECT COUNT(*) FROM users WHERE deleted_at IS NULL ${name ? 'AND name ILIKE %' + name + '%' : ''} ${role ? 'AND role ILIKE %' + role + '%' : ''} ${email ? 'AND email ILIKE %' + email + '%' : ''} `);
    return result;
}