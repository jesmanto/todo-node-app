const { Todo } = require("../models");

exports.testServer = (req, res) => {
  res.send("TODO App Server...");
};

// Callback method to add new task to the todo list
exports.addTask = (req, res) => {
  const task = req.body.task;
  Todo.create(
    {
      title: task.title,
      desc: task.desc,
      priority: task.priority,
      completed: task.completed,
    },
    (err, task) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      return res.status(200).json({ message: "New task created", task });
    }
  );
};

// Callback method to fetch all tasks
exports.fetchTasks = (req, res) => {
  Todo.find({}, (err, tasks) => {
    if (err) return res.status(500).json({ message: err });
    return res.status(200).json({ tasks });
  });
};

// Callback method to fetch a single task using the ID
exports.findTaskById = (req, res) => {
  Todo.findById(req.params.id, (err, task) => {
    if (err) return res.status(500).json({ message: err.message });
    else if (!task) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ task });
  });
};

// Callback method to update a single task using the ID
exports.updateTask = (req, res) => {
  const newTask = req.body.task;
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      completed: newTask.completed,
    },
    (err, task) => {
      if (err) {
        return res.status(500).json({ message:err.message });
      } else if (!task) {
        return res.status(404).json({ message: "Task does not exist" });
      } else {
        task.save((err,savedTask)=>{
          if(err) return res.status(400).json({message:err})
          return res.status(200).json({ message: "Successfully updated", savedTask });
        })
        
      }
    }
  );
};

// Callback method to delete a single task using the ID
exports.deleteTask = (req, res) => {
  Todo.findByIdAndDelete({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    } else if (!task) {
      return res.status(404).json({ message: "Task does not exist" });
    } else {
      return res.status(200).json({ message: "Successfully deleted", task });
    }
  });
};
