import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'coverPhoto') {
            cb(null, './uploads/cover_photos');
        } else if (file.fieldname === 'profilePhoto') {
            cb(null, './uploads/profile_photos');
        } else {
            cb(new Error('Invalid fieldname'));
        }
    },
    filename: function (req, file, cb) {
        if (file.fieldname === 'coverPhoto') {
            cb(null, 'cover-' + Date.now() + '-' + file.originalname);
        } else if (file.fieldname === 'profilePhoto') {
            cb(null, 'profile-' + Date.now() + '-' + file.originalname);
        } else {
            cb(new Error('Invalid fieldname'));
        }
    }
});

const upload = multer({ storage }).fields([
    { name: 'coverPhoto', maxCount: 1 },
    { name: 'profilePhoto', maxCount: 1 }
]);

export { upload };
