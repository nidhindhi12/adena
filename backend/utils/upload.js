const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary.config');


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'demoimages',
        allowed_formats: ['jpg', 'png', 'jpeg']
    }

})

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const folder = req.body.folder;
//         const uploadpath = path.join(__dirname, "..", "assets", folder);
//         if (!fs.existsSync(uploadpath)) {
//             fs.mkdirSync(uploadpath, { recursive: true });
//         }
//         cb(null, uploadpath);
//     },
//     filename: (req, file, cb) => {
//         const uniquename = Date.now();
//         cb(null, uniquename + path.extname(file.originalname))
//     },
// });

// const filterfile = (req, file, cb) => {
//     const validTypes = /jpeg|jpg|webp|png/;
//     const extValid = validTypes.test(
//         path.extname(file.originalname).toLowerCase()
//     );
//     const mimeValid = validTypes.test(file.mimetype);
//     if (extValid && mimeValid) return cb(null, true);
//     cb(new Error('Only image files are allowed!'));
// }

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

module.exports = upload;