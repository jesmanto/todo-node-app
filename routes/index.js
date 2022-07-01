const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/api/',controller.fetchTasks);
router.get('/api/:id',controller.findTaskById)
router.post('/api/add',controller.addTask);
router.put('/api/update/:id',controller.updateTask)
router.delete('/api/delete/:id',controller.deleteTask)

module.exports = router