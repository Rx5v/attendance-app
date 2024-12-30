import multer from "multer";
import path from 'path';
import { checkStatusAttendanceModel, doCheckIn } from "../models/AttendanceModel.js"


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/attendace_picts');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}-${file.originalname.replace(/\s/g, '')}`);
    }
  });

export const uploadPhotoIn = multer({ storage });

export const checkAttendanceStatus = async (req, res) => {
    const id = req.user.id
    try {
        const result = await checkStatusAttendanceModel(id);
        return res.status(200).json({message: 'success', data: {
            isCheckout: result > 0 ? true : false
        }})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message })
    }
    
}

export const checkIn = async (req, res) => {
    // get ip
    const ip = req.ip;

    // get user id
    const id = req.user.id
    console.log(req.user.id);

    const {latitude, longitude} = req.body
    console.log(req.user);
    
    const photo = req.file ? path.posix.join('/', req.file.path.replace(/\\/g, '/')) : null;
    const datas = {
        id: id,
        location_in: longitude + ','+ latitude,
        ip: ip,
        photo_in: photo
    }
    try {
        const result = await doCheckIn(datas)
        return res.status(200).json({
            message: 'success',
            data: result.rows[0]
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message});
    }
    
}

export const checkOut = async (req, res) => {
    // get ip
    const ip = req.ip;

    // get user id
    const id = req.user.id
    console.log(req.user.id);

    const {latitude, longitude} = req.body
    console.log(req.user);
    
    const photo = req.file ? path.posix.join('/', req.file.path.replace(/\\/g, '/')) : null;
    const datas = {
        id: id,
        location_out: longitude + ','+ latitude,
        ip: ip,
        photo_in: photo
    }
    try {
        const result = await doCheckIn(datas)
        return res.status(200).json({
            message: 'success',
            data: result.rows[0]
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message});
    }
    
}