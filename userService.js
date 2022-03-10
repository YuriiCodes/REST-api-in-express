import User from "./user.js";
class userService {
    async getUsers(){
        const user = await User.find();
        return user;
    }
    async create(user){
        const createdUser = await User.create(user);
        return createdUser;
    }
    async delete(id){
        if(!id){
            throw new Error("You provided wrong user ID!")
        }
        const deletedUser = await User.findByIdAndDelete(id, {new: true});
        return deletedUser;
    }
    async update(user) {
        if(!user){
            throw new Error("You provided wrong user info to update!")
        }
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {new:true});
        return updatedUser;
    }
    async findOne(id) {
        if(!id){
            throw new Error("You provided wrong user ID!")
        }
        const user = await User.findById(id);
        return user;
    }
}
export default new userService();