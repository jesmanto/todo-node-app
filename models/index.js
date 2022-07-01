const mongoose = require('mongoose');
const {todoSchema} = require('../db')
exports.Todo = mongoose.model('Task',todoSchema)