import pool from '../db.js';

export const checkStatusAttendanceModel = async (userId) => {
    const result = await pool.query('SELECT id FROM attendance WHERE user_id = $1 AND date = NOW()', [userId])
    return result.rowCount
}

export const doCheckIn = async (body) => {   
    const {id, location_in, photo_in, ip} = body
    const result = await pool.query(
        'INSERT INTO attendance (user_id, date, location_in, photo_in, clock_in, ip) VALUES ($1, CURRENT_DATE, $2, $3, NOW(), $4)  RETURNING *',
        [id, location_in, photo_in, ip]
    )
    return result
}

export const doCheckOut = async (body) => {   
    const {id, location_out, photo_out, ip} = body
    const result = await pool.query(
        'UPDATE attendance SET user_id, date, location_out, photo_out, clock_out, ip) VALUES ($1, CURRENT_DATE, $2, $3, NOW(), $4)  RETURNING *',
        [id, location_out, photo_out, ip]
    )
    return result
}