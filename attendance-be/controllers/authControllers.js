import jwt from 'jsonwebtoken';
import { getSingleUser } from "../models/UserModels.js";
const SECRET = process.env.JWT_SECRET;
import bcrypt from 'bcrypt'


export const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await getSingleUser('email', email)
    const user = result.rows[0];
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ 
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
        phone: user.phone,
        created_at: user.created_at,
        updated_at: user.updated_at
    }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'success' , token });
};