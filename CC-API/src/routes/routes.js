const router = require('express').Router();
const authenticateToken = require('../middleware/AuthenticateToken');

const { 
    Login, 
    Register, 
    Logout, 
    refreshToken, 
} = require('../controllers/authController')

const {
    getAllUsers,
    getUserById,
    updateUserById,
    uploadPictureImageByUserId
} = require('../controllers/userController')

const { 
    getAllJobs
} = require('../controllers/jobController')

// Mendefinisikan Route Auth
router.post('/register', Register);
router.post('/login', Login)
router.get('/token', authenticateToken, refreshToken)
router.delete('/logout', Logout)

// User Management
router.get('/users', getAllUsers)
router.get('/users/:_id', authenticateToken, getUserById)
router.put('/users/:_id', authenticateToken, updateUserById)

// Mendefinsikan Route Job
router.get('/jobs', getAllJobs)

// router.route('/jobs/:id').get(jobController.getJobById)
// router.route('/jobs/').post(jobController.createJob)
// router.route('/jobs/:id').put(jobController.updateJob)
// router.route('/jobs/:id').delete(jobController.deleteJob)

// JobByKategori?
// Cleaning, Electrical Help, Plumbing & Laundry, Ironing, Help Moving

module.exports = router;
