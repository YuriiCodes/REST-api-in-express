import userService from "./userService.js";
import UserService from "./userService.js";
class UserController {
    async getAll(req, res) {
        try {
            const users = await userService.getUsers();
            return res.json(users);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    async create(req, res) {
        try {
            const createdUser = await userService.create(req.body);
            res.json(createdUser);
        } catch (err) {
            return res.status(500).json(err)
        }
    }
    async delete(req, res) {
        try {
            const deletedUser = await userService.delete(req.params.id);
            return res.json(deletedUser);
        } catch(err) {
            return res.status(500).json(err)
        }
    }
    async update(req, res) {
        try{
           const updatedUser = await userService.update(req.body);
           return res.json(updatedUser)
        } catch(err) {
            res.status(500).json(err)
        }
    }
    async findOne(req, res) {
        try {
           const user = await userService.findOne(req.params.id);
           return res.json(user)
        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default new UserController();