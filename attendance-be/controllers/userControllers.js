import pool from '../db.js';
import multer from 'multer';
import path from 'path';
import { unlink } from 'fs';
import { getUserByIdModel, createUserModel, getTotalUserModel, getAllUserModel, updateUserModel } from '../models/UserModels.js';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/profile_picts');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);  // Ambil ekstensi file
      cb(null, `${Date.now()}-${file.originalname.replace(/\s/g, '')}`);
    }
  });

export const uploadProfilePict = multer({ storage });

// Get All Users with Pagination
export const getAllUsers = async (req, res) => {
    console.log(req.query.page);
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const filter = {
        name: req.query.name ?? null,
        role: req.query.role ?? null,
        email: req.query.email ?? null
    }
    console.log(filter);
    
  
    try {
      const result = await getAllUserModel(limit, offset, filter);
      const total = await getTotalUserModel(filter)
  
      res.status(200).json({
        message: 'success',
        data: result.rows,
        meta: {
          total: parseInt(total.rows[0].count),
          page,
          limit
        }
      });
    } catch (err) {
       console.log(err);
       
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get User by ID
  export const getUserById = async (req, res) => {
    try {
      const result = await getUserByIdModel(req.params.id)
      if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });
      const user = result.rows[0]
      console.log(user);
      user.photo = user.photo ?  `${req.protocol}://${req.get('host')}${user.photo}` : null
      
      res.status(200).json({ message: 'success', data: user  });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Create User
  export const createUser = async (req, res) => {
      const { nama, jabatan, phone, email, password } = req.body;
      const filepath = req.file ? req.file.path : null
      const foto = req.file ? path.posix.join('/', req.file.path.replace(/\\/g, '/')) : null;
      try {
        const result = await createUserModel(nama, jabatan, phone, email, password, foto)
        res.status(201).json({ message: 'success', data: result.rows[0] });
    } catch (err) {
        console.log(err);
        if(filepath){
            unlink(filepath, (err) => {
                if (err) console.error('Error deleting file:', err);
            })
        }
        res.status(400).json({ error: err.message });
    }
  };
  
  // Update User
  export const updateUser = async (req, res) => {
    const { name, role, phone, email } = req.body;
    const { id } = req.params;
    try {
      const result = await updateUserModel(name, role, phone, email, id)
      if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'success', data: result.rows[0] });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Delete User (Soft Delete)
  export const deleteUser = async (req, res) => {
    try {
      const result = await pool.query('UPDATE users SET deleted_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING *', [req.params.id]);
      if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'success', data: result.rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };