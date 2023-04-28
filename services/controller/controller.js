const { Activities, Todos } = require("../models");

class Controller {
  static async GetActivity(req, res, next) {
    try {
      const activity = await Activities.findAll();
      res.status(200).json(activity);
    } catch (error) {
      next(error);
    }
  }

  static async GetOne(req, res, next) {
    try {
      const id = req.params.activityId;
      const activity = await Activities.findByPk(id);
      if (activity === null)
        throw {
          name: "FAILED (Id not found)",
          message: `Activity with ID ${id} Not Found`,
        };
      res.status(200).json(activity);
    } catch (error) {
      next(error);
    }
  }

  static async Create(req, res, next) {
    try {
      const { title, email } = req.body;
      const activity = await Activities.create({ title, email });

      res.status(201).json(activity);
    } catch (error) {
      next(error);
    }
  }

  static async Delete(req, res, next) {
    try {
      const id = req.params.activityId;
      const activity = await Activities.destroy({ where: { id } });
      if (!activity)
        throw {
          name: "FAILED (Id not found)",
          message: `Activity with ID ${id} Not Found`,
        };
      res.status(200).json({ message: "Success", data: {} });
    } catch (error) {
      next(error);
    }
  }

  static async Update(req, res, next) {
    try {
      const id = req.params.activityId;
      const { title } = req.body;
      if (!title) throw { name: "FAILED (body blank)" };
      const activity = await Activities.findOne({ where: { id } });
      if (!activity) {
        throw {
          name: "FAILED (Id not found)",
          message: `Activity with ID ${id} Not Found`,
        };
      }
      await Activities.update({ title }, { where: { id } });
      const updatedActivity = await Activities.findOne({ where: { id } });
      res.status(200).json({ message: "Succes", data: updatedActivity });
    } catch (error) {
      next(error);
    }
  }

  static async GetAll(req, res, next) {
    try {
      const { activity_group_id } = req.query;
      console.log(req.query);
      let option = {};

      if (activity_group_id) {
        option.where = {
          activity_group_id,
        };
      }

      const todos = await Todos.findAll(option);
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async GetOneTodo(req, res, next) {
    try {
      const id = req.params.todoId;
      const todo = await Todos.findByPk(id);
      if (!todo)
        throw {
          name: "FAILED (Id not found)",
          message: `Todos with ID ${id} Not Found`,
        };
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async CreateTodo(req, res, next) {
    try {
      const { activity_group_id, title, priority, is_active } = req.body;

      const todo = await Todos.create({
        activity_group_id,
        title,
        priority,
        is_active,
      });
      res.status(201).json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async DeleteTodo(req, res, next) {
    try {
      const id = req.params.todoId;
      const todo = await Todos.destroy({ where: { id } });
      if (!todo)
        throw {
          name: "FAILED (Id not found)",
          message: `Todos with ID ${id} Not Found`,
        };
      res.status(200).json({ message: "Succes", data: {} });
    } catch (error) {
      next(error);
    }
  }

  static async UpdateTodo(req, res, next) {
    try {
      const id = req.params.todoId;
      const { title } = req.body;
      if (!title) throw { name: "FAILED (body blank)" };
      const todo = await Todos.findOne({ where: { id } });
      if (!todo)
        throw {
          name: "FAILED (Id not found)",
          message: `Todos with ID ${id} Not Found`,
        };
      await Todos.update({ title }, { where: { id } });
      const updateTodos = await Todos.findOne({ where: { id } });
      res.status(200).json({ message: "Succes", data: updateTodos });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
