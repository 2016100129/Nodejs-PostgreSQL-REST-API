const { Router } = require('express')
const router = Router()
const { getUsers, createUsers, getUserById, deleteUserById } = require('../controller/index.controller.js')

router.get('/users', getUsers)
router.post('/users', createUsers)
router.get('/users/:id', getUserById)
router.delete('/users/:id', deleteUserById)

module.exports = router